import {NewTrade} from '../new/newTrade';
import {TennisTournament} from '../../tennisTournament/tennisTournament';

export interface StrategyFilterBsp{
  name: string
  trades: NewTrade[]
  minOdds: number
  maxOdds: number
  filterType: string
  filterTournamentType: string
  filterTournamentSurface: string
  bank: number
}

export class StrategyFilterBspClass implements StrategyFilterBsp{
  name: string
  trades: NewTrade[] = []
  minOdds: number
  maxOdds: number
  filterType: string
  filterTournamentType: string
  filterTournamentSurface: string
  bank: number

  constructor(name: string, min: number, max: number, bank: number) {
    this.name = name
    this.minOdds = min
    this.maxOdds = max
    this.filterType = 'BSP'
    this.filterTournamentType = 'All'
    this.filterTournamentSurface = 'ALL'
    this.bank = bank
  }

  filterData(trades: NewTrade[], tennisTournament: TennisTournament[]){
    // empty prev data
    this.trades = []
    // check for trades with conditions
    this.filterByTournament(trades,tennisTournament).forEach(trade =>{
      let valid = false
      trade.trade.selections.forEach(sel => {
        if(this.filterType === 'BSP'){
          if(sel.bsp>= this.minOdds && sel.bsp<=this.maxOdds){
            valid = true
          }
        } else if(this.filterType === 'BSP (Traded Only)'){
          if(sel.bsp>= this.minOdds && sel.bsp<=this.maxOdds && (sel.avg.back.odds>0 || sel.avg.lay.odds>0 )){
            valid = true
          }
        } else if(this.filterType === 'AVG Back'){
          if(sel.avg.back.odds>= this.minOdds && sel.avg.back.odds<=this.maxOdds){
            valid = true
          }
        } else if(this.filterType === 'AVG Lay'){
          if(sel.avg.lay.odds>= this.minOdds && sel.avg.lay.odds<=this.maxOdds){
            valid = true
          }
        }
      })
      if(valid){
        this.trades.push(trade)
      }
    })
  }

  filterByTournament(trade: NewTrade[], tennis: TennisTournament[]): NewTrade[]{
    const tempTrade = []
    if(this.filterTournamentType !== 'All'){
      trade.forEach(t=>{
        const id = tennis.filter( x=> x._id === t.trade.info.tennisTournamentId)[0]
        if(id){
          switch (this.filterTournamentType){
            case 'ATP':{
              if(id.tournament.detail.type.federation ==='ATP'){
                tempTrade.push(t)
              }
              break
            }
            case 'WTA':{
              if(id.tournament.detail.type.federation ==='WTA'){
                tempTrade.push(t)
              }
              break
            }
          }
        }
      })
    } else {
      return trade
    }
    return tempTrade
  }

}
