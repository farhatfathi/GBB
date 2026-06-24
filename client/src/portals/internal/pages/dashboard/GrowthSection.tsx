import { MetricCard } from '@/components/shared/metric-card'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { dashboardData } from './data'

const d = dashboardData.growth

export function GrowthSection() {
  return (
    <section className="space-y-6">
      <h2 className="text-headline-md">Growth & Progress</h2>
      <div className="grid grid-cols-3 gap-4">
        <MetricCard icon="📋" label="Avg Kehadiran" value={`${d.avgKehadiran}%`} />
        <MetricCard icon="📝" label="Avg Nilai Tugas" value={d.avgNilai} />
        <MetricCard icon="🪞" label="Refleksi Rate" value={`${d.refleksiRate}%`} />
      </div>
      <div className="glass-tile p-5">
        <p className="text-label-md text-muted-foreground mb-4">Trend Kehadiran & Nilai</p>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={d.trend}>
            <CartesianGrid strokeDasharray="3 3" stroke="#414754" />
            <XAxis dataKey="event" stroke="#8b90a0" fontSize={12} />
            <YAxis stroke="#8b90a0" fontSize={12} domain={[0, 100]} />
            <Tooltip contentStyle={{ background: '#1d2022', border: '1px solid #414754', borderRadius: 8, color: '#e0e3e5' }} />
            <Legend />
            <Line type="monotone" dataKey="kehadiran" stroke="#adc7ff" strokeWidth={2} dot={{ r: 4 }} name="Kehadiran (%)" />
            <Line type="monotone" dataKey="nilai" stroke="#ffb59a" strokeWidth={2} dot={{ r: 4 }} name="Nilai" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}
