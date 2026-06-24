import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { cn } from '@/lib/utils'

const mainMenu = [
  { icon: '📊', label: 'Dashboard', path: '/internal/dashboard' },
  { icon: '👥', label: 'Beswan', path: '/internal/beswan' },
  { icon: '📚', label: 'Kurikulum', path: '/internal/kurikulum' },
  { icon: '🎓', label: 'Mentor', path: '/internal/mentor' },
  { icon: '🎤', label: 'Event', path: '/internal/event' },
  { icon: '📝', label: 'Penugasan', path: '/internal/penugasan' },
]

const keuanganMenu = [
  { label: 'Rekonsiliasi', path: '/internal/keuangan/rekonsiliasi' },
  { label: 'Db Donatur', path: '/internal/keuangan/database-donatur' },
  { label: 'Monitoring', path: '/internal/keuangan/monitoring' },
]

export default function InternalLayout() {
  const [keuanganOpen, setKeuanganOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="w-[260px] flex flex-col bg-sidebar border-r border-sidebar-border shrink-0">
        {/* Brand */}
        <div className="flex items-center gap-3 px-5 py-5 border-b border-sidebar-border">
          <span className="text-xl">🟢</span>
          <span className="text-label-md text-sidebar-foreground font-bold">GBB Portal Internal</span>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          {mainMenu.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }: { isActive: boolean }) => cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors',
                isActive
                  ? 'bg-sidebar-accent text-sidebar-primary font-semibold'
                  : 'text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground'
              )}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}

          {/* Keuangan dropdown */}
          <button
            onClick={() => setKeuanganOpen(!keuanganOpen)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm w-full text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground transition-colors"
          >
            <span className="text-lg">💰</span>
            <span>Keuangan</span>
            <span className={cn('ml-auto text-xs transition-transform', keuanganOpen && 'rotate-180')}>▼</span>
          </button>
          {keuanganOpen && (
            <div className="ml-9 space-y-1">
              {keuanganMenu.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }: { isActive: boolean }) => cn(
                    'block px-3 py-2 rounded-lg text-sm transition-colors',
                    isActive
                      ? 'bg-sidebar-accent text-sidebar-primary font-semibold'
                      : 'text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground'
                  )}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          )}

          {/* Laporan */}
          <NavLink
            to="/internal/laporan"
            className={({ isActive }: { isActive: boolean }) => cn(
              'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors',
              isActive
                ? 'bg-sidebar-accent text-sidebar-primary font-semibold'
                : 'text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground'
            )}
          >
            <span className="text-lg">📄</span>
            <span>Laporan</span>
          </NavLink>
        </nav>

        {/* Footer */}
        <div className="px-5 py-4 border-t border-sidebar-border text-xs text-muted-foreground">
          Periode: BBB4 (Jan–Jun 2025)
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-14 flex items-center justify-end gap-4 px-6 border-b border-border shrink-0">
          <button className="text-lg">🔔</button>
          <div className="flex items-center gap-2 text-sm">
            <span>👤</span>
            <span className="text-foreground">Admin</span>
            <span className="text-muted-foreground">▼</span>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
