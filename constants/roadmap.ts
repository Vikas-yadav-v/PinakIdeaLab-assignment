// filepath: constants/roadmap.ts
export const ROADMAP_ITEMS = [
  {
    quarter: "Q1 2024",
    status: "completed",
    items: [
      "Platform launch",
      "Basic feature set",
      "Initial user onboarding",
      "Documentation",
    ],
  },
  {
    quarter: "Q2 2024",
    status: "completed",
    items: [
      "Advanced analytics",
      "API integration",
      "Mobile app preview",
      "Team collaboration features",
    ],
  },
  {
    quarter: "Q3 2024",
    status: "in-progress",
    items: [
      "Mobile app release",
      "AI-powered features",
      "Enterprise security",
      "Performance optimization",
    ],
  },
  {
    quarter: "Q4 2024",
    status: "planned",
    items: [
      "Advanced automation",
      "Custom workflows",
      "Marketplace launch",
      "Global expansion",
    ],
  },
]

export const STATUS_CONFIG = {
  completed: {
    bgColor: "bg-green-50",
    color: "text-green-700",
    icon: "CheckCircle2",
  },
  "in-progress": {
    bgColor: "bg-blue-50",
    color: "text-blue-700",
    icon: "Clock",
  },
  planned: {
    bgColor: "bg-orange-50",
    color: "text-orange-700",
    icon: "AlertCircle",
  },
}
