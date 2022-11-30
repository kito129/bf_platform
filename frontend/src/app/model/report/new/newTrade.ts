import {TennisPoint} from '../../point/tennisPoint';
import {FootballPoint} from '../../point/footballPoint';

export interface NewTrade{
  _id?: string
  created?: number
  updated?: number
  trade: {
    info: TradeInfo
    selections: TradeSelections[]
    trades: Bets[]
    results: TradeResult,
    stats: TradeStatsParams[],
    params: TradeStatsParams[],
    statistic:{
      runnerA: {
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
      },
      runnerB: {
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
      }
    }
  }
}

export interface TradeInfo{
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

export interface TradeResult{
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
}

export interface TradeStatsParams{
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
}

export interface TradeSelections{
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
}

export interface Bets {
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
}

export interface CSVTrade {
  date: number
  marketName: string
  result: string
  marketType: string
  duration: number
  winner: string
  loser: string
  winnerBSP: number
  loserBSP: number
  winnerSet2: number
  loserSet2: number
  winnerSet3: number
  loserSet3: number
  winnerAvgBack: number
  winnerAvgBackStake: number
  winnerAvgBackIfWin: number
  winnerAvgLay: number
  winnerAvgLayBank: number
  winnerAvgLayLiability: number
  loserAvgBack: number
  loserAvgBackStake: number
  loserAvgBackIfWin: number
  loserAvgLay: number
  loserAvgBank: number
  loserAvgLiability: number
  empty: null,
  pl: number
  maxRisk: number
  trade?: NewTrade
}



export interface CSVBetGroup {
  name: string
  id: number
  selectionN: number
  odds: number
  stake: number
  liability: number
  ifWin: number
  options: string
  type: string
  point: TennisPoint | string
  note: string
  time: number
  empty?: null
}
