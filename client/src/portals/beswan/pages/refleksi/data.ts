export interface Refleksi {
  id: string; bulan: string; status: 'Belum' | 'Sudah'; tanggalSubmit: string | null; isi: string | null;
}

export const refleksiList: Refleksi[] = [
  { id: '1', bulan: 'Januari 2025', status: 'Sudah', tanggalSubmit: '28 Jan 2025', isi: 'Bulan ini saya fokus mengatur jadwal kuliah dan mulai eksplor topik event GBB.' },
  { id: '2', bulan: 'Februari 2025', status: 'Belum', tanggalSubmit: null, isi: null },
  { id: '3', bulan: 'Maret 2025', status: 'Belum', tanggalSubmit: null, isi: null },
]

export interface Prestasi {
  id: string; kuartal: string; judul: string; buktiUrl: string | null; status: 'Approved' | 'Pending';
}

export const prestasiList: Prestasi[] = [
  { id: '1', kuartal: 'Q1 2025', judul: 'Juara 1 Lomba Esai Nasional', buktiUrl: '#', status: 'Approved' },
]
