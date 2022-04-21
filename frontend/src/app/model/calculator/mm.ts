import {TradePlSeries} from "./montecarlo";

export interface Mm{
  t0capital: number
  params:{
    fixedStake: number
    martingalaK: number
    fixedFractional: number
    fixedRatio: {
      ratio: number
      maxLoss: number
      delta: number
    }
  }
}

export interface MmResult{
  originalSeries: TradePlSeries
  fixedStake: TradePlSeries
  martingalaK: TradePlSeries
  fixedFractional: TradePlSeries
  fixedRatio: TradePlSeries
}

