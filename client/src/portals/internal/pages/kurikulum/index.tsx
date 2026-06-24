import { useState } from 'react'
import { type ColumnDef } from '@tanstack/react-table'
import { MetricCard } from '@/components/shared/metric-card'
import { DataTable } from '@/components/shared/data-table'
import { type Topik, topikList, type LibraryItem, libraryList } from './data'

const statusMap = { done: '✅', ongoing: '🟡', planned: '⬜' }

const topikColumns: ColumnDef<Topik, unknown>[] = [
  { accessorKey: 'urutan', header: '#', size: 40 },
  { accessorKey: 'judul', header: 'Topik', cell: ({ row }) => <span className="font-medium">{row.original.judul}</span> },
  { accessorKey: 'detail', header: 'Detail' },
  { accessorKey: 'torUrl', header: 'TOR', cell: () => <span className="text-primary">📎 PDF</span> },
  { accessorKey: 'status', header: 'Status', cell: ({ row }) => <span>{statusMap[row.original.status]} {row.original.status}</span> },
  { id: 'media', header: 'Media', cell: ({ row }) => (
    <div className="flex gap-2">
      {row.original.youtubeUrl ? <span className="text-primary cursor-pointer">▶</span> : <span className="text-muted-foreground">—</span>}
      {row.original.slideUrl ? <span className="text-primary cursor-pointer">📄</span> : <span className="text-muted-foreground">—</span>}
    </div>
  )},
]

const libraryColumns: ColumnDef<LibraryItem, unknown>[] = [
  { accessorKey: 'nama', header: 'Nama Materi', cell: ({ row }) => <span className="font-medium">{row.original.nama}</span> },
  { accessorKey: 'tags', header: 'Tags', cell: ({ row }) => (
    <div className="flex gap-1 flex-wrap">{row.original.tags.map(t => <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">#{t}</span>)}</div>
  )},
  { accessorKey: 'eventSumber', header: 'Event Sumber', cell: ({ row }) => row.original.eventSumber ?? <span className="text-muted-foreground">Manual upload</span> },
  { accessorKey: 'tipe', header: 'Tipe', cell: ({ row }) => (
    <span className={`px-2 py-0.5 rounded-full text-xs ${row.original.tipe === 'event_materi' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'}`}>{row.original.tipe === 'event_materi' ? '🎤 Event' : '📤 Upload'}</span>
  )},
]

export default function KurikulumPage() {
  const [tab, setTab] = useState<'kurikulum' | 'library'>('kurikulum')
  const fromEvent = libraryList.filter(l => l.tipe === 'event_materi').length
  const fromUpload = libraryList.filter(l => l.tipe === 'upload').length

  return (
    <div className="space-y-6 max-w-container">
      <h1 className="text-headline-lg">Kurikulum & Library</h1>
      <div className="flex gap-2">
        <button onClick={() => setTab('kurikulum')} className={`px-4 py-2 rounded-lg text-sm transition-colors ${tab === 'kurikulum' ? 'bg-primary text-primary-foreground' : 'glass-tile text-muted-foreground hover:text-foreground'}`}>📋 Kurikulum</button>
        <button onClick={() => setTab('library')} className={`px-4 py-2 rounded-lg text-sm transition-colors ${tab === 'library' ? 'bg-primary text-primary-foreground' : 'glass-tile text-muted-foreground hover:text-foreground'}`}>📚 Library</button>
      </div>

      {tab === 'kurikulum' && (
        <div className="space-y-6">
          <div className="glass-tile p-4 flex items-center justify-between">
            <div><p className="text-sm text-muted-foreground">Periode: BBB4 (Jan–Jun 2025)</p><p className="text-body-md">Goal: &quot;Membangun softskill dan kesiapan karir beswan&quot;</p></div>
            <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold">+ Topik</button>
          </div>
          <DataTable columns={topikColumns} data={topikList} searchKey="judul" searchPlaceholder="Cari topik..." />
          <p className="text-xs text-muted-foreground">Legend: ✅ done | 🟡 ongoing | ⬜ planned | ▶ YouTube | 📄 Slide</p>
        </div>
      )}

      {tab === 'library' && (
        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <MetricCard icon="📚" label="Total Materi" value={libraryList.length} />
            <MetricCard icon="🎤" label="Dari Event" value={fromEvent} />
            <MetricCard icon="📤" label="Upload Manual" value={fromUpload} />
          </div>
          <DataTable columns={libraryColumns} data={libraryList} searchKey="nama" searchPlaceholder="Cari materi..." />
        </div>
      )}
    </div>
  )
}
