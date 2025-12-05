"use client"

import { ReactNode } from "react"

interface PageHeaderProps {
  title: string
  subtitle?: string
  children?: ReactNode
}

/**
 * Reusable page header component used across all page hero sections
 * Reduces code duplication and maintains consistent styling
 */
export function PageHeader({ title, subtitle, children }: PageHeaderProps) {
  return (
    <section className="relative bg-gradient-to-b from-primary/5 to-background pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-balance mb-6 animate-fade-in-up">{title}</h1>
          {subtitle && (
            <p className="text-xl text-muted-foreground text-pretty animate-fade-in-up animation-delay-100">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  )
}
