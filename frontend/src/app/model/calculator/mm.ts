import {TradePlSeries} from "./montecarlo";

export interface Mm{
  t0capital: number
  params:{
    fixedStake: number
    martingalaK: number
    antimartingalaK: number
    fixedFractional: number
    fixedRatio: {
      ratio: number
      maxLoss: number
      delta: number
    }
  }
}

export interface MmResult{
  fixedStake: TradePlSeries
  martingalaK: TradePlSeries
  antimartingalaK: TradePlSeries
  fixedFractional: TradePlSeries
  fixedRatio: TradePlSeries
}

