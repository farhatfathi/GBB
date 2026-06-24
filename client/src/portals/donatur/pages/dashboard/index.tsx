import { MetricCard } from '@/components/shared/metric-card'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const financeData = [
  { bulan: 'Jan', donasi: 12, operasional: 2, program: 6 },
  { bulan: 'Feb', donasi: 14, operasional: 2, program: 7 },
  { bulan: 'Mar', donasi: 15, operasional: 3, program: 8 },
]

const growthData = [
  { event: 'EVT-01', rataRataNilai: 82 },
  { event: 'EVT-02', rataRataNilai: 85 },
  { event: 'EVT-03', rataRataNilai: 88 },
]

export default function DonaturDashboardPage() {
  return (
    <div className="space-y-6 max-w-container">
      <div>
        <h1 className="text-headline-lg">Dashboard Transparansi GBB</h1>
        <p className="text-body-md text-muted-foreground">Monitoring arus kas, penggunaan dana, dan progres penerima beasiswa.</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <MetricCard icon="👥" label="Total Beswan Aktif" value="30 Anak" />
        <MetricCard icon="🎓" label="Total Alumni" value="120 Anak" />
        <MetricCard icon="💰" label="Total Donasi (Bulan Ini)" value="Rp 15 Juta" />
        <MetricCard icon="📈" label="Avg. Pertumbuhan Nilai" value="+ 5.2%" />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="glass-tile p-6">
          <h3 className="text-headline-md mb-6">Alokasi Dana & Donasi (Juta Rupiah)</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={financeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#414754" />
              <XAxis dataKey="bulan" stroke="#8b90a0" />
              <YAxis stroke="#8b90a0" />
              <Tooltip contentStyle={{ background: '#1d2022', border: '1px solid #414754', borderRadius: 8 }} />
              <Bar dataKey="donasi" fill="#adc7ff" name="Pemasukan Donasi" radius={[4, 4, 0, 0]} />
              <Bar dataKey="program" fill="#ffb59a" name="Pengeluaran Program" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="glass-tile p-6">
          <h3 className="text-headline-md mb-6">Pertumbuhan Rata-rata Nilai Beswan</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={growthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#414754" />
              <XAxis dataKey="event" stroke="#8b90a0" />
              <YAxis domain={[70, 100]} stroke="#8b90a0" />
              <Tooltip contentStyle={{ background: '#1d2022', border: '1px solid #414754', borderRadius: 8 }} />
              <Line type="monotone" dataKey="rataRataNilai" stroke="#adc7ff" strokeWidth={3} dot={{ r: 4, fill: '#adc7ff' }} name="Rata-rata Nilai" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
