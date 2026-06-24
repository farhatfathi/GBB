import { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './contexts/auth'
import { LoadingSpinner } from './components/shared/states'

// Layouts
const InternalLayout = lazy(() => import('./portals/internal/layout'))
const BeswanLayout = lazy(() => import('./portals/beswan/layout'))
const DonaturLayout = lazy(() => import('./portals/donatur/layout'))

// Auth
const LoginPage = lazy(() => import('./portals/auth/login'))

// Internal Pages
const DashboardPage = lazy(() => import('./portals/internal/pages/dashboard'))
const BeswanPage = lazy(() => import('./portals/internal/pages/beswan'))
const KurikulumPage = lazy(() => import('./portals/internal/pages/kurikulum'))
const MentorPage = lazy(() => import('./portals/internal/pages/mentor'))
const EventPage = lazy(() => import('./portals/internal/pages/event'))
const PenugasanPage = lazy(() => import('./portals/internal/pages/penugasan'))
const RekonsiliasiPage = lazy(() => import('./portals/internal/pages/keuangan/rekonsiliasi'))
const DatabaseDonaturPage = lazy(() => import('./portals/internal/pages/keuangan/database-donatur'))
const MonitoringPage = lazy(() => import('./portals/internal/pages/keuangan/monitoring'))
const LaporanPage = lazy(() => import('./portals/internal/pages/laporan'))

// Beswan Pages
const BeswanBerandaPage = lazy(() => import('./portals/beswan/pages/beranda'))
const BeswanLibraryPage = lazy(() => import('./portals/beswan/pages/library'))
const BeswanProfilePage = lazy(() => import('./portals/beswan/pages/profile'))
const BeswanMentorPage = lazy(() => import('./portals/beswan/pages/mentor'))
const BeswanRefleksiPage = lazy(() => import('./portals/beswan/pages/refleksi'))

// Donatur Pages
const DonaturBerandaPage = lazy(() => import('./portals/donatur/pages/beranda'))
const DonaturDaftarMentorPage = lazy(() => import('./portals/donatur/pages/daftar-mentor'))
const DonaturProfilePage = lazy(() => import('./portals/donatur/pages/profile'))
const DonaturDashboardPage = lazy(() => import('./portals/donatur/pages/dashboard'))
const DonaturBeswanPage = lazy(() => import('./portals/donatur/pages/beswan'))
const DonaturLaporanPage = lazy(() => import('./portals/donatur/pages/laporan'))

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<div className="h-screen w-full flex items-center justify-center"><LoadingSpinner /></div>}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        
        <Route path="/internal" element={<InternalLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="beswan" element={<BeswanPage />} />
          <Route path="kurikulum" element={<KurikulumPage />} />
          <Route path="mentor" element={<MentorPage />} />
          <Route path="event" element={<EventPage />} />
          <Route path="penugasan" element={<PenugasanPage />} />
          <Route path="keuangan/rekonsiliasi" element={<RekonsiliasiPage />} />
          <Route path="keuangan/database-donatur" element={<DatabaseDonaturPage />} />
          <Route path="keuangan/monitoring" element={<MonitoringPage />} />
          <Route path="laporan" element={<LaporanPage />} />
        </Route>

        <Route path="/beswan" element={<BeswanLayout />}>
          <Route index element={<Navigate to="beranda" replace />} />
          <Route path="beranda" element={<BeswanBerandaPage />} />
          <Route path="library" element={<BeswanLibraryPage />} />
          <Route path="mentor" element={<BeswanMentorPage />} />
          <Route path="refleksi" element={<BeswanRefleksiPage />} />
          <Route path="profile" element={<BeswanProfilePage />} />
        </Route>

        <Route path="/donatur" element={<DonaturLayout />}>
          <Route index element={<Navigate to="beranda" replace />} />
          <Route path="beranda" element={<DonaturBerandaPage />} />
          <Route path="daftar-mentor" element={<DonaturDaftarMentorPage />} />
          <Route path="dashboard" element={<DonaturDashboardPage />} />
          <Route path="beswan" element={<DonaturBeswanPage />} />
          <Route path="laporan" element={<DonaturLaporanPage />} />
          <Route path="profile" element={<DonaturProfilePage />} />
        </Route>

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
      </Suspense>
    </AuthProvider>
  )
}

export default App
