export interface Entry {
  _id?: string
  created: number,
  lastUpdate: number,
  entry: {
    name: string
    description: string
    options: EntryOptions
    bets: Bets[]
  }
}


export interface EntryOptions{
    isFirstOccurrence: boolean
    timeToEntry: number
}

export interface Bets{
  id: number
  entry: {
    isBack: boolean
    isUp: boolean
    odds: number
    stake: number
    bank: number
    liability: number
    timeLimit: number
    marginTicks: number
  }
  haveProfit: boolean
  haveLoss: boolean
  profitExit: {
    isBack: boolean
    isUp: boolean
    odds: number
    stake: number
    bank: number
    liability: number
    timeLimit: number
    marginTicks: number
  }
  lossExit: {
    isBack: boolean
    isUp: boolean
    odds: number
    stake: number
    bank: number
    liability: number
    timeLimit: number
    marginTicks: number
  }
}
