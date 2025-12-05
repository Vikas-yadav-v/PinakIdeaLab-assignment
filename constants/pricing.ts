// filepath: constants/pricing.ts
import { PricingTier } from "@/types"

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for individuals and small projects",
    features: [
      { text: "Up to 5 projects", included: true },
      { text: "Basic analytics", included: true },
      { text: "24/7 support", included: true },
      { text: "API access", included: false },
      { text: "Custom integrations", included: false },
      { text: "Priority support", included: false },
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$79",
    period: "/month",
    description: "Ideal for growing businesses and teams",
    features: [
      { text: "Up to 25 projects", included: true },
      { text: "Advanced analytics", included: true },
      { text: "24/7 priority support", included: true },
      { text: "API access", included: true },
      { text: "Custom integrations", included: true },
      { text: "Dedicated account manager", included: false },
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with specific needs",
    features: [
      { text: "Unlimited projects", included: true },
      { text: "Enterprise analytics", included: true },
      { text: "24/7 dedicated support", included: true },
      { text: "Full API access", included: true },
      { text: "Custom integrations", included: true },
      { text: "Dedicated account manager", included: true },
    ],
    popular: false,
  },
]
