import {Trade} from '../../report/trade/trade';

export interface ComparatorTableRow{
  studyName: string
  match: number
  win: number
  loss: number
  void: number
  winRate: number
  lossRate: number
  voidRate: number
  expectedValue: number
  pl: number
  maxDD: number
  maxDDPercent: number
  avgDD: number
  avgDDPercent: number
  stdvDD: number
  stdvDDPercent: number
  avgWin: number
  avgLoss: number
  profitFactor: number
  profitGross: number
  lossGross: number
  avgConsecutiveWin: number
  avgConsecutiveLoss: number
  maxConsecutiveWin: number
  maxConsecutiveLoss: number
  maxConsecutiveWinCash: number
  maxConsecutiveLossCash: number
}

export interface MonthTrade {
  month: string,
  trades: Trade[]
}