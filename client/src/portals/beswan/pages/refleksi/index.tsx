import { useState } from 'react'
import { refleksiList, prestasiList } from './data'

export default function BeswanRefleksiPage() {
  const [tab, setTab] = useState<'refleksi' | 'prestasi'>('refleksi')

  return (
    <div className="space-y-6 max-w-container">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-headline-lg">Refleksi & Prestasi</h1>
          <p className="text-body-md text-muted-foreground">Catat perkembangan dirimu setiap bulan dan kuartal.</p>
        </div>
      </div>

      <div className="flex gap-2">
        <button onClick={() => setTab('refleksi')} className={`px-4 py-2 rounded-lg text-sm transition-colors ${tab === 'refleksi' ? 'bg-primary text-primary-foreground' : 'glass-tile text-muted-foreground hover:text-foreground'}`}>📝 Refleksi Bulanan</button>
        <button onClick={() => setTab('prestasi')} className={`px-4 py-2 rounded-lg text-sm transition-colors ${tab === 'prestasi' ? 'bg-primary text-primary-foreground' : 'glass-tile text-muted-foreground hover:text-foreground'}`}>🏆 Update Prestasi</button>
      </div>

      {tab === 'refleksi' && (
        <div className="space-y-4">
          <div className="glass-tile p-6 border-l-4 border-l-primary">
            <h3 className="text-headline-md mb-2">Form Refleksi Februari 2025</h3>
            <p className="text-sm text-muted-foreground mb-4">Bagaimana perkembanganmu bulan ini? Apa saja tantangan yang kamu hadapi?</p>
            <textarea 
              className="w-full h-32 px-4 py-3 bg-surface-container border border-border rounded-lg text-foreground focus:outline-none focus:border-primary resize-none" 
              placeholder="Tulis refleksimu di sini..."
            ></textarea>
            <div className="mt-4 flex justify-end">
              <button className="px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">Submit Refleksi</button>
            </div>
          </div>

          <h3 className="text-label-md text-muted-foreground mt-8 mb-4">Riwayat Refleksi</h3>
          <div className="space-y-3">
            {refleksiList.map(r => (
              <div key={r.id} className="glass-tile p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{r.bulan}</p>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${r.status === 'Sudah' ? 'bg-green-500/10 text-green-400' : 'bg-secondary/10 text-secondary'}`}>
                    {r.status === 'Sudah' ? `Selesai (${r.tanggalSubmit})` : 'Belum Submit'}
                  </span>
                </div>
                {r.isi && <p className="text-sm text-muted-foreground bg-surface-container p-3 rounded">{r.isi}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === 'prestasi' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-label-md text-muted-foreground">Riwayat Prestasi</h3>
            <button className="px-4 py-1.5 bg-primary/10 text-primary font-semibold rounded-lg hover:bg-primary/20 transition-colors text-sm">+ Tambah Prestasi</button>
          </div>
          <div className="glass-tile overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="px-4 py-3 text-left text-label-md text-muted-foreground">Kuartal</th>
                  <th className="px-4 py-3 text-left text-label-md text-muted-foreground">Judul Prestasi</th>
                  <th className="px-4 py-3 text-left text-label-md text-muted-foreground">Bukti</th>
                  <th className="px-4 py-3 text-left text-label-md text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {prestasiList.map(p => (
                  <tr key={p.id} className="border-b border-white/5 last:border-0">
                    <td className="px-4 py-3 text-sm">{p.kuartal}</td>
                    <td className="px-4 py-3 text-sm font-medium">{p.judul}</td>
                    <td className="px-4 py-3 text-sm">
                      {p.buktiUrl ? <a href={p.buktiUrl} className="text-primary hover:underline">📎 Buka File</a> : <span className="text-muted-foreground">—</span>}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${p.status === 'Approved' ? 'bg-green-500/10 text-green-400' : 'bg-white/5 text-muted-foreground'}`}>
                        {p.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
