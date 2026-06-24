import { useState, useEffect, useCallback } from 'react'
import { type ColumnDef } from '@tanstack/react-table'
import { MetricCard } from '@/components/shared/metric-card'
import { DataTable } from '@/components/shared/data-table'
import { type Beswan, beswanList, beswanAbsensi, beswanTugas } from './data'
import { api } from '@/lib/api'

// Define the interface that matches the database/API return
export interface BeswanAPIData {
  id: string;
  namaLengkap: string;
  nim: string;
  email: string;
  hp: string;
  cvUrl: string;
  fotoUrl: string;
  status: string; // From beswanPeriode ideally
}

function DetailView({ beswan, onBack }: { beswan: Beswan; onBack: () => void }) {
  const [tab, setTab] = useState<'rapor' | 'absensi' | 'tugas'>('rapor')
  const pctHadir = Math.round((beswan.kehadiran / beswan.totalEvent) * 100)
  return (
    <div className="space-y-6">
      <button onClick={onBack} className="text-sm text-primary hover:underline">← Kembali</button>
      <div className="glass-tile p-6 flex gap-6">
        <span className="text-5xl">{beswan.foto}</span>
        <div className="space-y-1">
          <h2 className="text-headline-md">{beswan.nama}</h2>
          <p className="text-sm text-muted-foreground">NIM: {beswan.nim} | {beswan.email}</p>
          <p className="text-sm text-muted-foreground">HP: {beswan.hp} | Batch: {beswan.batch.join(', ')} | Status: <span className="text-primary">{beswan.status}</span></p>
        </div>
      </div>
      <div className="flex gap-2">
        {(['rapor','absensi','tugas'] as const).map(t => (
          <button key={t} onClick={() => setTab(t)} className={`px-4 py-2 rounded-lg text-sm transition-colors ${tab === t ? 'bg-primary text-primary-foreground' : 'glass-tile text-muted-foreground hover:text-foreground'}`}>{t.charAt(0).toUpperCase()+t.slice(1)}</button>
        ))}
      </div>
      {tab === 'rapor' && (
        <div className="grid grid-cols-3 gap-4">
          <MetricCard icon="📋" label="Kehadiran" value={`${beswan.kehadiran}/${beswan.totalEvent} (${pctHadir}%)`} />
          <MetricCard icon="📝" label="Avg Nilai" value={beswan.avgNilai} />
          <MetricCard icon="🪞" label="Refleksi" value={`${beswan.refleksiSubmitted}/${beswan.refleksiTotal} bulan`} />
        </div>
      )}
      {tab === 'absensi' && (
        <div className="glass-tile overflow-hidden">
          <table className="w-full">
            <thead><tr className="border-b border-white/5"><th className="px-4 py-3 text-left text-label-md text-muted-foreground">Event</th><th className="px-4 py-3 text-left text-label-md text-muted-foreground">Tanggal</th><th className="px-4 py-3 text-left text-label-md text-muted-foreground">Status</th></tr></thead>
            <tbody>{beswanAbsensi.map((a,i) => (
              <tr key={i} className="border-b border-white/5"><td className="px-4 py-3 text-sm">{a.event}</td><td className="px-4 py-3 text-sm text-muted-foreground">{a.tanggal}</td><td className="px-4 py-3 text-sm">{a.hadir ? '✅ Hadir' : '❌ Absen'}</td></tr>
            ))}</tbody>
          </table>
        </div>
      )}
      {tab === 'tugas' && (
        <div className="glass-tile overflow-hidden">
          <table className="w-full">
            <thead><tr className="border-b border-white/5"><th className="px-4 py-3 text-left text-label-md text-muted-foreground">Judul</th><th className="px-4 py-3 text-left text-label-md text-muted-foreground">Event</th><th className="px-4 py-3 text-left text-label-md text-muted-foreground">Deadline</th><th className="px-4 py-3 text-left text-label-md text-muted-foreground">Nilai</th><th className="px-4 py-3 text-left text-label-md text-muted-foreground">Status</th></tr></thead>
            <tbody>{beswanTugas.map((t,i) => (
              <tr key={i} className="border-b border-white/5"><td className="px-4 py-3 text-sm">{t.judul}</td><td className="px-4 py-3 text-sm text-muted-foreground">{t.event}</td><td className="px-4 py-3 text-sm text-muted-foreground">{t.deadline}</td><td className="px-4 py-3 text-sm">{t.nilai ?? '—'}</td><td className="px-4 py-3 text-sm"><span className={`px-2 py-0.5 rounded-full text-xs ${t.status === 'graded' ? 'bg-green-500/10 text-green-400' : 'bg-primary/10 text-primary'}`}>{t.status}</span></td></tr>
            ))}</tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default function BeswanPage() {
  const [selected, setSelected] = useState<Beswan | null>(null)
  
  // Combine API data state
  const [apiData, setApiData] = useState<BeswanAPIData[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const aktif = beswanList.filter(b => b.status === 'aktif').length
  const alumni = beswanList.filter(b => b.status === 'alumni').length
  const avgNilai = (beswanList.reduce((s,b) => s+b.avgNilai, 0) / beswanList.length).toFixed(1)

  const handleDetail = useCallback((beswan: Beswan) => setSelected(beswan), [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/beswan')
        setApiData(response.data || [])
      } catch (error) {
        console.error("Failed to fetch beswan from API:", error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  // We are mixing Mock data (for UI) + API data. We show API data if available, otherwise mock data.
  const displayData = apiData.length > 0 ? apiData.map(a => ({
    id: a.id, foto: '👨‍🎓', nama: a.namaLengkap, nim: a.nim, email: a.email, hp: a.hp,
    batch: ['BBB4'], status: 'aktif' as const, kehadiran: 0, totalEvent: 0, avgNilai: 0,
    refleksiSubmitted: 0, refleksiTotal: 0
  })) : beswanList;

  const columns: ColumnDef<Beswan, unknown>[] = [
    { accessorKey: 'foto', header: '', cell: ({ row }) => <span className="text-lg">{row.original.foto}</span>, size: 40 },
    { accessorKey: 'nama', header: 'Nama', cell: ({ row }) => <span className="font-medium">{row.original.nama}</span> },
    { accessorKey: 'nim', header: 'NIM' },
    { accessorKey: 'batch', header: 'Batch', cell: ({ row }) => row.original.batch.join(', ') },
    { accessorKey: 'status', header: 'Status', cell: ({ row }) => (
      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${row.original.status === 'aktif' ? 'bg-green-500/10 text-green-400' : 'bg-white/5 text-muted-foreground'}`}>
        {row.original.status}
      </span>
    )},
    { id: 'aksi', header: 'Aksi', cell: ({ row }) => (
      <button onClick={() => handleDetail(row.original)} className="text-primary hover:underline text-sm">Detail</button>
    )},
  ]

  if (selected) return <DetailView beswan={selected} onBack={() => setSelected(null)} />

  return (
    <div className="space-y-6 max-w-container">
      <div className="flex items-center justify-between">
        <div><h1 className="text-headline-lg">Database Beswan</h1><p className="text-body-md text-muted-foreground">Data penerima beasiswa GBB</p></div>
        <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">+ Tambah Beswan</button>
      </div>
      
      {isLoading ? (
        <div className="p-8 text-center text-muted-foreground">Loading data from API...</div>
      ) : (
        <>
          <div className="grid grid-cols-4 gap-4">
            <MetricCard icon="👥" label="Total" value={displayData.length} />
            <MetricCard icon="✅" label="Aktif" value={aktif} />
            <MetricCard icon="🎓" label="Alumni" value={alumni} />
            <MetricCard icon="📊" label="Avg Nilai" value={avgNilai} />
          </div>
          <DataTable columns={columns} data={displayData} searchKey="nama" searchPlaceholder="Cari nama beswan..." />
        </>
      )}
    </div>
  )
}
