import { Card, CardContent } from "@/components/ui/card"

export function Showcase() {
  const showcaseItems = [
    {
      before: "/portrait-photo-before-edit.jpg",
      after: "/portrait-photo-after-edit-with-new-background.jpg",
      prompt: "Change background to mountain landscape",
    },
    {
      before: "/person-in-casual-clothes.jpg",
      after: "/person-in-formal-suit.jpg",
      prompt: "Change outfit to formal business attire",
    },
    {
      before: "/daytime-street-scene.jpg",
      after: "/nighttime-street-scene-with-lights.jpg",
      prompt: "Transform to nighttime with city lights",
    },
    {
      before: "/indoor-room-scene.jpg",
      after: "/same-room-with-different-lighting.jpg",
      prompt: "Add warm sunset lighting through windows",
    },
  ]

  return (
    <section id="showcase" className="container py-24 bg-secondary/30">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Example Results</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
          See the incredible transformations possible with simple text prompts
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {showcaseItems.map((item, index) => (
          <Card key={index} className="overflow-hidden border-border/50 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs font-semibold text-muted-foreground mb-2">BEFORE</p>
                  <img
                    src={item.before || "/placeholder.svg"}
                    alt="Before"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground mb-2">AFTER</p>
                  <img
                    src={item.after || "/placeholder.svg"}
                    alt="After"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="bg-muted/50 rounded-lg p-3">
                <p className="text-sm font-medium text-muted-foreground">
                  <span className="text-foreground">"</span>
                  {item.prompt}
                  <span className="text-foreground">"</span>
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
