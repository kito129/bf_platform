import { Injectable } from '@angular/core';
import {TradeForm, TradeDetail} from '../model/report/trade';
import {Exposition} from '../model/report/exposition';
import {NewTrade} from '../model/report/new/newTrade';

@Injectable({
  providedIn: 'root'
})
export class TradeCalculatorService {


  public allExposition: Exposition[] = []

  constructor() { }

  public expositionForEachSelection(tradeForm: TradeForm) {

    // generate the data over calculate
    // this.generateExposition(tradeForm)

    // calculate exposition
    this.expositionForTrade()
    this.checkForOtherSelectionsExposition()
    this.setExpositionToForm(tradeForm)

    // reset for next value
    this.allExposition = []

  }

  public calculatePl(tradeForm: NewTrade){

    // check the selection number winner
    const winnerIndex = this.findWinner(tradeForm)
    // check for total exposition

    tradeForm.trade.results.grossProfit = 0


    // check for commission
    if(tradeForm.trade.results.grossProfit>0){

      // commission
      tradeForm.trade.results.commissionPaid = tradeForm.trade.info.exchange.commission * tradeForm.trade.results.grossProfit
      tradeForm.trade.results.netProfit = tradeForm.trade.results.grossProfit - tradeForm.trade.results.commissionPaid

    } else {
      tradeForm.trade.results.commissionPaid =0
      tradeForm.trade.results.netProfit = tradeForm.trade.results.grossProfit
    }

    // update with correction
    tradeForm.trade.results.netProfit += tradeForm.trade.results.correctionPl
    tradeForm.trade.results.grossProfit += tradeForm.trade.results.correctionPl

    // RR
    // find max rr
    if(tradeForm.trade.results.maxRisk){
      tradeForm.trade.results.rr = tradeForm.trade.results.netProfit/-tradeForm.trade.results.maxRisk
    }

  }

  private findWinner(tradeForm: NewTrade){
    let winnerIndex =-1
    let i=0
    for (const selection of tradeForm.trade.selections){
      if(selection.winner){
        winnerIndex = i
      }
      i++
    }
    return winnerIndex
  }

  /*
  private generateExposition(tradeForm: TradeForm){
    let exp =0
    while (exp<tradeForm.exposition.length){
      this.allExposition.push({
        selectionN: exp,
        trade:{
          back: tradeForm.trades.filter(x =>{
            if (x.selectionN === exp){
              return {
                odds: x.odds,
                stake: x.stake,
                ifWin: x.ifWin,
              }
            }
          }),
          lay: tradeForm.trades.filter(x => {
            if (x.selectionN === exp) {
              return {
                odds: x.odds,
                bank: x.stake,
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

   */

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

  addCumulativeInTrade(trade: NewTrade[]): TradeDetail[]{

    let stockPl=0
    let dd = 0
    let up = 0
    let lastMax =-1000000000
    let lastMin =+1000000000
    const tradeDetail = []
    trade.map( x =>{

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

      const temp: TradeDetail =  {
        trade: x,
        bsp: {
          runnerA: x.trade.selections[0].bsp,
          // @ts-ignore
          runnerB: x.trade.selections[1].bsp,
        },
        setOdds:{
          set2: {
            runnerA: x.trade.selections[0].sets.secondSet,
            // @ts-ignore
            runnerB: x.trade.selections[1].sets.secondSet,
          },
          set3: {
            runnerA: x.trade.selections[0].sets.thirdSet,
            // @ts-ignore
            runnerB: x.trade.selections[1].sets.thirdSet,
          }
        },
        avgBets: {
          back:{
            runnerA: x.trade.selections[0].avg.back.odds,
            // @ts-ignore
            runnerB: x.trade.selections[1].avg.back.odds,
          },
          lay:{
            runnerA: x.trade.selections[0].avg.lay.odds,
            // @ts-ignore
            runnerB: x.trade.selections[1].avg.lay.odds,
          }
        },
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
      tradeDetail.push(temp)
    })
    return tradeDetail
  }




}
