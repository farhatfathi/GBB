import { MetricCard } from '@/components/shared/metric-card'
import { myMentoringHistory } from './data'

export default function DonaturDaftarMentorPage() {
  const isMentor = myMentoringHistory.length > 0;

  return (
    <div className="space-y-6 max-w-container">
      <div>
        <h1 className="text-headline-lg">Program Mentoring GBB</h1>
        <p className="text-body-md text-muted-foreground">Bagikan ilmu dan pengalaman Anda langsung kepada para beswan.</p>
      </div>

      {isMentor ? (
        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <MetricCard icon="🌟" label="Rating Rata-rata" value="⭐ 4.8" />
            <MetricCard icon="🎤" label="Total Mengisi Event" value="3 Event" />
            <MetricCard icon="👥" label="Sesi 1-on-1 Selesai" value="12 Sesi" />
          </div>
          
          <div className="glass-tile p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-headline-md">Status Mentor Anda</h3>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400">Mentor Aktif</span>
            </div>
            
            <form className="space-y-4 max-w-lg">
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Bidang Keahlian</label>
                <input type="text" defaultValue="Business Development & Marketing" className="w-full px-4 py-2 bg-surface-container border border-border rounded-lg text-foreground focus:outline-none focus:border-primary" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Ketersediaan 1-on-1 (per bulan)</label>
                <select className="w-full px-4 py-2 bg-surface-container border border-border rounded-lg text-foreground focus:outline-none focus:border-primary">
                  <option>1 Slot</option>
                  <option selected>2 Slot</option>
                  <option>3 Slot</option>
                  <option>Sedang Penuh / Tidak Tersedia</option>
                </select>
              </div>
              <button type="button" className="px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">Update Ketersediaan</button>
            </form>
          </div>
        </div>
      ) : (
        <div className="glass-tile p-8 flex flex-col items-center justify-center text-center max-w-2xl mx-auto mt-12 gap-4">
          <span className="text-5xl">🎓</span>
          <h2 className="text-2xl font-semibold">Mari Menjadi Mentor GBB</h2>
          <p className="text-muted-foreground">Selain berdonasi, Anda juga bisa berkontribusi dengan membagikan keahlian dan pengalaman Anda kepada beswan melalui program *1-on-1 Mentoring* atau menjadi pembicara tamu di event *Talkshow*.</p>
          <button className="px-6 py-3 mt-4 bg-primary text-primary-foreground font-bold rounded-lg hover:opacity-90 transition-opacity">
            Daftar Sebagai Mentor
          </button>
        </div>
      )}
    </div>
  )
}
