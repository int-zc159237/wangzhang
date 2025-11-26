import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Hero() {
  return (
    <section className="container py-24 md:py-32 relative">
      {/* Banana decorations */}
      <div
        className="absolute top-20 left-10 text-6xl opacity-20 animate-bounce"
        style={{ animationDelay: "0s", animationDuration: "3s" }}
      >
        🍌
      </div>
      <div
        className="absolute top-40 right-16 text-5xl opacity-20 animate-bounce"
        style={{ animationDelay: "1s", animationDuration: "4s" }}
      >
        🍌
      </div>

      <div className="mx-auto max-w-4xl text-center relative z-10">
        <Badge variant="secondary" className="mb-6 px-4 py-1.5">
          <span className="text-xs font-medium">🚀 The AI model that outperforms competitors</span>
        </Badge>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance">Nano Banana</h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance leading-relaxed max-w-3xl mx-auto">
          Transform any image with simple text prompts. Nano-banana's advanced model delivers consistent character
          editing and scene preservation that surpasses competitors. Experience the future of AI image editing.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8">
            Start Editing
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8 bg-transparent">
            View Examples
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="text-lg">⚡</span>
            <span>One-shot editing</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">🖼️</span>
            <span>Multi-image support</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">💬</span>
            <span>Natural language</span>
          </div>
        </div>
      </div>
    </section>
  )
}
