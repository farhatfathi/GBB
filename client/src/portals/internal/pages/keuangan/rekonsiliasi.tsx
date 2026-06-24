import { useState } from 'react'

export default function RekonsiliasiPage() {
  const [file, setFile] = useState<File | null>(null)
  
  return (
    <div className="space-y-6 max-w-container">
      <div className="flex items-center justify-between">
        <div><h1 className="text-headline-lg">Rekonsiliasi BSI</h1><p className="text-body-md text-muted-foreground">Upload mutasi bank dan cocokkan transaksi donasi</p></div>
      </div>
      
      <div className="glass-tile p-8 flex flex-col items-center justify-center border-dashed border-2 border-border gap-4">
        <span className="text-4xl">📄</span>
        <div className="text-center">
          <p className="text-body-md font-medium">Upload Bank Statement (.xlsx)</p>
          <p className="text-sm text-muted-foreground">Pilih file mutasi BSI untuk direkonsiliasi</p>
        </div>
        <input 
          type="file" 
          accept=".xlsx" 
          className="hidden" 
          id="file-upload" 
          onChange={(e) => setFile(e.target.files?.[0] || null)} 
        />
        <label htmlFor="file-upload" className="px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-lg cursor-pointer hover:opacity-90 transition-opacity">
          Pilih File
        </label>
        {file && <p className="text-sm text-green-400 mt-2">Terpilih: {file.name}</p>}
      </div>

      {file && (
        <div className="space-y-4">
          <h2 className="text-headline-md">Preview Data Mutasi</h2>
          <div className="glass-tile overflow-hidden">
            <table className="w-full">
              <thead><tr className="border-b border-white/5"><th className="px-4 py-3 text-left text-label-md text-muted-foreground">Tanggal</th><th className="px-4 py-3 text-left text-label-md text-muted-foreground">Keterangan</th><th className="px-4 py-3 text-left text-label-md text-muted-foreground">Masuk/Keluar</th><th className="px-4 py-3 text-left text-label-md text-muted-foreground">Nominal</th><th className="px-4 py-3 text-left text-label-md text-muted-foreground">Klasifikasi</th></tr></thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-3 text-sm">12/06/2025</td><td className="px-4 py-3 text-sm">Trf IN Budi Santoso</td><td className="px-4 py-3 text-sm text-green-400">Masuk</td><td className="px-4 py-3 text-sm font-mono">Rp 500.000</td><td className="px-4 py-3 text-sm"><select className="bg-surface px-2 py-1 rounded text-xs border border-border"><option>Donasi</option><option>Lainnya</option></select></td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-3 text-sm">13/06/2025</td><td className="px-4 py-3 text-sm">Trf OUT Zoom Subs</td><td className="px-4 py-3 text-sm text-secondary">Keluar</td><td className="px-4 py-3 text-sm font-mono">Rp 250.000</td><td className="px-4 py-3 text-sm"><select className="bg-surface px-2 py-1 rounded text-xs border border-border"><option>Operasional</option><option>Program</option></select></td></tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-end">
            <button className="px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">Simpan Rekonsiliasi</button>
          </div>
        </div>
      )}
    </div>
  )
}
