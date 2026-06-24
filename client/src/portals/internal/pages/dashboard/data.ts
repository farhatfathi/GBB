export const dashboardData = {
  event: {
    total: 12, talkshow: 8, growth: 3, other: 1,
    perBulan: [
      { bulan: 'Jan', count: 3 }, { bulan: 'Feb', count: 2 },
      { bulan: 'Mar', count: 2 }, { bulan: 'Apr', count: 3 },
      { bulan: 'Mei', count: 1 }, { bulan: 'Jun', count: 1 },
    ],
    upcoming: [
      { nama: 'Talk: Career in Tech', tanggal: '15 Jun 2025', mentor: 'Budi Santoso', status: 'upcoming' },
      { nama: 'Growth: Public Speaking', tanggal: '22 Jun 2025', mentor: 'Siti Rahma', status: 'upcoming' },
    ],
  },
  growth: {
    avgKehadiran: 85, avgNilai: 78, refleksiRate: 92,
    trend: [
      { event: 'Talk 1', kehadiran: 90, nilai: 72 },
      { event: 'Talk 2', kehadiran: 87, nilai: 75 },
      { event: 'Talk 3', kehadiran: 80, nilai: 80 },
      { event: 'Growth 1', kehadiran: 93, nilai: 78 },
      { event: 'Talk 4', kehadiran: 87, nilai: 82 },
      { event: 'Talk 5', kehadiran: 80, nilai: 76 },
      { event: 'Growth 2', kehadiran: 85, nilai: 85 },
      { event: 'Talk 6', kehadiran: 82, nilai: 74 },
    ],
  },
  beswan: {
    aktif: 15, alumni: 8, belumRefleksi: 3, belumPrestasi: 2,
    alerts: [
      { type: 'refleksi', message: '3 beswan belum submit refleksi Mei 2025', names: ['Ahmad Fauzi', 'Budi Prasetyo', 'Cindy Aulia'] },
      { type: 'prestasi', message: '2 beswan belum update prestasi Q2 2025', names: ['Dani Setiawan', 'Eka Putri'] },
    ],
  },
}
