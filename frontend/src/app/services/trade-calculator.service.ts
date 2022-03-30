import { Injectable } from '@angular/core';
import {Trade, TradeForm, TradeRowDetail} from '../model/report/trade';
import {Exposition} from '../model/report/exposition';
import {TradeRowDetailComponent} from '../shared/tradeCards/trade-datatable/trade-row-detail/trade-row-detail.component';
import {NewTrade} from '../model/report/new/newTrade';

@Injectable({
  providedIn: 'root'
})
export class TradeCalculatorService {


  public allExposition: Exposition[] = []

  constructor() { }

  public expositionForEachSelection(tradeForm: TradeForm) {

    // generate the data over calculate
    this.generateExposition(tradeForm)

    // calculate exposition
    this.expositionForTrade()
    this.checkForOtherSelectionsExposition()
    this.setExpositionToForm(tradeForm)

    // reset for next value
    this.allExposition = []

  }

  public calculatePl(tradeForm: TradeForm){

    // check the selection number winner
    const winnerIndex = this.findWinner(tradeForm)
    // check for total exposition

    tradeForm.result.grossProfit = tradeForm.exposition[winnerIndex].back


    // check for commission
    if(tradeForm.result.grossProfit>0){

      // commission
      tradeForm.result.commissionPaid = tradeForm.info.exchange.commission * tradeForm.result.grossProfit
      tradeForm.result.netProfit = tradeForm.result.grossProfit - tradeForm.result.commissionPaid

    } else {
      tradeForm.result.commissionPaid =0
      tradeForm.result.netProfit = tradeForm.result.grossProfit
    }

    // update with correction
    tradeForm.result.netProfit += tradeForm.result.correctionPl
    tradeForm.result.grossProfit += tradeForm.result.correctionPl

    // RR
    // find max rr
    if(tradeForm.result.maxRisk){
      tradeForm.result.rr = tradeForm.result.netProfit/-tradeForm.result.maxRisk
    }

  }

  private findWinner(tradeForm: TradeForm){
    let winnerIndex =-1
    let i=0
    for (const selection of tradeForm.selections){
      if(selection.winner){
        winnerIndex = i
      }
      i++
    }
    return winnerIndex
  }

  private generateExposition(tradeForm: TradeForm){
    let exp =0
    while (exp<tradeForm.exposition.length){
      this.allExposition.push({
        selectionN: exp,
        trade:{
          back: tradeForm.trades.back.filter(x =>{
            if (x.selectionN === exp){
              return {
                odds: x.odds,
                stake: x.stake,
                ifWin: x.ifWin,
              }
            }
          }),
          lay: tradeForm.trades.lay.filter(x => {
            if (x.selectionN === exp) {
              return {
                odds: x.odds,
                bank: x.bank,
                liability: x.liability,
                ifWin: x.ifWin,
              }
            }
          }),
        },
        exposition: {
          back: null,
          lay: null
        }
      })
      exp++
    }

  }

  private expositionForTrade(){

    for (const exposition of this.allExposition){
      let toWinBack =0
      let toWinLay =0
      let toLoseBack =0
      let toLoseLay =0

      // check back
      for(const back of exposition.trade.back){
        toWinBack = toWinBack + back.ifWin
        toLoseBack = toLoseBack + back.stake
      }
      // check lay
      for(const lay of exposition.trade.lay){
        toWinLay = toWinLay + lay.ifWin
        toLoseLay = toLoseLay + lay.liability
      }

      exposition.exposition.back = toWinBack - toLoseLay
      exposition.exposition.lay = toWinLay - toLoseBack
    }

  }

  private checkForOtherSelectionsExposition(){

    const otherExp = []
    this.allExposition.map( x => {
      otherExp.push({
        selectionN: x.selectionN,
        back: x.exposition.back,
        lay: x.exposition.lay
      })
    })

    for (const exp of this.allExposition){
      let backSum = 0
      let laySum = 0
      for (const e of otherExp){
        if(exp.selectionN !== e.selectionN){
          backSum += e.back
          laySum += e.lay
        }
      }
      exp.exposition.back += laySum
      exp.exposition.lay += backSum
    }
  }

  private setExpositionToForm(tradeForm: TradeForm){
    let i =0
    let maxExposition = 0
    for (const exposition of tradeForm.exposition) {

      exposition.back = this.allExposition[i].exposition.back
      exposition.lay = this.allExposition[i].exposition.lay


      if(exposition.back <= maxExposition){
        maxExposition = exposition.back
      }
      if(exposition.lay <= maxExposition){
        maxExposition = exposition.lay
      }
      i++
    }

    if(maxExposition>0){
      maxExposition =0
    }

    tradeForm.result.maxRisk = maxExposition
  }

  addCumulativeInTrade(trade: NewTrade[]){

    let stockPl=0
    let dd = 0
    let up = 0
    let lastMax =-1000000000
    let lastMin =+1000000000
    return  trade.map( x =>{

      // check for stock, dd and up
      stockPl += x.trade.results.netProfit
      if(x.trade.results.netProfit<0){
        dd += x.trade.results.netProfit
        up = 0
      } else if(x.trade.results.netProfit>0) {
        dd = 0
        up += x.trade.results.netProfit
      } else {
        dd = 0
        up = 0
      }

      // last max or min
      if(stockPl> lastMax){
        lastMax = stockPl
      }

      if(stockPl< lastMin){
        lastMin = stockPl
      }

      const tradeDetail: TradeRowDetail =  {
        trade: x,
        data: {
          stockPl,
          stockPercent: (stockPl - (stockPl-x.trade.results.netProfit)) / (stockPl-x.trade.results.netProfit),
          lastMax,
          lastMin,
          dd,
          up,
          ddPercent: dd / lastMax
        }
      }
      return tradeDetail
    })
  }




}
