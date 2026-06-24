import { MetricCard } from '@/components/shared/metric-card'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const chartData = [
  { bulan: 'Jan', masuk: 15, keluar: 4 },
  { bulan: 'Feb', masuk: 16, keluar: 5 },
  { bulan: 'Mar', masuk: 14, keluar: 8 },
  { bulan: 'Apr', masuk: 18, keluar: 6 },
  { bulan: 'Mei', masuk: 15, keluar: 10 },
  { bulan: 'Jun', masuk: 20, keluar: 12 },
]

export default function MonitoringPage() {
  return (
    <div className="space-y-6 max-w-container">
      <div className="flex items-center justify-between">
        <div><h1 className="text-headline-lg">Monitoring Keuangan</h1><p className="text-body-md text-muted-foreground">Ringkasan arus kas per periode BBB4</p></div>
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        <MetricCard icon="💰" label="Total Pemasukan" value="Rp 98.000.000" />
        <MetricCard icon="💸" label="Total Pengeluaran" value="Rp 45.000.000" />
        <MetricCard icon="🏦" label="Saldo Akhir" value="Rp 53.000.000" />
      </div>

      <div className="glass-tile p-6">
        <h3 className="text-headline-md mb-6">Arus Kas (Juta Rupiah)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#414754" />
            <XAxis dataKey="bulan" stroke="#8b90a0" />
            <YAxis stroke="#8b90a0" />
            <Tooltip contentStyle={{ background: '#1d2022', border: '1px solid #414754', borderRadius: 8 }} />
            <Bar dataKey="masuk" fill="#adc7ff" name="Pemasukan" radius={[4, 4, 0, 0]} />
            <Bar dataKey="keluar" fill="#ffb59a" name="Pengeluaran" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
