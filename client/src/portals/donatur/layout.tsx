import { NavLink, Outlet } from 'react-router-dom'
import { cn } from '@/lib/utils'

const mainMenu = [
  { icon: '🏠', label: 'Beranda', path: '/donatur/beranda' },
  { icon: '🎓', label: 'Daftar Mentor', path: '/donatur/daftar-mentor' },
  { icon: '📊', label: 'Dashboard GBB', path: '/donatur/dashboard' },
  { icon: '👥', label: 'Data Beswan', path: '/donatur/beswan' },
  { icon: '📖', label: 'Laporan GBB', path: '/donatur/laporan' },
  { icon: '👤', label: 'Profile', path: '/donatur/profile' },
]

export default function DonaturLayout() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="w-[260px] flex flex-col bg-sidebar border-r border-sidebar-border shrink-0">
        {/* Brand */}
        <div className="flex items-center gap-3 px-5 py-5 border-b border-sidebar-border">
          <span className="text-xl">🤝</span>
          <span className="text-label-md text-sidebar-foreground font-bold">GBB Portal Donatur</span>
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
          <div className="text-xs text-muted-foreground">Donatur ID: AS12024</div>
          <div className="text-xs text-green-400">Keanggotaan: Aktif</div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-14 flex items-center justify-end gap-4 px-6 border-b border-border shrink-0">
          <div className="flex items-center gap-2 text-sm">
            <span>👤</span>
            <span className="text-foreground">Agus Setiawan</span>
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
