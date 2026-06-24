import { MetricCard } from '@/components/shared/metric-card'
import { donasiInfo, igHighlights } from './data'

export default function DonaturBerandaPage() {
  return (
    <div className="space-y-6 max-w-container">
      <div className="glass-tile p-8">
        <h1 className="text-headline-lg">Halo, Bapak Agus Setiawan 👋</h1>
        <p className="text-body-md text-muted-foreground mt-2">Terima kasih atas dedikasi dan dukungan Anda untuk Generasi Baik Berdampak.</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <MetricCard icon="💸" label="Total Donasi All-Time" value={donasiInfo.total} />
        <MetricCard icon="📅" label="Bulan Aktif" value={donasiInfo.bulanAktif} />
        <MetricCard icon="✅" label="Status Bulan Ini" value={donasiInfo.statusPembayaran} />
        <MetricCard icon="🔥" label="Konsistensi" value={`${donasiInfo.konsistensi} Bulan`} />
      </div>

      <div className="space-y-4 pt-4">
        <h2 className="text-headline-md">GBB Updates (Instagram Highlights)</h2>
        <div className="grid grid-cols-3 gap-6">
          {igHighlights.map((ig) => (
            <div key={ig.id} className="glass-tile p-4 flex flex-col gap-3 items-center justify-center h-48">
              <span className="text-3xl text-pink-500">📱</span>
              <div className="text-center">
                <p className="font-medium text-sm">{ig.title}</p>
                <p className="text-xs text-muted-foreground">{ig.date}</p>
              </div>
              <button className="px-4 py-1.5 bg-white/5 rounded-full text-xs hover:bg-white/10 transition-colors">Lihat Post</button>
            </div>
          ))}
          <div className="glass-tile p-4 flex flex-col gap-3 items-center justify-center h-48 border-dashed border-2 border-border bg-transparent">
             <span className="text-2xl text-muted-foreground">📸</span>
             <p className="text-xs text-muted-foreground">Kunjungi @baikberdampak</p>
          </div>
        </div>
      </div>
    </div>
  )
}
