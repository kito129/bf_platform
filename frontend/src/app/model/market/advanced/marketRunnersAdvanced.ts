export interface MarketRunnersAdvanced {
  _id: string;
  marketId: string,
  marketType: string,
  marketRunners: {
      id: number,
      name: string,
      status: string,
      inPlayOdds: number,
      inPlayTime:  number,
      avgPrematch:  number,
      closedOdds:  number,
      maxPrematch:  number,
      minPrematch:  number,
      maxInPlay:  number,
      minInPlay:  number,
      inPlayIndex:  number,
      lengthOdds: number,
      lengthOddsPrematch:  number,
      lengthOddsInPlay:  number,
      inPlayOddsOver2:  number,
      inPlayOddsUnder2:  number,
      tradedVolume: number,
      preMatchVolume: number,
      inPlayVolume: number,
    }[]
}

