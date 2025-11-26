// components/editor-demo.tsx
"use client";

import { useState } from "react";
import { Upload, Sparkles, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

import EditorDemo from "./app/components/EditorDemo";

interface EditorDemoProps {}

export default function EditorDemo({}: EditorDemoProps) {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState("");
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageUpload = async (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      setUploadedImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleGenerate = async () => {
    if (!uploadedImage || !prompt.trim()) {
      toast.error("请上传图片并输入提示词");
      return;
    }

    setIsLoading(true);
    setGeneratedImage(null);

    try {
      const base64 = uploadedImage.split(",")[1];
      const res = await fetch("/api/generate-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ base64Image: base64, prompt }),
      });

      const data = await res.json();

      if (data.success) {
        setGeneratedImage(data.generatedImageUrl);
        toast.success("AI 生成成功！✨");
      } else {
        toast.error(data.message || "生成失败");
      }
    } catch (err) {
      toast.error("网络错误，请重试");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            立即体验 AI 魔法编辑
          </h2>
          <p className="text-xl text-muted-foreground">
            上传一张图，输入你的创意，30秒内获得惊艳结果
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* 左侧：上传 + 输入 */}
          <Card className="p-8 shadow-2xl border-primary/10">
            <div className="space-y-8">
              {/* 上传区域 */}
              <div>
                <label className="text-lg font-semibold mb-4 block flex items-center gap-2">
                  <Upload className="w-6 h-6" />
                  上传参考图
                </label>
                <div className="border-2 border-dashed rounded-xl p-8 text-center hover:border-primary transition-all">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="upload"
                    onChange={(e) => e.target.files?.[0] && handleImageUpload(e.target.files[0])}
                  />
                  <label htmlFor="upload" className="cursor-pointer">
                    {uploadedImage ? (
                      <img src={uploadedImage} alt="上传的图片" className="max-h-80 mx-auto rounded-lg shadow-lg" />
                    ) : (
                      <div className="space-y-4">
                        <div className="w-24 h-24 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                          <Upload className="w-12 h-12 text-primary" />
                        </div>
                        <p className="text-lg">点击上传或拖拽图片到这里</p>
                        <p className="text-sm text-muted-foreground">支持 PNG、JPG、WEBP</p>
                      </div>
                    )}
                  </label>
                </div>
              </div>

              {/* 提示词输入 */}
              <div>
                <label className="text-lg font-semibold mb-4 block flex items-center gap-2">
                  <Sparkles className="w-6 h-6" />
                  告诉我你的创意
                </label>
                <Textarea
                  placeholder="例如：把背景换成赛博朋克城市，让人物穿上宇航服，夜晚霓虹灯效果..."
                  className="min-h-32 text-lg resize-none"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
              </div>

              {/* 生成按钮 */}
              <Button
                onClick={handleGenerate}
                disabled={!uploadedImage || !prompt || isLoading}
                size="lg"
                className="w-full text-lg py-8 font-bold"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                    AI 正在创作中...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-3 h-6 w-6" />
                    立即生成魔法
                  </>
                )}
              </Button>
            </div>
          </Card>

          {/* 右侧：结果展示 */}
          <Card className="p-8 shadow-2xl border-primary/10 min-h-96">
            <h3 className="text-2xl font-bold mb-6 text-center">AI 生成结果</h3>
            <div className="bg-muted/50 rounded-xl min-h-96 flex items-center justify-center p-8">
              {generatedImage ? (
                <img
                  src={generatedImage}
                  alt="AI 生成的图片"
                  className="max-w-full max-h-full rounded-xl shadow-2xl"
                />
              ) : (
                <div className="text-center space-y-4">
                  <div className="text-8xl">AI</div>
                  <p className="text-xl text-muted-foreground">
                    {isLoading ? "AI 正在努力创作中..." : "上传图片并描述你的想法，魔法即将发生"}
                  </p>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}