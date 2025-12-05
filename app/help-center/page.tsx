"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, MessageCircle, AlertCircle, ChevronRight } from "lucide-react"
import Link from "next/link"

const HELP_CATEGORIES = [
  {
    title: "Getting Started",
    description: "Learn the basics and set up your account",
    icon: "🚀",
    articles: 8,
  },
  {
    title: "Account & Billing",
    description: "Manage your account and billing information",
    icon: "💳",
    articles: 12,
  },
  {
    title: "Features & Usage",
    description: "Discover how to use all platform features",
    icon: "⚙️",
    articles: 25,
  },
  {
    title: "Integrations",
    description: "Connect with your favorite tools",
    icon: "🔗",
    articles: 15,
  },
  {
    title: "Security & Privacy",
    description: "Learn about security and privacy practices",
    icon: "🔒",
    articles: 10,
  },
  {
    title: "Troubleshooting",
    description: "Find solutions to common issues",
    icon: "🛠️",
    articles: 18,
  },
]

const POPULAR_ARTICLES = [
  {
    title: "How do I reset my password?",
    views: "2.4K",
  },
  {
    title: "How to upgrade my plan",
    views: "1.8K",
  },
  {
    title: "Understanding billing cycles",
    views: "1.5K",
  },
  {
    title: "API rate limits explained",
    views: "1.2K",
  },
]

export default function HelpCenterPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/5 to-background pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-balance mb-6 animate-fade-in-up">Help Center</h1>
            <p className="text-xl text-muted-foreground text-pretty animate-fade-in-up animation-delay-100 mb-8">
              Find answers to your questions and get the support you need
            </p>
            <div className="relative max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for help articles..."
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Browse by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {HELP_CATEGORIES.map((category, index) => (
              <HelpCategoryCard key={category.title} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Popular Articles</h2>
            <div className="space-y-4">
              {POPULAR_ARTICLES.map((article, index) => (
                <PopularArticleCard key={article.title} article={article} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <AlertCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Can't Find What You're Looking For?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our support team is here to help. Reach out and we'll get back to you as soon as possible.
            </p>
            <Link href="/contact">
              <Button size="lg" className="gap-2">
                <MessageCircle className="w-5 h-5" />
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function HelpCategoryCard({ category, index }: { category: (typeof HELP_CATEGORIES)[0]; index: number }) {
  const { ref } = useScrollReveal()

  return (
    <div ref={ref} style={{ animationDelay: `${index * 100}ms` }}>
      <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer">
        <CardHeader>
          <div className="flex items-start justify-between mb-3">
            <span className="text-4xl">{category.icon}</span>
            <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
              {category.articles} articles
            </span>
          </div>
          <CardTitle className="group-hover:text-primary transition-colors">{category.title}</CardTitle>
          <CardDescription>{category.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            variant="ghost"
            className="group/btn w-full justify-start pl-0 hover:bg-transparent hover:text-primary"
          >
            Browse Articles
            <ChevronRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

function PopularArticleCard({ article, index }: { article: (typeof POPULAR_ARTICLES)[0]; index: number }) {
  const { ref } = useScrollReveal()

  return (
    <div
      ref={ref}
      style={{ animationDelay: `${index * 100}ms` }}
      className="group p-4 bg-card border border-border rounded-lg hover:border-primary hover:shadow-md transition-all duration-300 cursor-pointer"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{article.title}</h3>
        <div className="text-sm text-muted-foreground">{article.views} views</div>
      </div>
    </div>
  )
}
