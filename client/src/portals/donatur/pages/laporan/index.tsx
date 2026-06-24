import { type ColumnDef } from '@tanstack/react-table'
import { DataTable } from '@/components/shared/data-table'
import { type LaporanPublic, laporanPublicList } from './data'

const columns: ColumnDef<LaporanPublic, unknown>[] = [
  { accessorKey: 'judul', header: 'Judul Laporan', cell: ({ row }) => <span className="font-medium">{row.original.judul}</span> },
  { accessorKey: 'tipe', header: 'Tipe', cell: ({ row }) => (
    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${row.original.tipe === 'Booklet' ? 'bg-secondary/10 text-secondary' : 'bg-primary/10 text-primary'}`}>
      {row.original.tipe === 'Booklet' ? '📖 Booklet' : '📊 Laporan Keuangan'}
    </span>
  )},
  { accessorKey: 'periode', header: 'Periode' },
  { accessorKey: 'tanggal', header: 'Tanggal Publish', cell: ({ row }) => <span className="text-muted-foreground">{row.original.tanggal}</span> },
  { id: 'aksi', header: 'Aksi', cell: () => <button className="text-sm text-primary hover:underline">📎 Download</button> }
]

export default function DonaturLaporanPage() {
  return (
    <div className="space-y-6 max-w-container">
      <div>
        <h1 className="text-headline-lg">Laporan & Booklet GBB</h1>
        <p className="text-body-md text-muted-foreground">Akses dan unduh laporan pertanggungjawaban serta booklet profil beswan.</p>
      </div>

      <div className="glass-tile p-6 flex items-center justify-between border-l-4 border-l-secondary mb-6">
        <div>
          <h3 className="text-label-md">Booklet Terbaru Tersedia!</h3>
          <p className="text-sm text-muted-foreground mt-1">Kenali profil dan aspirasi para beswan batch terbaru di Booklet Profil Beswan BBB4.</p>
        </div>
        <button className="px-4 py-2 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
          Unduh Booklet BBB4
        </button>
      </div>

      <DataTable columns={columns} data={laporanPublicList} searchKey="judul" searchPlaceholder="Cari laporan..." />
    </div>
  )
}
