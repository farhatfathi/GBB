import { useState, useCallback } from 'react'
import { type ColumnDef } from '@tanstack/react-table'
import { MetricCard } from '@/components/shared/metric-card'
import { DataTable } from '@/components/shared/data-table'
import { type Mentor, mentorList, mentorEvents } from './data'

function MentorDetail({ mentor, onBack }: { mentor: Mentor; onBack: () => void }) {
  return (
    <div className="space-y-6">
      <button onClick={onBack} className="text-sm text-primary hover:underline">← Kembali</button>
      <div className="glass-tile p-6 space-y-2">
        <h2 className="text-headline-md">{mentor.nama} {mentor.isInternal && <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">Internal GBB</span>}</h2>
        <p className="text-sm text-muted-foreground">{mentor.email} | Bidang: {mentor.bidang}</p>
        <div className="flex gap-4 mt-4">
          <MetricCard icon="🎤" label="Total Event" value={mentor.totalEvent} className="flex-1" />
          <MetricCard icon="⭐" label="Avg Rating" value={mentor.avgRating} className="flex-1" />
        </div>
      </div>
      <div>
        <h3 className="text-label-md text-muted-foreground mb-3">Riwayat Event</h3>
        <div className="glass-tile overflow-hidden">
          <table className="w-full">
            <thead><tr className="border-b border-white/5"><th className="px-4 py-3 text-left text-label-md text-muted-foreground">Event</th><th className="px-4 py-3 text-left text-label-md text-muted-foreground">Tanggal</th><th className="px-4 py-3 text-left text-label-md text-muted-foreground">Peran</th><th className="px-4 py-3 text-left text-label-md text-muted-foreground">Rating</th></tr></thead>
            <tbody>{mentorEvents.map((e,i) => (
              <tr key={i} className="border-b border-white/5"><td className="px-4 py-3 text-sm">{e.event}</td><td className="px-4 py-3 text-sm text-muted-foreground">{e.tanggal}</td><td className="px-4 py-3 text-sm">{e.peran}</td><td className="px-4 py-3 text-sm text-secondary">⭐ {e.rating}</td></tr>
            ))}</tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default function MentorPage() {
  const [selected, setSelected] = useState<Mentor | null>(null)
  const internal = mentorList.filter(m => m.isInternal).length

  const handleDetail = useCallback((mentor: Mentor) => setSelected(mentor), [])

  const columns: ColumnDef<Mentor, unknown>[] = [
    { accessorKey: 'nama', header: 'Nama', cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <span className="font-medium">{row.original.nama}</span>
        {row.original.isInternal && <span className="text-xs px-1.5 py-0.5 rounded bg-primary/10 text-primary">🏠 GBB</span>}
      </div>
    )},
    { accessorKey: 'bidang', header: 'Bidang Keahlian' },
    { accessorKey: 'totalEvent', header: 'Event', cell: ({ row }) => `${row.original.totalEvent} event` },
    { accessorKey: 'avgRating', header: 'Avg Rating', cell: ({ row }) => <span className="text-secondary">⭐ {row.original.avgRating}</span> },
    { id: 'aksi', header: 'Aksi', cell: ({ row }) => (
      <button onClick={() => handleDetail(row.original)} className="text-primary hover:underline text-sm">Detail</button>
    )},
  ]

  if (selected) return <MentorDetail mentor={selected} onBack={() => setSelected(null)} />

  return (
    <div className="space-y-6 max-w-container">
      <div className="flex items-center justify-between">
        <div><h1 className="text-headline-lg">Database Mentor</h1><p className="text-body-md text-muted-foreground">Daftar mentor event & 1-on-1</p></div>
        <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">+ Tambah Mentor</button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <MetricCard icon="🎓" label="Total Mentor" value={mentorList.length} />
        <MetricCard icon="🏠" label="UNDIP / GBB" value={internal} />
        <MetricCard icon="🌐" label="Non-UNDIP" value={mentorList.length - internal} />
      </div>
      <DataTable columns={columns} data={mentorList} searchKey="nama" searchPlaceholder="Cari nama mentor..." />
    </div>
  )
}
