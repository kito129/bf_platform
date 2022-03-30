export interface Strategy {
  _id?: string
  created?: number
  lastUpdate?: number
  strategy: {
    info: {
      name: string
      sport: string
      bank: number
      stake: number
      typeOfStake: string
      detail: {
        description: string
        entryDescription: string
        exitDescription: string
        mmDescription: string
      }
    }
  }
}

