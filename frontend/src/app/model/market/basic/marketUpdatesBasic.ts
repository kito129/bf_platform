export interface MarketUpdatesBasic {
  marketId: string
  marketType: string
  marketUpdates: {
    timestamp: number
    openDate: number
    status: string
    inPlay: boolean
    betDelay: number
  }[]

}




