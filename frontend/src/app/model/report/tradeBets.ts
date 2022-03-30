import {TennisPoint} from '../point/tennisPoint';

export interface TradeBets{
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
}
