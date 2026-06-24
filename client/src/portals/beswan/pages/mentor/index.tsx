import { type ColumnDef } from '@tanstack/react-table'
import { DataTable } from '@/components/shared/data-table'
import { type MentorPublik, mentorPublikList } from './data'

const columns: ColumnDef<MentorPublik, unknown>[] = [
  { accessorKey: 'nama', header: 'Nama Mentor', cell: ({ row }) => (
    <div className="flex items-center gap-2">
      <span className="font-medium">{row.original.nama}</span>
      {row.original.isInternal && <span className="text-xs px-1.5 py-0.5 rounded bg-primary/10 text-primary">🏠 GBB</span>}
    </div>
  )},
  { accessorKey: 'bidang', header: 'Bidang Keahlian' },
  { accessorKey: 'ketersediaan', header: 'Ketersediaan', cell: ({ row }) => (
    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${row.original.ketersediaan === 'Penuh' ? 'bg-secondary/10 text-secondary' : 'bg-green-500/10 text-green-400'}`}>
      {row.original.ketersediaan}
    </span>
  )},
  { id: 'aksi', header: 'Aksi', cell: ({ row }) => (
    <button 
      disabled={row.original.ketersediaan === 'Penuh'} 
      className={`text-sm ${row.original.ketersediaan === 'Penuh' ? 'text-muted-foreground cursor-not-allowed' : 'text-primary hover:underline'}`}
    >
      Request 1-on-1
    </button>
  )}
]

export default function BeswanMentorPage() {
  return (
    <div className="space-y-6 max-w-container">
      <div>
        <h1 className="text-headline-lg">Direktori Mentor</h1>
        <p className="text-body-md text-muted-foreground">Temukan mentor yang sesuai dan ajukan sesi 1-on-1 mentoring.</p>
      </div>

      <DataTable columns={columns} data={mentorPublikList} searchKey="bidang" searchPlaceholder="Cari bidang keahlian..." />
    </div>
  )
}
