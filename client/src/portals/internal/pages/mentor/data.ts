export interface Mentor {
  id: string; nama: string; email: string; bidang: string
  isInternal: boolean; totalEvent: number; avgRating: number
}

export const mentorList: Mentor[] = [
  { id: '1', nama: 'Dr. Rini Setyowati', email: 'rini@undip.ac.id', bidang: 'Public Speaking', isInternal: false, totalEvent: 3, avgRating: 4.8 },
  { id: '2', nama: 'Farhat Fathi', email: 'farhat@gbb.org', bidang: 'Project Management', isInternal: true, totalEvent: 2, avgRating: 4.5 },
  { id: '3', nama: 'Ahmad Hidayat', email: 'ahmad.h@corp.com', bidang: 'Career Development', isInternal: false, totalEvent: 4, avgRating: 4.9 },
  { id: '4', nama: 'Sari Dewi', email: 'sari@gbb.org', bidang: 'Interview Prep', isInternal: true, totalEvent: 2, avgRating: 4.6 },
  { id: '5', nama: 'Budi Karya', email: 'budi.k@tech.co', bidang: 'Tech & AI', isInternal: false, totalEvent: 1, avgRating: 4.7 },
  { id: '6', nama: 'Diana Permata', email: 'diana@undip.ac.id', bidang: 'Personal Branding', isInternal: false, totalEvent: 2, avgRating: 4.4 },
]

export const mentorEvents = [
  { event: 'Talkshow: Public Speaking 101', tanggal: '22 Sep 2024', peran: 'Speaker', rating: 4.9 },
  { event: 'Growth: Interview Workshop', tanggal: '10 Okt 2024', peran: 'Fasilitator', rating: 4.7 },
  { event: 'Talkshow: Career Mapping', tanggal: '12 Nov 2024', peran: 'Speaker', rating: 4.8 },
]
