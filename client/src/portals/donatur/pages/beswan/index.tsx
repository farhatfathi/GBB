import { useState } from 'react'
import { type ColumnDef } from '@tanstack/react-table'
import { DataTable } from '@/components/shared/data-table'
import { type BeswanPublic, beswanPublicList } from './data'

const columns: ColumnDef<BeswanPublic, unknown>[] = [
  { accessorKey: 'nama', header: 'Nama Beswan', cell: ({ row }) => <span className="font-medium">{row.original.nama}</span> },
  { accessorKey: 'universitas', header: 'Universitas', cell: ({ row }) => <span className="text-muted-foreground">{row.original.universitas}</span> },
  { accessorKey: 'jurusan', header: 'Jurusan' },
  { accessorKey: 'batch', header: 'Batch', cell: ({ row }) => (
    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-white/5 text-muted-foreground">
      {row.original.batch}
    </span>
  )},
]

export default function DonaturBeswanPage() {
  const [filterBatch, setFilterBatch] = useState<string>('Semua')

  const filtered = filterBatch === 'Semua' ? beswanPublicList : beswanPublicList.filter(b => b.batch === filterBatch)

  return (
    <div className="space-y-6 max-w-container">
      <div>
        <h1 className="text-headline-lg">Data Penerima Beasiswa</h1>
        <p className="text-body-md text-muted-foreground">Lihat daftar mahasiswa yang Anda dukung di setiap batch.</p>
      </div>

      <div className="flex gap-2">
        {['Semua', 'BBB4', 'BBB3', 'BBB2'].map(f => (
          <button 
            key={f} 
            onClick={() => setFilterBatch(f)} 
            className={`px-4 py-2 rounded-lg text-sm transition-colors ${filterBatch === f ? 'bg-primary text-primary-foreground' : 'glass-tile text-muted-foreground hover:text-foreground'}`}
          >
            {f}
          </button>
        ))}
      </div>

      <DataTable columns={columns} data={filtered} searchKey="nama" searchPlaceholder="Cari nama beswan..." />
    </div>
  )
}
