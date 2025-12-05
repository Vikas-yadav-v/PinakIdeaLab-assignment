import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

type IconCardProps = {
  icon: LucideIcon
  title: string
  value: string
  className?: string
}

export function IconCard({ icon: Icon, title, value, className }: IconCardProps) {
  return (
    <div className={cn("flex items-start gap-3 group cursor-default", className)}>
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
        <Icon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />
      </div>
      <div>
        <p className="font-medium text-foreground transition-colors duration-200 group-hover:text-primary">{title}</p>
        <p className="text-sm text-muted-foreground">{value}</p>
      </div>
    </div>
  )
}
