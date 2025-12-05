// filepath: constants/roadmap.ts
export const ROADMAP_ITEMS = [
  {
    quarter: "Q1 2024",
    status: "completed",
    items: [
      { title: "Platform launch", description: "Initial platform deployment and setup", status: "completed" },
      { title: "Basic feature set", description: "Core features and functionality", status: "completed" },
      { title: "Initial user onboarding", description: "Onboarding flow and documentation", status: "completed" },
      { title: "Documentation", description: "Comprehensive docs and guides", status: "completed" },
    ],
  },
  {
    quarter: "Q2 2024",
    status: "completed",
    items: [
      { title: "Advanced analytics", description: "In-depth analytics and reporting", status: "completed" },
      { title: "API integration", description: "RESTful API and webhooks", status: "completed" },
      { title: "Mobile app preview", description: "Mobile application beta release", status: "completed" },
      { title: "Team collaboration features", description: "Real-time collaboration tools", status: "completed" },
    ],
  },
  {
    quarter: "Q3 2024",
    status: "in-progress",
    items: [
      { title: "Mobile app release", description: "Full mobile application launch", status: "in-progress" },
      { title: "AI-powered features", description: "Machine learning capabilities", status: "in-progress" },
      { title: "Enterprise security", description: "Advanced security and compliance", status: "in-progress" },
      { title: "Performance optimization", description: "Speed and reliability improvements", status: "in-progress" },
    ],
  },
  {
    quarter: "Q4 2024",
    status: "planned",
    items: [
      { title: "Advanced automation", description: "Workflow automation engine", status: "planned" },
      { title: "Custom workflows", description: "User-defined workflow builder", status: "planned" },
      { title: "Marketplace launch", description: "Third-party plugin marketplace", status: "planned" },
      { title: "Global expansion", description: "Multi-region deployment", status: "planned" },
    ],
  },
]

export const STATUS_CONFIG = {
  completed: {
    bgColor: "bg-green-50",
    color: "text-green-700",
    icon: "CheckCircle2",
    label: "Completed",
  },
  "in-progress": {
    bgColor: "bg-blue-50",
    color: "text-blue-700",
    icon: "Clock",
    label: "In Progress",
  },
  planned: {
    bgColor: "bg-orange-50",
    color: "text-orange-700",
    icon: "AlertCircle",
    label: "Planned",
  },
}
