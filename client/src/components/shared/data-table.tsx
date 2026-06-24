import { useState } from 'react'
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getFilteredRowModel,
  type ColumnFiltersState,
} from '@tanstack/react-table'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  searchKey?: string
  searchPlaceholder?: string
}

export function DataTable<TData, TValue>({
  columns, data, searchKey, searchPlaceholder = 'Cari...',
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  const table = useReactTable({
    data, columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnFiltersChange: setColumnFilters,
    state: { columnFilters },
  })

  return (
    <div className="space-y-4">
      {searchKey && (
        <input
          placeholder={searchPlaceholder}
          value={(table.getColumn(searchKey)?.getFilterValue() as string) ?? ''}
          onChange={(e) => table.getColumn(searchKey)?.setFilterValue(e.target.value)}
          className="px-4 py-2 rounded-lg bg-surface-container border border-border text-foreground text-sm w-64 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
        />
      )}
      <div className="glass-tile overflow-hidden">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map(hg => (
              <tr key={hg.id} className="border-b border-white/5">
                {hg.headers.map(h => (
                  <th key={h.id} className="px-4 py-3 text-left text-label-md text-muted-foreground font-semibold">
                    {h.isPlaceholder ? null : flexRender(h.column.columnDef.header, h.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map(row => (
                <tr key={row.id} className="border-b border-white/5 hover:bg-white/[0.03] transition-colors">
                  {row.getVisibleCells().map(cell => (
                    <td key={cell.id} className="px-4 py-3 text-sm">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr><td colSpan={columns.length} className="px-4 py-8 text-center text-muted-foreground">Tidak ada data</td></tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">{table.getFilteredRowModel().rows.length} data</span>
        <div className="flex gap-2">
          <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}
            className="px-3 py-1.5 rounded-lg border border-border text-foreground disabled:opacity-30 hover:bg-white/5 transition-colors">
            ← Prev
          </button>
          <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}
            className="px-3 py-1.5 rounded-lg border border-border text-foreground disabled:opacity-30 hover:bg-white/5 transition-colors">
            Next →
          </button>
        </div>
      </div>
    </div>
  )
}
