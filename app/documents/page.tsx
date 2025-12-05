"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, FileText, Clock, Users } from "lucide-react"
import Link from "next/link"

const DOCUMENTS = [
  {
    title: "Getting Started Guide",
    description: "Complete guide to get started with our platform in minutes",
    category: "Guide",
    fileSize: "2.4 MB",
    updatedAt: "Dec 1, 2024",
    downloadUrl: "#",
  },
  {
    title: "API Documentation",
    description: "Comprehensive API reference and integration guidelines",
    category: "Technical",
    fileSize: "5.1 MB",
    updatedAt: "Dec 5, 2024",
    downloadUrl: "#",
  },
  {
    title: "User Manual",
    description: "Detailed manual covering all features and functionality",
    category: "Manual",
    fileSize: "8.3 MB",
    updatedAt: "Nov 28, 2024",
    downloadUrl: "#",
  },
  {
    title: "Security Best Practices",
    description: "Essential security guidelines and best practices",
    category: "Security",
    fileSize: "1.8 MB",
    updatedAt: "Dec 3, 2024",
    downloadUrl: "#",
  },
  {
    title: "Pricing Guide",
    description: "Detailed breakdown of pricing plans and features",
    category: "Pricing",
    fileSize: "0.9 MB",
    updatedAt: "Dec 2, 2024",
    downloadUrl: "#",
  },
  {
    title: "Integration Guide",
    description: "Step-by-step guide for integrating with third-party tools",
    category: "Integration",
    fileSize: "3.2 MB",
    updatedAt: "Nov 30, 2024",
    downloadUrl: "#",
  },
  {
    title: "Troubleshooting Guide",
    description: "Common issues and their solutions",
    category: "Support",
    fileSize: "2.1 MB",
    updatedAt: "Dec 4, 2024",
    downloadUrl: "#",
  },
  {
    title: "Data Export Guide",
    description: "Learn how to export and backup your data",
    category: "Data",
    fileSize: "1.5 MB",
    updatedAt: "Nov 25, 2024",
    downloadUrl: "#",
  },
]

const CATEGORIES = ["All", "Guide", "Technical", "Manual", "Security", "Pricing", "Integration", "Support", "Data"]

export default function DocumentsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/5 to-background pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-balance mb-6 animate-fade-in-up">Documentation</h1>
            <p className="text-xl text-muted-foreground text-pretty animate-fade-in-up animation-delay-100">
              Find everything you need to know about our platform and services
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <input
              type="text"
              placeholder="Search documents..."
              className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <div className="flex flex-wrap gap-2 justify-center">
              {CATEGORIES.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  size="sm"
                  className="hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documents Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {DOCUMENTS.map((doc, index) => (
              <DocumentCard key={doc.title} document={doc} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Documentation Stats</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <StatCard
                icon={<FileText className="w-8 h-8 text-primary" />}
                label="Total Documents"
                value="150+"
                index={0}
              />
              <StatCard
                icon={<Users className="w-8 h-8 text-primary" />}
                label="Active Users"
                value="50K+"
                index={1}
              />
              <StatCard
                icon={<Clock className="w-8 h-8 text-primary" />}
                label="Updated"
                value="Weekly"
                index={2}
              />
              <StatCard
                icon={<Download className="w-8 h-8 text-primary" />}
                label="Downloads"
                value="100K+"
                index={3}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Need More Help?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Can't find what you're looking for? Get in touch with our support team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg">Contact Support</Button>
              </Link>
              <Link href="/get-started">
                <Button size="lg" variant="outline">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function DocumentCard({ document, index }: { document: (typeof DOCUMENTS)[0]; index: number }) {
  const { ref } = useScrollReveal()

  return (
    <div ref={ref} style={{ animationDelay: `${index * 100}ms` }}>
      <Card className="h-full flex flex-col group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
        <CardHeader>
          <div className="flex items-start justify-between mb-3">
            <FileText className="w-6 h-6 text-primary" />
            <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
              {document.category}
            </span>
          </div>
          <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">{document.title}</CardTitle>
          <CardDescription className="line-clamp-2">{document.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="space-y-2 text-sm text-muted-foreground">
            <div>File Size: {document.fileSize}</div>
            <div>Updated: {document.updatedAt}</div>
          </div>
        </CardContent>
        <div className="p-6 pt-0">
          <Button
            asChild
            variant="outline"
            className="w-full group/button hover:bg-primary hover:text-primary-foreground hover:border-primary"
          >
            <a href={document.downloadUrl}>
              <Download className="w-4 h-4 mr-2" />
              Download
            </a>
          </Button>
        </div>
      </Card>
    </div>
  )
}

function StatCard({ icon, label, value, index }: { icon: React.ReactNode; label: string; value: string; index: number }) {
  const { ref } = useScrollReveal()

  return (
    <div ref={ref} style={{ animationDelay: `${index * 100}ms` }}>
      <Card className="text-center hover:shadow-lg transition-all duration-300">
        <CardHeader>
          <div className="flex justify-center mb-4">{icon}</div>
          <div className="text-3xl font-bold mb-2">{value}</div>
          <CardDescription>{label}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}
