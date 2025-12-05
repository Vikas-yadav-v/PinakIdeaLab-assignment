import { Zap, Shield, Rocket, Globe, Code, Users, type LucideIcon } from "lucide-react"

export type Service = {
  icon: LucideIcon
  title: string
  description: string
  image?: string
  features?: string[]
}

export const SERVICES: Service[] = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Blazing fast performance optimized for the modern web with cutting-edge technology.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&q=80",
    features: [
      "Optimized load times under 1 second",
      "CDN distribution across 150+ locations",
      "Advanced caching strategies",
      "Performance monitoring & analytics",
    ],
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security protocols to keep your data safe and protected at all times.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&h=300&fit=crop&q=80",
    features: [
      "SSL/TLS encryption by default",
      "DDoS protection & firewall",
      "Regular security audits",
      "Compliance with GDPR & SOC 2",
    ],
  },
  {
    icon: Rocket,
    title: "Scalable Solutions",
    description: "Grow without limits with infrastructure designed to scale seamlessly with your needs.",
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?w=500&h=300&fit=crop&q=80",
    features: [
      "Auto-scaling infrastructure",
      "Handle millions of requests",
      "Load balancing & redundancy",
      "Zero downtime deployments",
    ],
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Deploy worldwide with edge networks ensuring optimal performance across the globe.",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=500&h=300&fit=crop&q=80",
    features: [
      "Multi-region deployment",
      "Edge caching worldwide",
      "Smart routing optimization",
      "99.99% uptime guarantee",
    ],
  },
  {
    icon: Code,
    title: "Developer Friendly",
    description: "Clean APIs and comprehensive documentation make integration quick and painless.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop&q=80",
    features: [
      "RESTful & GraphQL APIs",
      "Comprehensive documentation",
      "SDK for popular languages",
      "Active developer community",
    ],
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Dedicated support team available 24/7 to help you succeed and solve any challenges.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?w=500&h=300&fit=crop&q=80",
    features: [
      "24/7 expert support team",
      "Priority response times",
      "Dedicated account manager",
      "Regular training sessions",
    ],
  },
]
