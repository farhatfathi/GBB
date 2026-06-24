export interface Topik {
  id: string; urutan: number; judul: string; detail: string
  torUrl: string; status: 'planned' | 'ongoing' | 'done'
  youtubeUrl: string | null; slideUrl: string | null
}

export const topikList: Topik[] = [
  { id: '1', urutan: 1, judul: 'CV Writing', detail: 'Cara membuat CV yang menarik', torUrl: '#', status: 'done', youtubeUrl: '#', slideUrl: '#' },
  { id: '2', urutan: 2, judul: 'Public Speaking', detail: 'Tips public speaking efektif', torUrl: '#', status: 'done', youtubeUrl: '#', slideUrl: '#' },
  { id: '3', urutan: 3, judul: 'Interview Prep', detail: 'Mock interview dan feedback', torUrl: '#', status: 'ongoing', youtubeUrl: null, slideUrl: null },
  { id: '4', urutan: 4, judul: 'Personal Branding', detail: 'Bangun personal brand', torUrl: '#', status: 'planned', youtubeUrl: null, slideUrl: null },
  { id: '5', urutan: 5, judul: 'Career Mapping', detail: 'Pemetaan karir pasca lulus', torUrl: '#', status: 'planned', youtubeUrl: null, slideUrl: null },
]

export interface LibraryItem {
  id: string; nama: string; tags: string[]; eventSumber: string | null
  tipe: 'event_materi' | 'upload'; fileUrl: string
  aiSummary: string
}

export const libraryList: LibraryItem[] = [
  { id: '1', nama: 'CV Writing 101', tags: ['career', 'cv'], eventSumber: 'EVT-01', tipe: 'event_materi', fileUrl: '#', aiSummary: 'Materi tentang pembuatan CV profesional yang menarik bagi recruiter.' },
  { id: '2', nama: 'Public Speaking Tips', tags: ['softskill', 'speaking'], eventSumber: 'EVT-02', tipe: 'event_materi', fileUrl: '#', aiSummary: 'Panduan public speaking untuk mahasiswa.' },
  { id: '3', nama: 'Template Cover Letter', tags: ['career', 'template'], eventSumber: null, tipe: 'upload', fileUrl: '#', aiSummary: 'Template cover letter yang bisa dikustomisasi.' },
  { id: '4', nama: 'LinkedIn Optimization', tags: ['career', 'linkedin'], eventSumber: null, tipe: 'upload', fileUrl: '#', aiSummary: 'Cara optimasi profil LinkedIn untuk fresh graduate.' },
]
