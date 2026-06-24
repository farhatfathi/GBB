export interface Laporan {
  id: string; judul: string; tipe: string
  periodeId: string; isPublic: boolean; fileUrl: string
  createdAt: string
}

export const laporanList: Laporan[] = [
  { id: '1', judul: 'Laporan Semester BBB3', tipe: 'laporan_keuangan', periodeId: 'BBB3', isPublic: true, fileUrl: '#', createdAt: '2024-07-15' },
  { id: '2', judul: 'Booklet BBB3', tipe: 'booklet', periodeId: 'BBB3', isPublic: true, fileUrl: '#', createdAt: '2024-08-01' },
  { id: '3', judul: 'Laporan Internal Q1 BBB4', tipe: 'laporan_keuangan', periodeId: 'BBB4', isPublic: false, fileUrl: '#', createdAt: '2025-04-10' },
  { id: '4', judul: 'Booklet BBB4', tipe: 'booklet', periodeId: 'BBB4', isPublic: false, fileUrl: '#', createdAt: '2025-06-01' },
]
