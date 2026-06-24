import { NavLink, Outlet } from 'react-router-dom'
import { cn } from '@/lib/utils'

const mainMenu = [
  { icon: '🏠', label: 'Beranda', path: '/beswan/beranda' },
  { icon: '📚', label: 'Library', path: '/beswan/library' },
  { icon: '🎓', label: 'Mentor', path: '/beswan/mentor' },
  { icon: '📝', label: 'Refleksi', path: '/beswan/refleksi' },
  { icon: '👤', label: 'Profile', path: '/beswan/profile' },
]

export default function BeswanLayout() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="w-[260px] flex flex-col bg-sidebar border-r border-sidebar-border shrink-0">
        {/* Brand */}
        <div className="flex items-center gap-3 px-5 py-5 border-b border-sidebar-border">
          <span className="text-xl">🟢</span>
          <span className="text-label-md text-sidebar-foreground font-bold">GBB Portal Beswan</span>
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
        </nav>

        {/* Footer */}
        <div className="px-5 py-4 border-t border-sidebar-border space-y-1">
          <div className="text-xs text-muted-foreground">Batch: BBB4</div>
          <div className="text-xs text-green-400">Status: Aktif</div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-14 flex items-center justify-end gap-4 px-6 border-b border-border shrink-0">
          <button className="text-lg">🔔</button>
          <div className="flex items-center gap-2 text-sm">
            <span>👤</span>
            <span className="text-foreground">Ahmad Fauzi</span>
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
