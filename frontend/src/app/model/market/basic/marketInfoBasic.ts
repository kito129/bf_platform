export interface MarketInfoBasic {
  _id: string;
  marketId: string,
  marketType: string,
  marketInfo: {
    id: string,
    eventId: string,
    eventName: string,
    marketType: string,
    openDate: number,
    name: string,
    numberOfActiveRunners: number,
    countryCode: string,
    venue: string,
    sport: string,
    winner: {
      id: number,
      name: string,
      status: string,
      position: number
    },
    delay: number,
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
