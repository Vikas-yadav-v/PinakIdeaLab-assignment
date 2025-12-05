import { cn } from "@/lib/utils"

type SectionHeaderProps = {
  title: string
  description: string
  className?: string
}

export function SectionHeader({ title, description, className }: SectionHeaderProps) {
  return (
    <div className={cn("text-center max-w-3xl mx-auto mb-12 md:mb-16", className)}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">{title}</h2>
      <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}
