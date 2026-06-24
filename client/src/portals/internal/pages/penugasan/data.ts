export interface Penugasan {
  id: string; kode: string; judul: string; eventSumber: string
  deadline: string; submitted: number; total: number; status: 'active' | 'closed'
}

export const penugasanList: Penugasan[] = [
  { id: '1', kode: 'TGS-BBB4-01', judul: 'Refleksi CV', eventSumber: 'EVT-BBB4-01', deadline: '20 Sep 2025', submitted: 14, total: 15, status: 'closed' },
  { id: '2', kode: 'TGS-BBB4-02', judul: 'Essay Speaking', eventSumber: 'EVT-BBB4-02', deadline: '30 Sep 2025', submitted: 10, total: 15, status: 'active' },
  { id: '3', kode: 'TGS-BBB4-03', judul: 'Portfolio', eventSumber: 'non-event', deadline: '15 Okt 2025', submitted: 3, total: 15, status: 'active' },
]

export const tugasSubmissions = [
  { nama: 'Ahmad Fauzi', nim: '21050111001', status: 'graded', nilai: 85, fileUrl: '#' },
  { nama: 'Siti Nurhaliza', nim: '21050111002', status: 'submitted', nilai: null, fileUrl: '#' },
  { nama: 'Cindy Aulia', nim: '21050111004', status: 'belum_kumpul', nilai: null, fileUrl: null },
]
