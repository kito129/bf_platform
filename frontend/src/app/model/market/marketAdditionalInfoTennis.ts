export interface MarketAdditionalInfoTennis {
  _id: string;
  marketId: string,
  marketAdditionalInfoTennis?: {
    federation: string
    sex: string
    season: number
    tennisTournament: {
      location: string
      tournament: string
      series: string
      surface: string
      round: string
      bestOf: number
    },
    tennisRank: {
      winnerRank: number
      loserRank: number
      winnerPoint: number
      loserPoint: number
    },
    finalResult: {
      winner: {
        s1: number
        s2: number
        s3: number
        s4: number
        s5: number
        totalSet: number
      },
      loser: {
        s1: number
        s2: number
        s3: number
        s4: number
        s5: number
        totalSet: number
      },
    },
    bookOdds: {
      bet365: {
        winner: number
        loser: number
      },
      pinnacle: {
        winner: number
        loser: number
      },
      maxOddsPortal: {
        winner: number
        loser: number
      },
      avgOddsPortal: {
        winner: number
        loser: number
      },
    }
  }
}
