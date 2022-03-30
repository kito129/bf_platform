import {TennisPoint} from '../../point/tennisPoint';
import {FootballPoint} from '../../point/footballPoint';

export interface NewTrade{
  _id?: string
  created?: number
  updated?: number
  trade: {
    info: {
      setTime: {
        second: number
        third: number
      },
      strategyId: string
      tennisTournamentId: string
      date: number
      marketInfo: {
        marketName: string
        marketId: string
        marketType: string
        eventName: string
        sport: string
      }
      executor: string[]
      exchange: {
        name: string
        commission: number
      }
      note: {
        description: string
        entry: string
        exit: string
        position: string
        mm: string
        odds: string
        post: string
      }
    }
    selections: [{
      selectionN: number
      runnerId: number
      runnerName: string
      winner: boolean
      bsp: number
      sets: {
        secondSet: number
        thirdSet: number
      },
      avg: {
        back: {
          odds: number
          stake: number
          toWin: number
          liability: number
        },
        lay: {
          odds: number
          stake: number
          toWin: number
          liability: number
        }
      }
    }]
    trades: {
      id: number
      selectionN: number
      odds: number
      stake: number
      liability: number
      ifWin: number
      options: string
      type: string
      condition: {
        tennis: {
          isTennis: boolean
          point: TennisPoint
        }
        football: {
          isFootball: boolean
          point: FootballPoint
        }
        horse: {
          isHorse: boolean
        }
        note: string
        time: number
      }
    }[]
    results: {
      grossProfit: number,
      netProfit: number,
      rr: number
      commissionPaid: number
      maxRisk: number
      correctionPl: number
      finalScore:{
        tennis: TennisPoint
        football: FootballPoint
      }
    },
    stats: [{
      runnerId: number
      stats1: number
      stats2: number
      stats3: number
      stats4: number
      stats5: number
      stats6: number
      stats7: number
      stats8: number
      stats9: number
      stats10: number
    }],
    params: [{
      runnerId: number
      params1: number
      params2: number
      params3: number
      params4: number
      params5: number
      params6: number
      params7: number
      params8: number
      params9: number
      params10: number
    }]
  }
}
