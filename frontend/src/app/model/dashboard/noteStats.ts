export interface NoteStats{
  length: number
  stats: {
    medical: number
    note: number
    walkover: number
    nmRetires: number
    validated: number
  }
  medical: {
    winner: number
    looser: number
    retired: number
    fsRetired: number
  }
}
