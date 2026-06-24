export interface DonaturMentor {
  id: string; nama: string; bidang: string; rating: number; totalEvent: number; status: 'Aktif' | 'Inactive';
}

export const myMentoringHistory: DonaturMentor[] = [
  { id: '1', nama: 'Agus Setiawan', bidang: 'Business Development', rating: 4.8, totalEvent: 3, status: 'Aktif' }
]
