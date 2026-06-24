import { type ColumnDef } from '@tanstack/react-table'
import { DataTable } from '@/components/shared/data-table'

export interface Donatur {
  id: string; kode: string; nama: string; hp: string; 
  status_BBB3: boolean; status_BBB4: boolean; totalDonasi: string
}

const donaturList: Donatur[] = [
  { id: '1', kode: 'AS12024', nama: 'Agus Setiawan', hp: '0811...', status_BBB3: true, status_BBB4: true, totalDonasi: 'Rp 6.000.000' },
  { id: '2', kode: 'BW22024', nama: 'Budi Waseso', hp: '0812...', status_BBB3: true, status_BBB4: false, totalDonasi: 'Rp 3.000.000' },
  { id: '3', kode: 'CT12025', nama: 'Citra Triani', hp: '0813...', status_BBB3: false, status_BBB4: true, totalDonasi: 'Rp 1.500.000' },
]

const columns: ColumnDef<Donatur, unknown>[] = [
  { accessorKey: 'kode', header: 'Kode', cell: ({ row }) => <span className="font-mono text-xs text-primary">{row.original.kode}</span> },
  { accessorKey: 'nama', header: 'Nama Donatur', cell: ({ row }) => <span className="font-medium">{row.original.nama}</span> },
  { accessorKey: 'hp', header: 'No. HP' },
  { accessorKey: 'status_BBB3', header: 'BBB3 (Jul-Des 24)', cell: ({ row }) => (
    <input type="checkbox" checked={row.original.status_BBB3} readOnly className="w-4 h-4 rounded border-border accent-primary" />
  )},
  { accessorKey: 'status_BBB4', header: 'BBB4 (Jan-Jun 25)', cell: ({ row }) => (
    <input type="checkbox" checked={row.original.status_BBB4} readOnly className="w-4 h-4 rounded border-border accent-primary" />
  )},
  { accessorKey: 'totalDonasi', header: 'Total Donasi All-Time', cell: ({ row }) => <span className="font-mono text-sm text-green-400">{row.original.totalDonasi}</span> },
]

export default function DatabaseDonaturPage() {
  return (
    <div className="space-y-6 max-w-container">
      <div className="flex items-center justify-between">
        <div><h1 className="text-headline-lg">Database Donatur</h1><p className="text-body-md text-muted-foreground">Daftar donatur tersinkronisasi dari Google Sheets</p></div>
        <button className="px-4 py-2 rounded-lg border border-border text-sm font-semibold hover:bg-white/5 transition-colors">🔄 Sync Sheets</button>
      </div>
      <DataTable columns={columns} data={donaturList} searchKey="nama" searchPlaceholder="Cari donatur..." />
    </div>
  )
}
