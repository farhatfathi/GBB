export interface Beswan {
  id: string; nama: string; nim: string; email: string; hp: string
  foto: string; batch: string[]; status: 'aktif' | 'alumni'
  kehadiran: number; totalEvent: number; avgNilai: number
  refleksiSubmitted: number; refleksiTotal: number
}

export const beswanList: Beswan[] = [
  { id: '1', nama: 'Ahmad Fauzi', nim: '21050111001', email: 'ahmad@mail.undip.ac.id', hp: '081234567890', foto: '🟢', batch: ['BBB3','BBB4'], status: 'aktif', kehadiran: 10, totalEvent: 12, avgNilai: 85, refleksiSubmitted: 4, refleksiTotal: 5 },
  { id: '2', nama: 'Siti Nurhaliza', nim: '21050111002', email: 'siti@mail.undip.ac.id', hp: '081234567891', foto: '🟢', batch: ['BBB4'], status: 'aktif', kehadiran: 11, totalEvent: 12, avgNilai: 90, refleksiSubmitted: 5, refleksiTotal: 5 },
  { id: '3', nama: 'Budi Prasetyo', nim: '20050109003', email: 'budi@mail.undip.ac.id', hp: '081234567892', foto: '⚫', batch: ['BBB2','BBB3'], status: 'alumni', kehadiran: 9, totalEvent: 10, avgNilai: 78, refleksiSubmitted: 6, refleksiTotal: 6 },
  { id: '4', nama: 'Cindy Aulia', nim: '21050111004', email: 'cindy@mail.undip.ac.id', hp: '081234567893', foto: '🟢', batch: ['BBB4'], status: 'aktif', kehadiran: 8, totalEvent: 12, avgNilai: 82, refleksiSubmitted: 3, refleksiTotal: 5 },
  { id: '5', nama: 'Dani Setiawan', nim: '22050111005', email: 'dani@mail.undip.ac.id', hp: '081234567894', foto: '🟢', batch: ['BBB4'], status: 'aktif', kehadiran: 12, totalEvent: 12, avgNilai: 92, refleksiSubmitted: 5, refleksiTotal: 5 },
  { id: '6', nama: 'Eka Putri', nim: '21050111006', email: 'eka@mail.undip.ac.id', hp: '081234567895', foto: '🟢', batch: ['BBB3','BBB4'], status: 'aktif', kehadiran: 10, totalEvent: 12, avgNilai: 88, refleksiSubmitted: 4, refleksiTotal: 5 },
  { id: '7', nama: 'Farhan Rizki', nim: '20050109007', email: 'farhan@mail.undip.ac.id', hp: '081234567896', foto: '⚫', batch: ['BBB2'], status: 'alumni', kehadiran: 8, totalEvent: 10, avgNilai: 75, refleksiSubmitted: 6, refleksiTotal: 6 },
  { id: '8', nama: 'Gita Savitri', nim: '22050111008', email: 'gita@mail.undip.ac.id', hp: '081234567897', foto: '🟢', batch: ['BBB4'], status: 'aktif', kehadiran: 11, totalEvent: 12, avgNilai: 87, refleksiSubmitted: 5, refleksiTotal: 5 },
]

export const beswanAbsensi = [
  { event: 'Growth: CV Writing', tanggal: '15 Sep 2024', hadir: true },
  { event: 'Talkshow: Public Speaking', tanggal: '22 Sep 2024', hadir: false },
  { event: 'Growth: Interview Prep', tanggal: '10 Okt 2024', hadir: true },
  { event: 'Talkshow: AI for Students', tanggal: '25 Okt 2024', hadir: true },
  { event: 'Talkshow: Career Path', tanggal: '12 Nov 2024', hadir: true },
]

export const beswanTugas = [
  { judul: 'Refleksi CV Writing', event: 'EVT-01', deadline: '20 Sep 2024', nilai: 85, status: 'graded' as const },
  { judul: 'Essay Public Speaking', event: 'EVT-02', deadline: '30 Sep 2024', nilai: 88, status: 'graded' as const },
  { judul: 'Portfolio Diri', event: '-', deadline: '15 Okt 2024', nilai: null, status: 'submitted' as const },
]
