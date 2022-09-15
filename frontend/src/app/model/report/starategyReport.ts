import {Strategy} from './strategy';
import {ConsecutiveTrade} from './consecutiveTrade';

export interface StrategyReport{
  strategy?: Strategy
  title?: string
  cash: {
    pl: number
    stake: number
    stakePercent: number
    bank: number
  }
  trades: {
    total: number
    detail: {
      total: StrategyResume
      loss: StrategyResume
      profit: StrategyResume
      void: {
        count: number,
      }
    }
    dd: {
      max: {
        dd: number
        percent: number
      },
      avg: {
        dd: number
        percent: number
      },
      stdv: {
        dd: number
        percent: number
      }
    },
    oddsStats: {
      runnerA: {
        back: number
        lay: number
      },
      runnerB: {
        back: number
        lay: number
      }
      total: {
        back: number
        lay: number
      }
    }
    commission: {
      total: number
      avgPerTrade: number
      max: number
      impactPercent: number
      stdv: number
    },
    risk: {
      total: number
      avgPerTrade: number
      max: number
      min: number
      stdv: number
    }
    rr: {
      total: number
      avgPerTrade: number
      max: number
      stdv: number
    }
  }
}

export interface StrategyResume{
  count: number
  grossCash: number
  averageCash: number
  stdvCash: number
  maxCash: number
  maxPercent: number
  consecutiveNumber: number
  consecutiveAvgNumber: number
  consecutiveCash: number
  consecutivePercent: number
  trades: ConsecutiveTrade[][]
}
