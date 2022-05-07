import {NewTrade} from '../new/newTrade';

export interface StrategyFilterBsp{
  name: string
  trades: NewTrade[]
  minOdds: number
  maxOdds: number
}

export class StrategyFilterBspClass implements StrategyFilterBsp{
  name: string
  trades: NewTrade[] = []
  minOdds: number
  maxOdds: number

  constructor(name: string, min: number, max: number, trades: NewTrade[]) {
    this.name = name
    this.minOdds = min
    this.maxOdds = max
    trades.forEach(trade =>{
      let valid = false
      trade.trade.selections.forEach(sel => {
        if(sel.bsp>= this.minOdds && sel.bsp<=this.maxOdds){
          valid = true
        }
      })
      if(valid){
        this.trades.push(trade)
      }
    })
  }
}
