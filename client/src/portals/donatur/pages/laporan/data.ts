export interface LaporanPublic {
  id: string; judul: string; tipe: 'Laporan Keuangan' | 'Booklet'; periode: string; tanggal: string; url: string;
}

export const laporanPublicList: LaporanPublic[] = [
  { id: '1', judul: 'Laporan Semester BBB3', tipe: 'Laporan Keuangan', periode: 'BBB3', tanggal: '15 Jul 2024', url: '#' },
  { id: '2', judul: 'Booklet Profil Beswan BBB3', tipe: 'Booklet', periode: 'BBB3', tanggal: '01 Agu 2024', url: '#' },
  { id: '3', judul: 'Laporan Kuartal 1 BBB4', tipe: 'Laporan Keuangan', periode: 'BBB4', tanggal: '10 Apr 2025', url: '#' },
]
