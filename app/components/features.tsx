import { Card, CardContent } from "@/components/ui/card"

export function Features() {
  const features = [
    {
      icon: "🎨",
      title: "Natural Language Editing",
      description:
        "Simply describe what you want to change in plain English. Our AI understands context and applies edits precisely.",
    },
    {
      icon: "⚡",
      title: "Lightning Fast",
      description:
        "Get results in seconds, not minutes. Our optimized processing pipeline delivers professional results instantly.",
    },
    {
      icon: "🎭",
      title: "Consistent Characters",
      description:
        "Maintain character identity across multiple edits. Perfect for creating consistent visual narratives.",
    },
    {
      icon: "🌄",
      title: "Scene Preservation",
      description:
        "Edit specific elements while keeping the background and context intact. Precision control over every detail.",
    },
  ]

  return (
    <section id="features" className="container py-24 bg-secondary/30">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
          Everything you need to transform images with AI-powered precision
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="border-border/50 bg-card hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
