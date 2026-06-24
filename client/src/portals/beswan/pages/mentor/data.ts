export interface MentorPublik {
  id: string; nama: string; bidang: string; isInternal: boolean; ketersediaan: string;
}

export const mentorPublikList: MentorPublik[] = [
  { id: '1', nama: 'Dr. Rini Setyowati', bidang: 'Public Speaking', isInternal: false, ketersediaan: '1 Slot/Bulan' },
  { id: '2', nama: 'Farhat Fathi', bidang: 'Project Management', isInternal: true, ketersediaan: 'Tersedia' },
  { id: '3', nama: 'Sari Dewi', bidang: 'Interview Prep', isInternal: true, ketersediaan: 'Penuh' },
  { id: '4', nama: 'Ahmad Hidayat', bidang: 'Career Development', isInternal: false, ketersediaan: 'Tersedia' },
]
