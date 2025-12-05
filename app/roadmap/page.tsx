"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ROADMAP_ITEMS, STATUS_CONFIG } from "@/constants/roadmap"
import { renderIcon } from "@/utils/icon-mapper"

export default function RoadmapPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/5 to-background pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-balance mb-6 animate-fade-in-up">Product Roadmap</h1>
            <p className="text-xl text-muted-foreground text-pretty animate-fade-in-up animation-delay-100">
              See what we're building and what's coming next
            </p>
          </div>
        </div>
      </section>

      {/* Legend */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {Object.entries(STATUS_CONFIG)?.map(([key, config]) => (
              <div key={key} className="flex items-center gap-2">
                {renderIcon(config?.icon, { className: `w-5 h-5 ${config?.color}` })}
                <span className="text-sm font-medium">{config?.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            {ROADMAP_ITEMS?.map((quarter, index) => (
              <RoadmapQuarter key={quarter.quarter} quarter={quarter} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Have a Feature Request?</h2>
            <p className="text-muted-foreground mb-8">
              We'd love to hear your ideas and suggestions for future features
            </p>
            <div className="flex gap-4 justify-center">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Submit Feedback
              </button>
              <button className="px-6 py-3 border border-border rounded-lg font-semibold hover:bg-muted transition-colors">
                Vote on Features
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function RoadmapQuarter({ quarter, index }: { quarter: (typeof ROADMAP_ITEMS)[0]; index: number }) {
  const { ref } = useScrollReveal()
  const statusConfig = STATUS_CONFIG[quarter.status as keyof typeof STATUS_CONFIG]

  return (
    <div ref={ref} className="relative" style={{ animationDelay: `${index * 100}ms` }}>
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0 w-32">
          <div className="sticky top-24">
            <h3 className="text-2xl font-bold mb-2">{quarter.quarter}</h3>
            <Badge variant="outline" className={`${statusConfig.bgColor} ${statusConfig.color} border-0`}>
              <span className="inline-flex items-center gap-1">
                {renderIcon(statusConfig.icon, { className: "w-3 h-3" })}
                <span>{statusConfig.label}</span>
              </span>
            </Badge>
          </div>
        </div>

        <div className="flex-1 space-y-4">
          {quarter?.items?.map((item, itemIndex) => (
            <RoadmapItem key={item.title} item={item} index={itemIndex} />
          ))}
        </div>
      </div>
    </div>
  )
}

function RoadmapItem({ item, index }: { item: { title: string; description: string; status: string }; index: number }) {
  const statusConfig = STATUS_CONFIG[item.status as keyof typeof STATUS_CONFIG]

  return (
    <Card
      className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-left"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </div>
          {renderIcon(statusConfig.icon, { className: `w-5 h-5 flex-shrink-0 ${statusConfig.color}` })}
        </div>
      </CardHeader>
    </Card>
  )
}
