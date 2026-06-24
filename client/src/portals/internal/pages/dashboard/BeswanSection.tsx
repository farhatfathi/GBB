import { MetricCard } from '@/components/shared/metric-card'
import { dashboardData } from './data'

const d = dashboardData.beswan

export function BeswanSection() {
  return (
    <section className="space-y-6">
      <h2 className="text-headline-md">Beswan Overview</h2>
      <div className="grid grid-cols-4 gap-4">
        <MetricCard icon="👥" label="Aktif" value={d.aktif} />
        <MetricCard icon="🎓" label="Alumni" value={d.alumni} />
        <MetricCard icon="⚠️" label="Belum Refleksi" value={d.belumRefleksi} />
        <MetricCard icon="⚠️" label="Belum Prestasi" value={d.belumPrestasi} />
      </div>
      <div className="space-y-3">
        {d.alerts.map((alert, i) => (
          <div key={i} className="glass-tile p-4 border-l-4 border-l-secondary">
            <p className="text-sm font-medium text-secondary">{alert.message}</p>
            <p className="text-xs text-muted-foreground mt-1">
              {alert.names.join(', ')}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
