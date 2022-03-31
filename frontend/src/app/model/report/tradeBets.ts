import {TennisPoint} from '../point/tennisPoint';

export interface TradeBets{
  id: number
  type: string
  selectionN: number,
  selectionName: string
  odds: number,
  stake: number,
  liability: number,
  toWin: number,
  time: number,
  point: TennisPoint,
  note: string
  options: string

}
