"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X } from "lucide-react"
import Link from "next/link"
import { PRICING_TIERS } from "@/constants/pricing"

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/5 to-background pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-balance mb-6 animate-fade-in-up">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground text-pretty animate-fade-in-up animation-delay-100">
              Choose the plan that's right for you. No hidden fees, cancel anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {PRICING_TIERS.map((tier, index) => (
              <PricingCard key={tier.name} tier={tier} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <FAQItem
                question="Can I change my plan later?"
                answer="Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
              />
              <FAQItem
                question="What payment methods do you accept?"
                answer="We accept all major credit cards, PayPal, and wire transfers for enterprise customers."
              />
              <FAQItem
                question="Is there a free trial?"
                answer="Yes! We offer a 14-day free trial on all plans. No credit card required to start."
              />
              <FAQItem
                question="What happens if I exceed my plan limits?"
                answer="We'll notify you when you're approaching your limits. You can upgrade your plan or contact us for custom solutions."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our team is here to help you find the perfect plan for your needs
            </p>
            <Link href="/contact">
              <Button size="lg">Contact Sales</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function PricingCard({ tier, index }: { tier: (typeof PRICING_TIERS)[0]; index: number }) {
  const { ref } = useScrollReveal()

  return (
    <div ref={ref} style={{ animationDelay: `${index * 100}ms` }}>
      <Card
        className={`relative h-full flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
          tier.popular ? "border-primary shadow-lg scale-105" : ""
        }`}
      >
        {tier.popular && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </div>
        )}
        <CardHeader className="text-center pb-8">
          <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
          <CardDescription>{tier.description}</CardDescription>
          <div className="mt-4">
            <span className="text-4xl font-bold">{tier.price}</span>
            <span className="text-muted-foreground">{tier.period}</span>
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <ul className="space-y-3">
            {tier.features.map((feature) => (
              <li key={feature.text} className="flex items-start gap-3">
                {feature.included ? (
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                ) : (
                  <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                )}
                <span className={feature.included ? "" : "text-muted-foreground"}>{feature.text}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full" variant={tier.popular ? "default" : "outline"} size="lg">
            {tier.price === "Custom" ? "Contact Sales" : "Get Started"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const { ref } = useScrollReveal()

  return (
    <div ref={ref} className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold mb-2">{question}</h3>
      <p className="text-muted-foreground">{answer}</p>
    </div>
  )
}
