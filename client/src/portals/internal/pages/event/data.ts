export interface Event {
  id: string; kode: string; nama: string; tanggal: string; tipe: 'Talkshow' | 'Growth' | 'Other'
  mentor: string; status: 'done' | 'upcoming' | 'alert'
  youtubeUrl: string | null; slideUrl: string | null
}

export const eventList: Event[] = [
  { id: '1', kode: 'EVT-BBB4-01', nama: 'CV Writing', tanggal: '15 Sep 2025', tipe: 'Growth', mentor: 'Rini', status: 'done', youtubeUrl: '#', slideUrl: '#' },
  { id: '2', kode: 'EVT-BBB4-02', nama: 'Public Speaking', tanggal: '22 Sep 2025', tipe: 'Talkshow', mentor: 'Ahmad', status: 'done', youtubeUrl: '#', slideUrl: '#' },
  { id: '3', kode: 'EVT-BBB4-03', nama: 'Interview Prep', tanggal: '10 Okt 2025', tipe: 'Growth', mentor: 'Sari', status: 'alert', youtubeUrl: null, slideUrl: null },
  { id: '4', kode: 'EVT-BBB4-04', nama: 'AI for Students', tanggal: '25 Nov 2025', tipe: 'Talkshow', mentor: 'TBD', status: 'upcoming', youtubeUrl: null, slideUrl: null },
]

export const eventAbsensi = [
  { nama: 'Ahmad Fauzi', nim: '21050111001', hadir: true },
  { nama: 'Siti Nurhaliza', nim: '21050111002', hadir: true },
  { nama: 'Cindy Aulia', nim: '21050111004', hadir: false },
]
