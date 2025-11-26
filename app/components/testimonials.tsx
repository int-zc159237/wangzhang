import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Content Creator",
      avatar: "SC",
      content:
        "Nano Banana has completely transformed my workflow. The AI understands exactly what I want and delivers perfect results every time. Absolutely game-changing!",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      role: "Digital Artist",
      avatar: "MR",
      content:
        "The character consistency is unmatched. I can finally create coherent series of images without worrying about maintaining visual identity. This is the tool I've been waiting for.",
      rating: 5,
    },
    {
      name: "Emily Watson",
      role: "Marketing Manager",
      avatar: "EW",
      content:
        "We use Nano Banana for all our campaign visuals now. The speed and quality are incredible, and the natural language interface makes it accessible to our entire team.",
      rating: 5,
    },
    {
      name: "David Kim",
      role: "Photographer",
      avatar: "DK",
      content:
        "As a professional photographer, I was skeptical at first. But the precision and scene preservation capabilities are truly impressive. It's become an essential part of my editing toolkit.",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="container py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What Users Say</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
          Trusted by creators, artists, and professionals worldwide
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <Avatar>
                  <AvatarFallback className="bg-primary/20 text-primary-foreground font-semibold">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-primary text-lg">
                    ⭐
                  </span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{testimonial.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
