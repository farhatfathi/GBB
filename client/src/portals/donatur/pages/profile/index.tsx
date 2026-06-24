export default function DonaturProfilePage() {
  return (
    <div className="space-y-6 max-w-container">
      <div>
        <h1 className="text-headline-lg">Profile Donatur</h1>
        <p className="text-body-md text-muted-foreground">Data profil Anda tersinkronisasi otomatis dari database GBB.</p>
      </div>

      <div className="glass-tile p-8 max-w-2xl">
        <div className="flex items-center gap-6 mb-8">
          <div className="w-24 h-24 rounded-full bg-surface-bright flex items-center justify-center text-4xl border-2 border-primary">
            AS
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Agus Setiawan</h2>
            <p className="text-muted-foreground">ID Donatur: <span className="font-mono text-primary">AS12024</span></p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-y-6 gap-x-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Email</p>
              <p className="font-medium">agus.setiawan@example.com</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Nomor WhatsApp</p>
              <p className="font-medium">081122334455</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Pekerjaan / Instansi</p>
              <p className="font-medium">VP of Sales at PT Tech Indo</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Komitmen Donasi</p>
              <p className="font-medium">Bulanan (Rp 500.000)</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Alamat Domisili</p>
              <p className="font-medium">Jakarta Selatan</p>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/5">
            <p className="text-xs text-muted-foreground flex items-center gap-2">
              <span>ℹ️</span> Data ini di-sync secara berkala dari form pendaftaran donatur. Jika ada perubahan data (seperti nomor WA atau nominal donasi), silakan hubungi tim Admin GBB.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
