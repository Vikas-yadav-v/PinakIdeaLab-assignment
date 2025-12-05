// filepath: c:\Users\ssarv\Downloads\website-section-prompts\types/index.ts
/**
 * Central type definitions for the application
 * Helps maintain type safety across the project
 */

export interface BlogPost {
  id: number
  title: string
  excerpt: string
  image: string
  category: string
  author: string
  date: Date
  readTime: string
}

export interface PricingTier {
  name: string
  price: string
  period: string
  description: string
  features: Feature[]
  popular: boolean
}

export interface Feature {
  text: string
  included: boolean
}

export interface Document {
  title: string
  description: string
  category: string
  fileSize: string
  updatedAt: string
  downloadUrl: string
}

export interface CommunityChannel {
  title: string
  description: string
  members: string
  posts: string
}
