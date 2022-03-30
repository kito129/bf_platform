export interface MarketInfoAdvanced {
  _id: string;
  marketId: string,
  marketType: string,
  marketInfo: {
    id: string,
    eventId: string,
    eventName: string,
    marketType: string,
    name: string,
    openDate: number,
    numberOfActiveRunners: number,
    countryCode: string,
    venue: string,
    sport: string,
    delay: number
    volume: {
      total: number,
      preMatch: number,
      inPlay: number,
    }
    winner:{
      id: number,
      name: string,
      status: string,
      BSP: number,
      tradedVolume: number,
      maxInPlay: number,
      minInPlay: number,
    }
    loser:{
      id: number,
      name: string,
      status: string,
      BSP: number,
      tradedVolume: number,
      maxInPlay: number,
      minInPlay: number,
    },
    metadata: {
      inPlayTime: number,
      suspendTime: number,
      inplaySuspendUpdatesNumber: number,
      closeTime: number,
      correctSuspended: boolean,
      inPlayDuration: number,
      haveAdditionalInfo: boolean,
      runnersCorrectBSP: number,
      prematchNumberOddsNumber: number,
      inplayNumberOddsNumber: number,
      inplayUpdatesNumber: number,
      inplayUpdates:{
        timestamp: number,
        openDate: number,
        status: string,
        betDelay: number,
        inPlay: boolean,
      }[]
    },
  }
}
