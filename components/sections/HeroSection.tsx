"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface HeroSectionProps {
  badge: string
  title: string
  description: string
  ctaPrimary: string
  ctaPrimaryHref: string
  ctaSecondary: string
  ctaSecondaryHref: string
  imageUrl?: string
  imageAlt?: string
}

export function HeroSection({
  badge,
  title,
  description,
  ctaPrimary,
  ctaPrimaryHref,
  ctaSecondary,
  ctaSecondaryHref,
  imageUrl,
  imageAlt,
}: HeroSectionProps) {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block animate-fade-in-up">
              <span className="text-sm font-semibold text-primary px-4 py-1.5 rounded-full bg-primary/10 inline-block animate-pulse-slow">
                {badge}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance animate-fade-in-up animation-delay-100">
              {title}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in-up animation-delay-200">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up animation-delay-300">
              <Link href={ctaPrimaryHref}>
                <Button size="lg" className="group relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    {ctaPrimary}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-primary/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                </Button>
              </Link>
              <Link href={ctaSecondaryHref}>
                <Button
                  size="lg"
                  variant="outline"
                  className="group hover:border-primary transition-all duration-300 hover:shadow-lg bg-transparent"
                >
                  {ctaSecondary}
                </Button>
              </Link>
            </div>
          </div>

          {imageUrl && (
            <div className="relative animate-fade-in-left animation-delay-400">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden relative group animate-float">
                <img
                  src={imageUrl}
                  alt={imageAlt || "Hero image"}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse-slow" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse-slow animation-delay-500" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
