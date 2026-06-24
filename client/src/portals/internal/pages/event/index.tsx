import { useState, useCallback } from 'react'
import { type ColumnDef } from '@tanstack/react-table'
import { MetricCard } from '@/components/shared/metric-card'
import { DataTable } from '@/components/shared/data-table'
import { type Event, eventList, eventAbsensi } from './data'

function EventDetail({ event, onBack }: { event: Event; onBack: () => void }) {
  return (
    <div className="space-y-6">
      <button onClick={onBack} className="text-sm text-primary hover:underline">← Kembali</button>
      <div className="glass-tile p-6 space-y-2">
        <h2 className="text-headline-md">{event.nama}</h2>
        <p className="text-sm text-muted-foreground">Kode: {event.kode} | Tanggal: {event.tanggal} | Mentor: {event.mentor}</p>
        <div className="flex gap-4 mt-4">
          <div className="flex-1 glass-tile p-4">
            <p className="text-sm text-muted-foreground">Link Rekaman (YouTube)</p>
            {event.youtubeUrl ? <a href={event.youtubeUrl} className="text-primary hover:underline">Lihat Video</a> : <button className="mt-2 text-sm px-3 py-1 bg-white/5 rounded">+ Add Link</button>}
          </div>
          <div className="flex-1 glass-tile p-4">
            <p className="text-sm text-muted-foreground">Materi Slide</p>
            {event.slideUrl ? <a href={event.slideUrl} className="text-primary hover:underline">Download Slide</a> : <button className="mt-2 text-sm px-3 py-1 bg-white/5 rounded">+ Add File</button>}
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-label-md text-muted-foreground mb-3">Absensi Beswan</h3>
        <div className="glass-tile overflow-hidden">
          <table className="w-full">
            <thead><tr className="border-b border-white/5"><th className="px-4 py-3 text-left text-label-md text-muted-foreground">Nama Beswan</th><th className="px-4 py-3 text-left text-label-md text-muted-foreground">NIM</th><th className="px-4 py-3 text-left text-label-md text-muted-foreground">Kehadiran</th></tr></thead>
            <tbody>{eventAbsensi.map((a,i) => (
              <tr key={i} className="border-b border-white/5"><td className="px-4 py-3 text-sm">{a.nama}</td><td className="px-4 py-3 text-sm text-muted-foreground">{a.nim}</td><td className="px-4 py-3 text-sm">{a.hadir ? '✅ Hadir' : '❌ Absen'}</td></tr>
            ))}</tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default function EventPage() {
  const [selected, setSelected] = useState<Event | null>(null)
  
  const handleDetail = useCallback((e: Event) => setSelected(e), [])

  const columns: ColumnDef<Event, unknown>[] = [
    { accessorKey: 'kode', header: 'Kode', cell: ({ row }) => <span className="font-mono text-xs">{row.original.kode}</span> },
    { accessorKey: 'nama', header: 'Nama Event', cell: ({ row }) => <span className="font-medium">{row.original.nama}</span> },
    { accessorKey: 'tanggal', header: 'Tanggal' },
    { accessorKey: 'mentor', header: 'Mentor' },
    { accessorKey: 'status', header: 'Status', cell: ({ row }) => (
      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${row.original.status === 'done' ? 'bg-green-500/10 text-green-400' : row.original.status === 'alert' ? 'bg-secondary/10 text-secondary' : 'bg-white/5 text-muted-foreground'}`}>
        {row.original.status === 'done' ? '✅ Done' : row.original.status === 'alert' ? '⚠️ Alert' : '📅 Upcoming'}
      </span>
    )},
    { id: 'aksi', header: 'Aksi', cell: ({ row }) => (
      <button onClick={() => handleDetail(row.original)} className="text-primary hover:underline text-sm">Detail</button>
    )},
  ]

  const alerts = eventList.filter(e => e.status === 'alert')

  if (selected) return <EventDetail event={selected} onBack={() => setSelected(null)} />

  return (
    <div className="space-y-6 max-w-container">
      <div className="flex items-center justify-between">
        <div><h1 className="text-headline-lg">Event Talkshow</h1><p className="text-body-md text-muted-foreground">Manajemen event, absensi, dan rekaman</p></div>
        <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">+ Buat Event</button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <MetricCard icon="🎤" label="Total Event" value={eventList.length} />
        <MetricCard icon="✅" label="Selesai" value={eventList.filter(e => e.status === 'done').length} />
        <MetricCard icon="📅" label="Upcoming" value={eventList.filter(e => e.status === 'upcoming').length} />
        <MetricCard icon="⚠️" label="Belum Rekaman" value={alerts.length} />
      </div>
      {alerts.length > 0 && (
        <div className="glass-tile p-4 border-l-4 border-l-secondary">
          <p className="text-sm font-medium text-secondary">⚠️ Alert: {alerts.length} event selesai belum ada link rekaman/materi!</p>
          <p className="text-xs text-muted-foreground mt-1">{alerts.map(a => `[${a.kode} ${a.nama}]`).join(', ')}</p>
        </div>
      )}
      <DataTable columns={columns} data={eventList} searchKey="nama" searchPlaceholder="Cari event..." />
    </div>
  )
}
