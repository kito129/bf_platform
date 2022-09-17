import {Strategy} from "./strategy";
import {SavedReport} from './new/savedReport';

export interface StrategyDatatable{
  _id: string
  name: string
  sport: string
  year: number
  numberOfTrade: number
  currentBank: number
  executor: string
  moneyManagement: string
  bank: number
  stake: number
  typeOfStake: string
  pl: number
  plPercent: number
  maxDD: number
  maxDDPercent: number
  winRatio: number
  strategy: Strategy
  savedReport?: SavedReport
}
