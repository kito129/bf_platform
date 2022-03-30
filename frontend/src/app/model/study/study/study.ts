export interface Study{
  _id?: string
  created: number,
  lastUpdate: number,
  study: {
    name: string
    description: string
    strategyId: string
    element: {
      baskets: string[],
      entry: string[],
      trades: string,
    }
    options:{
      stake: number
      basketInAnd: boolean
      entryInAnd: boolean
    }
  }
}
