import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "How does Nano Banana work?",
      answer:
        "Nano Banana uses advanced AI models trained on millions of images to understand natural language prompts and apply precise edits while preserving character consistency and scene context. Simply upload an image, describe what you want to change, and our AI does the rest.",
    },
    {
      question: "What image formats are supported?",
      answer:
        "We support all major image formats including PNG, JPG, JPEG, WEBP, and GIF. Maximum file size is 50MB per image. For best results, we recommend using high-resolution images.",
    },
    {
      question: "Can I edit multiple images at once?",
      answer:
        "Yes! Nano Banana supports batch processing, allowing you to apply the same edits to multiple images simultaneously. This is perfect for maintaining consistency across a series of photos.",
    },
    {
      question: "How accurate is the AI?",
      answer:
        "Our AI model achieves industry-leading accuracy in character consistency and scene preservation. While results depend on prompt clarity and image quality, most users report 95%+ satisfaction with their first generation.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes! New users get 10 free image generations to test the platform. No credit card required. After that, you can choose from our flexible pricing plans based on your usage needs.",
    },
    {
      question: "Can I use generated images commercially?",
      answer:
        "Yes, all images generated with Nano Banana are yours to use commercially. You retain full ownership and rights to your creations. Check our terms of service for complete details.",
    },
    {
      question: "How long does processing take?",
      answer:
        "Most edits are completed in 5-15 seconds depending on complexity and image size. Our optimized processing pipeline ensures you get professional results without the wait.",
    },
    {
      question: "What makes Nano Banana different from competitors?",
      answer:
        "Nano Banana excels in character consistency and scene preservation, allowing for more precise edits without losing context. Our natural language processing is more intuitive, and our processing speeds are significantly faster than alternatives.",
    },
  ]

  return (
    <section id="faq" className="container py-24 bg-secondary/30">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
          Everything you need to know about Nano Banana
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline py-4">
                <span className="font-semibold text-base">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
