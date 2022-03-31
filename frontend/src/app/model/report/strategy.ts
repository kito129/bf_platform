export interface Strategy {
  _id?: string
  created?: number
  lastUpdate?: number
  strategy: {
    info: {
      name: string
      sport: string
      bank: number
      executor: string
      moneyManagement: string
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

