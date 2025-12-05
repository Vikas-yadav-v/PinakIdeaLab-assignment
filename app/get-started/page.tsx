"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { STEPS, FEATURES } from "@/constants/get-started"
import { renderIcon } from "@/utils/icon-mapper"

export default function GetStartedPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/5 to-background pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-balance mb-6 animate-fade-in-up">Get Started Today</h1>
            <p className="text-xl text-muted-foreground text-pretty animate-fade-in-up animation-delay-100">
              Join thousands of teams already using our platform to achieve their goals
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">How to Get Started in 3 Simple Steps</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {STEPS.map((step, index) => (
                <StepCard key={step.number} step={step} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Why Choose Us?</h2>
            <p className="text-xl text-muted-foreground text-center mb-16">
              Everything you need to succeed in one platform
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {FEATURES.map((feature, index) => (
                <FeatureCard key={feature.title} feature={feature} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">What You'll Need</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <RequirementCard
                title="Technical Requirements"
                items={[
                  "Modern web browser (Chrome, Firefox, Safari, Edge)",
                  "Internet connection",
                  "Email address for account creation",
                  "Optional: API key for integrations",
                ]}
              />
              <RequirementCard
                title="Getting Started Resources"
                items={[
                  "Comprehensive documentation",
                  "Video tutorials",
                  "Interactive onboarding guide",
                  "Community forum access",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join our community and start building amazing things today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing">
                <Button size="lg" className="gap-2">
                  View Plans <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <FAQItem
                question="How long does it take to set up?"
                answer="Most users can get set up in under 5 minutes. Our onboarding process is streamlined and intuitive."
              />
              <FAQItem
                question="Do I need a credit card to start?"
                answer="No, you can start with our free trial without providing any payment information."
              />
              <FAQItem
                question="Can I migrate my existing data?"
                answer="Yes, we provide tools and support to help you migrate your data from other platforms."
              />
              <FAQItem
                question="Is there training available?"
                answer="Yes, we offer comprehensive documentation, video tutorials, and live training sessions."
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function StepCard({ step, index }: { step: (typeof STEPS)[0]; index: number }) {
  const { ref } = useScrollReveal()

  return (
    <div ref={ref} style={{ animationDelay: `${index * 100}ms` }}>
      <Card className="relative h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
          {step.number}
        </div>
        <CardHeader className="pt-8">
          <div className="flex items-center gap-3 mb-3">
            {renderIcon(step.icon as string, { className: "w-6 h-6 text-primary" })}
            <CardTitle>{step.title}</CardTitle>
          </div>
          <CardDescription>{step.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {step.details.map((detail) => (
              <li key={detail} className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                {detail}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

function FeatureCard({ feature, index }: { feature: (typeof FEATURES)[0]; index: number }) {
  const { ref } = useScrollReveal()

  return (
    <div ref={ref} style={{ animationDelay: `${index * 100}ms` }}>
      <Card className="h-full hover:shadow-lg transition-all duration-300">
        <CardHeader>
          <CardTitle className="text-xl">{feature.title}</CardTitle>
          <CardDescription>{feature.description}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}

function RequirementCard({ title, items }: { title: string; items: string[] }) {
  const { ref } = useScrollReveal()

  return (
    <div ref={ref}>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
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
