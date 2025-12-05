// filepath: constants/documents.ts
import { Document } from "@/types"

export const DOCUMENTS: Document[] = [
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

export const DOCUMENT_CATEGORIES = ["All", "Guide", "Technical", "Manual", "Security", "Pricing", "Integration", "Support", "Data"] as const
