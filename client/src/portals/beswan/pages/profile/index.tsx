export default function BeswanProfilePage() {
  return (
    <div className="space-y-6 max-w-container">
      <div>
        <h1 className="text-headline-lg">Profile Saya</h1>
        <p className="text-body-md text-muted-foreground">Kelola data diri dan Curriculum Vitae</p>
      </div>

      <div className="glass-tile p-8 max-w-2xl">
        <div className="flex items-center gap-6 mb-8">
          <div className="w-24 h-24 rounded-full bg-surface-bright flex items-center justify-center text-4xl border-2 border-primary">
            A
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Ahmad Fauzi</h2>
            <p className="text-muted-foreground">ahmad@mail.undip.ac.id</p>
            <div className="flex gap-2 mt-2">
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">Batch: BBB4</span>
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400">Status: Aktif</span>
            </div>
          </div>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Nama Lengkap</label>
              <input type="text" defaultValue="Ahmad Fauzi" className="w-full px-4 py-2 bg-surface-container border border-border rounded-lg text-foreground focus:outline-none focus:border-primary" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">NIM</label>
              <input type="text" defaultValue="21050111001" disabled className="w-full px-4 py-2 bg-surface-container border border-border rounded-lg text-muted-foreground opacity-50 cursor-not-allowed" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Nomor HP / WA</label>
              <input type="text" defaultValue="081234567890" className="w-full px-4 py-2 bg-surface-container border border-border rounded-lg text-foreground focus:outline-none focus:border-primary" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Fakultas / Jurusan</label>
              <input type="text" defaultValue="Teknik / Teknik Mesin" className="w-full px-4 py-2 bg-surface-container border border-border rounded-lg text-foreground focus:outline-none focus:border-primary" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-muted-foreground">Curriculum Vitae (CV)</label>
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">cv_ahmad_fauzi_2025.pdf</span>
              <button type="button" className="text-sm text-primary hover:underline">Ganti File</button>
            </div>
          </div>

          <div className="flex justify-end pt-4 border-t border-white/5">
            <button type="button" className="px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">Simpan Perubahan</button>
          </div>
        </form>
      </div>
    </div>
  )
}
