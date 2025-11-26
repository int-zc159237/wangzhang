// app/page.tsx
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { EditorDemo } from "@/components/editor-demo";
import { Showcase } from "@/components/showcase";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";

import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";

export default function Home() {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <div className="min-h-screen bg-background text-foreground">
          <Header />
          <main>
            <Hero />
            <Features />
            <EditorDemo />
            <Showcase />
            <Testimonials />
            <FAQ />
          </main>
          <Footer />
        </div>
      </ThemeProvider>

      {/* 全局通知组件（sonner） */}
      <Toaster position="top-center" richColors closeButton />
    </>
  );
}