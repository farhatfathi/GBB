import { useState, useCallback } from 'react'
import { type ColumnDef } from '@tanstack/react-table'
import { MetricCard } from '@/components/shared/metric-card'
import { DataTable } from '@/components/shared/data-table'
import { type Penugasan, penugasanList, tugasSubmissions } from './data'

function TugasDetail({ tugas, onBack }: { tugas: Penugasan; onBack: () => void }) {
  return (
    <div className="space-y-6">
      <button onClick={onBack} className="text-sm text-primary hover:underline">← Kembali</button>
      <div className="glass-tile p-6 space-y-2">
        <h2 className="text-headline-md">{tugas.judul}</h2>
        <p className="text-sm text-muted-foreground">Kode: {tugas.kode} | Event: {tugas.eventSumber} | Deadline: {tugas.deadline}</p>
        <p className="text-sm text-muted-foreground">Kumpul: {tugas.submitted}/{tugas.total} beswan</p>
      </div>
      <div>
        <h3 className="text-label-md text-muted-foreground mb-3">Daftar Pengumpulan & Grading</h3>
        <div className="glass-tile overflow-hidden">
          <table className="w-full">
            <thead><tr className="border-b border-white/5"><th className="px-4 py-3 text-left text-label-md text-muted-foreground">Beswan</th><th className="px-4 py-3 text-left text-label-md text-muted-foreground">Status</th><th className="px-4 py-3 text-left text-label-md text-muted-foreground">Tugas</th><th className="px-4 py-3 text-left text-label-md text-muted-foreground">Nilai</th><th className="px-4 py-3 text-left text-label-md text-muted-foreground">Aksi</th></tr></thead>
            <tbody>{tugasSubmissions.map((s,i) => (
              <tr key={i} className="border-b border-white/5">
                <td className="px-4 py-3 text-sm"><div><p className="font-medium">{s.nama}</p><p className="text-xs text-muted-foreground">{s.nim}</p></div></td>
                <td className="px-4 py-3 text-sm">
                  <span className={`px-2 py-0.5 rounded-full text-xs ${s.status === 'graded' ? 'bg-green-500/10 text-green-400' : s.status === 'submitted' ? 'bg-primary/10 text-primary' : 'bg-white/5 text-muted-foreground'}`}>
                    {s.status === 'graded' ? '✅ Graded' : s.status === 'submitted' ? '🔵 Submitted' : '⏳ Belum'}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">{s.fileUrl ? <a href={s.fileUrl} className="text-primary hover:underline">📎 Buka File</a> : '—'}</td>
                <td className="px-4 py-3 text-sm">{s.nilai ?? '—'}</td>
                <td className="px-4 py-3 text-sm">{s.status === 'submitted' && <button className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">Beri Nilai</button>}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default function PenugasanPage() {
  const [selected, setSelected] = useState<Penugasan | null>(null)
  const handleDetail = useCallback((t: Penugasan) => setSelected(t), [])

  const columns: ColumnDef<Penugasan, unknown>[] = [
    { accessorKey: 'kode', header: 'Kode', cell: ({ row }) => <span className="font-mono text-xs">{row.original.kode}</span> },
    { accessorKey: 'judul', header: 'Judul Penugasan', cell: ({ row }) => <span className="font-medium">{row.original.judul}</span> },
    { accessorKey: 'eventSumber', header: 'Event' },
    { accessorKey: 'deadline', header: 'Deadline' },
    { accessorKey: 'submitted', header: 'Kumpul', cell: ({ row }) => `${row.original.submitted}/${row.original.total}` },
    { id: 'aksi', header: 'Aksi', cell: ({ row }) => (
      <button onClick={() => handleDetail(row.original)} className="text-primary hover:underline text-sm">Detail / Grading</button>
    )},
  ]

  if (selected) return <TugasDetail tugas={selected} onBack={() => setSelected(null)} />

  return (
    <div className="space-y-6 max-w-container">
      <div className="flex items-center justify-between">
        <div><h1 className="text-headline-lg">Penugasan</h1><p className="text-body-md text-muted-foreground">Kelola tugas, submission, dan grading beswan</p></div>
        <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">+ Buat Penugasan</button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <MetricCard icon="📝" label="Total Penugasan" value={penugasanList.length} />
        <MetricCard icon="✅" label="Rata-rata Kumpul" value="90%" />
        <MetricCard icon="⏳" label="Perlu Digrading" value={4} />
      </div>
      <DataTable columns={columns} data={penugasanList} searchKey="judul" searchPlaceholder="Cari penugasan..." />
    </div>
  )
}
