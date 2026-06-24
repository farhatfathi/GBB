import { myEvents, myTasks, myPrestasi } from './data'

export default function BeswanBerandaPage() {
  return (
    <div className="space-y-6 max-w-container">
      <div className="glass-tile p-8">
        <h1 className="text-headline-lg">Halo, Ahmad Fauzi 👋</h1>
        <p className="text-body-md text-muted-foreground mt-2">Selamat datang di Portal Beswan GBB. Jangan lupa cek tugas terbarumu!</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* My Events */}
        <div className="space-y-4">
          <h2 className="text-headline-md">My Events</h2>
          <div className="glass-tile p-4 space-y-4">
            {myEvents.map((e) => (
              <div key={e.id} className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0">
                <div>
                  <p className="font-medium text-sm">{e.nama}</p>
                  <p className="text-xs text-muted-foreground">{e.tanggal} | {e.tipe}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${e.status === 'Hadir' ? 'bg-green-500/10 text-green-400' : 'bg-secondary/10 text-secondary'}`}>
                  {e.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* My Tasks */}
        <div className="space-y-4">
          <h2 className="text-headline-md">My Tasks</h2>
          <div className="glass-tile p-4 space-y-4">
            {myTasks.map((t) => (
              <div key={t.id} className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0">
                <div>
                  <p className="font-medium text-sm">{t.judul}</p>
                  <p className="text-xs text-muted-foreground">Deadline: {t.deadline}</p>
                </div>
                <div className="text-right">
                  <span className={`text-xs px-2 py-1 rounded-full ${t.status === 'Graded' ? 'bg-primary/10 text-primary' : 'bg-white/5 text-muted-foreground'}`}>
                    {t.status}
                  </span>
                  {t.nilai && <p className="text-xs mt-1 font-medium">Nilai: {t.nilai}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Prestasiku */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-headline-md">Prestasiku</h2>
          <button className="text-sm text-primary hover:underline">Update Prestasi</button>
        </div>
        <div className="glass-tile p-4">
          {myPrestasi.length > 0 ? (
            <div className="space-y-2">
              {myPrestasi.map((p) => (
                <div key={p.id} className="flex items-center gap-3">
                  <span className="text-xl">🏆</span>
                  <div>
                    <p className="text-sm font-medium">{p.judul}</p>
                    <p className="text-xs text-muted-foreground">{p.kuartal}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground text-center py-4">Belum ada prestasi yang dicatat.</p>
          )}
        </div>
      </div>
    </div>
  )
}
