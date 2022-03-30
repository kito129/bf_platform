export interface MarketOddsBasic {
  _id: string;
  marketId: string
  marketType: string
  marketOdds: {
    runnerId: string
    odds: {
        timestamp: number
        ltp: number
      }[]
  }[]
}




