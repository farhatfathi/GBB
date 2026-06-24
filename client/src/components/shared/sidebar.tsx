import * as React from "react"
import { cn } from "@/lib/utils"

/* ─── Sidebar Types ─── */
export interface SidebarItem {
  icon: React.ReactNode
  label: string
  href: string
  active?: boolean
}

export interface SidebarProps {
  brand: {
    icon: React.ReactNode
    title: string
  }
  items: SidebarItem[]
  footer?: React.ReactNode
  className?: string
}

/* ─── Sidebar ─── */
export function Sidebar({ brand, items, footer, className }: SidebarProps) {
  return (
    <aside
      className={cn(
        "w-[260px] h-screen flex flex-col bg-sidebar border-r border-sidebar-border",
        className
      )}
    >
      {/* Brand */}
      <div className="flex items-center gap-3 px-5 py-5 border-b border-sidebar-border">
        <span className="text-xl">{brand.icon}</span>
        <span className="text-label-md text-sidebar-foreground font-bold">
          {brand.title}
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors",
              item.active
                ? "bg-sidebar-accent text-sidebar-primary font-semibold"
                : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground"
            )}
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      {/* Footer */}
      {footer && (
        <div className="px-5 py-4 border-t border-sidebar-border">
          {footer}
        </div>
      )}
    </aside>
  )
}
