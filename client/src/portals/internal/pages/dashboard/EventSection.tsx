import { MetricCard } from '@/components/shared/metric-card'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { dashboardData } from './data'

const d = dashboardData.event

export function EventSection() {
  return (
    <section className="space-y-6">
      <h2 className="text-headline-md">Event Overview</h2>
      <div className="grid grid-cols-4 gap-4">
        <MetricCard icon="🎤" label="Total Event" value={d.total} />
        <MetricCard icon="💬" label="Talkshow" value={d.talkshow} />
        <MetricCard icon="🌱" label="Growth" value={d.growth} />
        <MetricCard icon="📌" label="Other" value={d.other} />
      </div>
      <div className="glass-tile p-5">
        <p className="text-label-md text-muted-foreground mb-4">Event per Bulan</p>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={d.perBulan}>
            <CartesianGrid strokeDasharray="3 3" stroke="#414754" />
            <XAxis dataKey="bulan" stroke="#8b90a0" fontSize={12} />
            <YAxis stroke="#8b90a0" fontSize={12} />
            <Tooltip contentStyle={{ background: '#1d2022', border: '1px solid #414754', borderRadius: 8, color: '#e0e3e5' }} />
            <Bar dataKey="count" fill="#adc7ff" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="glass-tile p-5">
        <p className="text-label-md text-muted-foreground mb-3">Upcoming Events</p>
        <div className="space-y-2">
          {d.upcoming.map((e, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
              <div>
                <p className="text-sm font-medium">{e.nama}</p>
                <p className="text-xs text-muted-foreground">{e.mentor}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground">{e.tanggal}</p>
                <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">{e.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
