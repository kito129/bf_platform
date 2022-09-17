export interface SavedReport {
  _id?: string
  created: number
  updated: number
  savedReport: {
    name: string
    comment: string
    type: string
    tradesIds: string[]
  }
}
