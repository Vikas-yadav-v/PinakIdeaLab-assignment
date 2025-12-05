import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

type SocialLinkProps = {
  icon: LucideIcon
  href: string
  label: string
  className?: string
}

export function SocialLink({ icon: Icon, href, label, className }: SocialLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "w-9 h-9 rounded-lg bg-background border border-border hover:border-primary/50 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-primary/5 group",
        className,
      )}
      aria-label={label}
    >
      <Icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:scale-125" />
    </Link>
  )
}
