import * as React from "react"
import { cn } from "@/lib/utils"

/* ─── MetricCard ─── */
export interface MetricCardProps {
  icon?: React.ReactNode
  label: string
  value: string | number
  subtitle?: string
  trend?: "up" | "down" | "neutral"
  className?: string
}

export function MetricCard({ icon, label, value, subtitle, className }: MetricCardProps) {
  return (
    <div className={cn("glass-tile p-5 space-y-2", className)}>
      <div className="flex items-center gap-2 text-muted-foreground">
        {icon && <span className="text-lg">{icon}</span>}
        <span className="text-label-md">{label}</span>
      </div>
      <p className="text-headline-md text-foreground">{value}</p>
      {subtitle && (
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      )}
    </div>
  )
}
