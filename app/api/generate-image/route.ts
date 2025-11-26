// app/api/generate-image/route.ts
import { NextResponse } from "next/server";

const REPLICATE_API_TOKEN = process.env.REPLICATE_API_TOKEN;

if (!REPLICATE_API_TOKEN) {
  throw new Error("请在 Vercel 环境变量中设置 REPLICATE_API_TOKEN");
}

// 2025 年 11 月最新版 FLUX.1-dev Inpainting 模型（zsxkib 官方）
const MODEL_VERSION =
  "947e3c6978a3d9b23b5143e9b87b1261d938a7e3f9c12d4599d28a1e6e3b2c1d";

export async function POST(request: Request) {
  try {
    const { base64Image, prompt } = await request.json();

    if (!base64Image || !prompt?.trim()) {
      return NextResponse.json(
        { success: false, message: "缺少图片或提示词" },
        { status: 400 }
      );
    }

    const response = await fetch("https://api.replicate.com/v1/predictions", {
      method: "POST",
      headers: {
        Authorization: `Token ${REPLICATE_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        version: MODEL_VERSION,
        input: {
          image: `data:image/png;base64,${base64Image}`,
          prompt: prompt.trim(),
          strength: 0.92,
          num_inference_steps: 28,
          guidance_scale: 7.5,
          output_format: "png",
          output_quality: 95,
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Replicate API 错误:", data);
      return NextResponse.json(
        { success: false, message: data.detail || "AI 服务暂时不可用" },
        { status: 502 }
      );
    }

    // 轮询结果（简单可靠）
    let result = data;
    while (result.status === "starting" || result.status === "processing") {
      await new Promise((r) => setTimeout(r, 1800));
      const poll = await fetch(result.urls.get, {
        headers: { Authorization: `Token ${REPLICATE_API_TOKEN}` },
      });
      result = await poll.json();
    }

    if (result.status === "succeeded" && result.output?.[0]) {
      return NextResponse.json({
        success: true,
        generatedImageUrl: result.output[0], // 直接返回公开 HTTPS 链接
      });
    } else {
      console.error("生成失败:", result);
      return NextResponse.json(
        { success: false, message: result.error || "生成失败，请重试" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("服务器内部错误:", error);
    return NextResponse.json(
      { success: false, message: "服务器错误，请稍后重试" },
      { status: 500 }
    );
  }
}

export const config = {
  maxDuration: 300, // 允许最多运行 5 分钟
};