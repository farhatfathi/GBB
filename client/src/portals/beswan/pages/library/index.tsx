import { type ColumnDef } from '@tanstack/react-table'
import { DataTable } from '@/components/shared/data-table'

export interface LibraryItem {
  id: string; nama: string; tags: string[]; tipe: 'Materi' | 'Buku' | 'Video'; link: string
}

const libraryData: LibraryItem[] = [
  { id: '1', nama: 'CV Writing 101', tags: ['career', 'cv'], tipe: 'Materi', link: '#' },
  { id: '2', nama: 'Public Speaking Tips', tags: ['softskill'], tipe: 'Video', link: '#' },
  { id: '3', nama: 'Atomic Habits Summary', tags: ['book', 'habit'], tipe: 'Buku', link: '#' },
]

const columns: ColumnDef<LibraryItem, unknown>[] = [
  { accessorKey: 'nama', header: 'Nama Materi', cell: ({ row }) => <span className="font-medium">{row.original.nama}</span> },
  { accessorKey: 'tags', header: 'Tags', cell: ({ row }) => (
    <div className="flex gap-1 flex-wrap">
      {row.original.tags.map(t => <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">#{t}</span>)}
    </div>
  )},
  { accessorKey: 'tipe', header: 'Tipe' },
  { id: 'aksi', header: 'Aksi', cell: () => <button className="text-sm text-primary hover:underline">Buka Materi</button> }
]

export default function BeswanLibraryPage() {
  return (
    <div className="space-y-6 max-w-container">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-headline-lg">Library Materi</h1>
          <p className="text-body-md text-muted-foreground">Kumpulan materi event, buku, dan referensi</p>
        </div>
        <button className="px-4 py-2 rounded-lg border border-border text-sm font-semibold hover:bg-white/5 transition-colors">
          💡 Usul Topik Event
        </button>
      </div>

      <DataTable columns={columns} data={libraryData} searchKey="nama" searchPlaceholder="Cari materi..." />
    </div>
  )
}
