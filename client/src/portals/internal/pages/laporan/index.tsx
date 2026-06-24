import { useState } from 'react'
import { type ColumnDef } from '@tanstack/react-table'
import { DataTable } from '@/components/shared/data-table'
import { type Laporan, laporanList } from './data'

const columns: ColumnDef<Laporan, unknown>[] = [
  { accessorKey: 'judul', header: 'Judul', cell: ({ row }) => <span className="font-medium">{row.original.judul}</span> },
  { accessorKey: 'tipe', header: 'Tipe', cell: ({ row }) => (
    <span className={`px-2 py-0.5 rounded-full text-xs ${row.original.tipe === 'booklet' ? 'bg-secondary/10 text-secondary' : 'bg-primary/10 text-primary'}`}>{row.original.tipe === 'booklet' ? '📖 Booklet' : '📊 Laporan'}</span>
  )},
  { accessorKey: 'periodeId', header: 'Periode' },
  { accessorKey: 'isPublic', header: 'Visibilitas', cell: ({ row }) => (
    <button className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${row.original.isPublic ? 'bg-green-500/10 text-green-400' : 'bg-white/5 text-muted-foreground'}`}>
      {row.original.isPublic ? '🌐 Public' : '🔒 Internal'}
    </button>
  )},
  { accessorKey: 'createdAt', header: 'Tanggal' },
  { id: 'aksi', header: 'Aksi', cell: () => <span className="text-primary hover:underline text-sm cursor-pointer">📎 Download</span> },
]

export default function LaporanPage() {
  const [filter, setFilter] = useState<'all' | 'public' | 'internal'>('all')
  const filtered = filter === 'all' ? laporanList : laporanList.filter(l => filter === 'public' ? l.isPublic : !l.isPublic)

  return (
    <div className="space-y-6 max-w-container">
      <div className="flex items-center justify-between">
        <div><h1 className="text-headline-lg">Laporan & Booklet</h1><p className="text-body-md text-muted-foreground">Upload dan kelola dokumen laporan GBB</p></div>
        <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">+ Upload Laporan</button>
      </div>
      <div className="flex gap-2">
        {(['all','public','internal'] as const).map(f => (
          <button key={f} onClick={() => setFilter(f)} className={`px-4 py-2 rounded-lg text-sm transition-colors ${filter === f ? 'bg-primary text-primary-foreground' : 'glass-tile text-muted-foreground hover:text-foreground'}`}>
            {f === 'all' ? 'Semua' : f === 'public' ? '🌐 Public' : '🔒 Internal'}
          </button>
        ))}
      </div>
      <DataTable columns={columns} data={filtered} searchKey="judul" searchPlaceholder="Cari laporan..." />
    </div>
  )
}
