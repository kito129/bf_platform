export interface MarketOddsAdvanced {
  _id: string;
  marketId: string
  marketType: string
  marketOdds: {
    odds:
      {
        timestamp: number,
        ltp: number,
        tv: number,
        trd: number[][],
        batb: number[][],
        batl: number[][],
      }[],
    runnerId: string,
  }[]
}




