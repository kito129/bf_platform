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

  constructor(name: string, min: number, max: number, bank: number, surface?: string, sex?: string) {
    this.name = name
    this.minOdds = min
    this.maxOdds = max
    this.filterType = 'BSP (Traded Only)'
    this.filterTournamentType = sex ? sex : 'ALL'
    this.filterTournamentSurface = surface ? surface : 'ALL'
    this.bank = bank
  }

  filterData(trades: NewTrade[], tennisTournament: TennisTournament[]){
    // empty prev data
    this.trades = []
    // check for trades with conditions
    this.filterByTournament(trades,tennisTournament).forEach(trade =>{
      let toAdd = false
      trade.trade.selections.forEach(sel => {
        if(this.filterType === 'BSP'){
          if(sel.bsp>= this.minOdds && sel.bsp<=this.maxOdds){
            toAdd = true
          }
        } else if(this.filterType === 'BSP (Traded Only)'){
          if(sel.bsp>= this.minOdds && sel.bsp<=this.maxOdds && (sel.avg.back.odds>0 || sel.avg.lay.odds>0 )){
            toAdd = true
          }
        } else if(this.filterType === 'AVG BACK'){
          if(sel.avg.back.odds>= this.minOdds && sel.avg.back.odds<=this.maxOdds){
            toAdd = true
          }
        } else if(this.filterType === 'AVG LAY'){
          if(sel.avg.lay.odds>= this.minOdds && sel.avg.lay.odds<=this.maxOdds){
            toAdd = true
          }
        } else if(this.filterType === 'AVG TRADED'){
          if((sel.avg.lay.odds>= this.minOdds && sel.avg.lay.odds<=this.maxOdds) || (sel.avg.back.odds>= this.minOdds && sel.avg.back.odds<=this.maxOdds)){
            toAdd = true
          }
        }
      })
      if(toAdd){
        this.trades.push(trade)
      }
    })
  }

  filterByTournament(trade: NewTrade[], tennis: TennisTournament[]): NewTrade[]{
    const tempTrade = []
    trade.forEach(t=>{
      let toAdd = false
      const tour = tennis.filter(x=> x._id === t.trade.info.tennisTournamentId)[0]
      if(tour){
        // FILTER BY TOURNAMENT
        switch (this.filterTournamentType) {
          // 'ALL', 'ATP', 'ATP CHALLENGER','ALL ATP', 'WTA', 'WTA CHALLENGER', 'ALL WTA','ATP/WTA','CHALLENGER ONLY'
          case 'ATP': {
            if (tour.tournament.detail.type.federation === 'ATP' && !tour.tournament.detail.type.isChallenger) {
              toAdd = true
            }
            break
          }
          case 'ATP CHALLENGER': {
            if (tour.tournament.detail.type.federation === 'ATP' && tour.tournament.detail.type.isChallenger) {
              toAdd = true
            }
            break
          }
          case 'ALL ATP': {
            if (tour.tournament.detail.type.federation === 'ATP') {
              toAdd = true
            }
            break
          }
          case 'WTA': {
            if (tour.tournament.detail.type.federation === 'WTA' && !tour.tournament.detail.type.isChallenger) {
              toAdd = true
            }
            break
          }
          case 'WTA CHALLENGER': {
            if (tour.tournament.detail.type.federation === 'WTA' && tour.tournament.detail.type.isChallenger) {
              toAdd = true
            }
            break
          }
          case 'ALL WTA': {
            if (tour.tournament.detail.type.federation === 'WTA') {
              toAdd = true
            }
            break
          }
          case 'ATP/WTA': {
            if (tour.tournament.detail.type.federation === 'WTA' || tour.tournament.detail.type.federation === 'ATP') {
              toAdd = true
            }
            break
          }
          case 'CHALLENGER ONLY': {
            if (tour.tournament.detail.type.isChallenger) {
              toAdd = true
            }
            break
          }
          case 'ALL': {
            toAdd = true
            break
          }
        }
        // FILTER BY SURFACE
        switch (this.filterTournamentSurface) {
          // 'ALL', 'HARD', 'CLAY','GRASS', 'INDOOR HARD'
          case 'HARD': {
            if (tour.tournament.detail.surface !== 'HARD') {
              toAdd = false
            }
            break
          }
          case 'CLAY': {
            if (tour.tournament.detail.surface !== 'CLAY') {
              toAdd = false
            }
            break
          }
          case 'GRASS': {
            if (tour.tournament.detail.surface !== 'GRASS') {
              toAdd = false
            }
            break
          }
          case 'INDOOR HARD': {
            if (tour.tournament.detail.surface !== 'INDOOR HARD') {
              toAdd = false
            }
            break
          }
        }
        // add in array only if check value is true
        if(toAdd){
          tempTrade.push(t)
        }
      }
    })
    return tempTrade
  }

}
