import {TradePlSeries} from './montecarlo';

export interface Mm{
  t0capital: number
  params:{
    fixedStake: number
    martingala: {
      k: number
      maxStake: number
    }
    fixedFractional: {
      f: number
      maxStake: number
    }
    fixedRatio: {
      ratio: number
      delta: number
    }
    kelly: {
      w: number
      R: number
      kPercent: number
    }

  }
}

export interface MmResult{
  originalSeries: TradePlSeries
  fixedStake: TradePlSeries
  martingalaK: TradePlSeries
  percent: TradePlSeries
  fixedRatio: TradePlSeries
  kelly: TradePlSeries
}

