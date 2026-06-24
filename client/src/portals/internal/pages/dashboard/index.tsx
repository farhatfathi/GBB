import { EventSection } from './EventSection'
import { GrowthSection } from './GrowthSection'
import { BeswanSection } from './BeswanSection'

export default function DashboardPage() {
  return (
    <div className="space-y-10 max-w-container">
      <div>
        <h1 className="text-headline-lg">Dashboard</h1>
        <p className="text-body-md text-muted-foreground">Ringkasan Portal Internal GBB — BBB4 (Jan–Jun 2025)</p>
      </div>
      <EventSection />
      <GrowthSection />
      <BeswanSection />
    </div>
  )
}
