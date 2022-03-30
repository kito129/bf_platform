import {Strategy} from "./strategy";

export interface StrategyDatatable{
  _id: string
  name: string
  sport: string
  numberOfTrade: number
  currentBank: number
  pl: number
  maxDD: number
  maxDDPercent: number
  winRatio: number
  strategy: Strategy
}
