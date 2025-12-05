import React from "react"
import {
  Users,
  Zap,
  Clock,
  ArrowRight,
  CheckCircle2,
  // add other icons here as needed
} from "lucide-react"

type IconName = "Users" | "Zap" | "Clock" | "ArrowRight" | "CheckCircle2"

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  Users,
  Zap,
  Clock,
  ArrowRight,
  CheckCircle2,
}

export function getIcon(name: string) {
  return ICON_MAP[name] || null
}

export function renderIcon(name: string, props?: any) {
  const Icon = getIcon(name)
  if (!Icon) return null
  return <Icon {...props} />
}

export default renderIcon
