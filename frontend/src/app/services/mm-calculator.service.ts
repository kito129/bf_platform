import { Injectable } from '@angular/core';
import {Mm, MmResult} from '../model/calculator/mm';
import {Trade} from '../model/report/trade';
import {Utils} from '../model/calculator/utils';
import {NewTrade} from '../model/report/new/newTrade';

@Injectable({
  providedIn: 'root'
})
export class MmCalculatorService {

  utils = new Utils()

  constructor() { }

  getMmResult(trade: NewTrade[], params: Mm): MmResult{

    const originalPL = trade.map( x=>x.trade.results.netProfit)
    const originalRR = trade.map( x=>x.trade.results.rr)
    const originalRisk = trade.map( x=> -Math.abs(x.trade.results.maxRisk))
    const maringalaK =  this.getMartingalaK(params.params.fixedStake, params.params.martingalaK, originalRR, params.t0capital)

    return {
      originalSeries: this.utils.getTradesSeries(originalPL,originalRisk,'originalSeries', params.t0capital),
      fixedStake: this.utils.getTradesSeries(this.getFixedStake(params.params.fixedStake, originalRR), trade.map( x=> -params.params.fixedStake),'fixedStake', params.t0capital),
      martingalaK: this.utils.getTradesSeries(maringalaK[0], maringalaK[1],'martingalaK', params.t0capital),
      fixedFractional: this.utils.getTradesSeries(originalPL,originalRisk,'fixedFractional', params.t0capital),
      fixedRatio: this.utils.getTradesSeries(originalPL,originalRisk,'fixedRatio', params.t0capital),
    }
  }

  getFixedStake(fixedStake: number, rr: number[]){
    return rr.map( x => x*fixedStake)
  }

  getMartingalaK(fixedStake: number, martingalaK: number, rr: number[], bank: number){
    const pl: number[] = []
    const risk: number[] = []

    let stake = fixedStake
    let cum = bank
    rr.forEach((r, i ) =>{
      const p = stake*r
      if(r===0){
        pl.push(0)
        risk.push(-stake)
        stake = fixedStake
      } else {
        if(r>=0){
          pl.push(p)
          risk.push(-stake)
          stake = fixedStake
        } else {
          pl.push(p)
          risk.push(-stake)
          stake = stake*martingalaK
        }
      }
      cum = cum+p
      // if stake > end bank
      if(stake>cum){
        stake = 0
      }

    })

    return [pl, risk]
  }

  getFixedFractional(){
    const pl: number[] = []
    const risk: number[] = []

    return [pl,risk]
  }

  getFixedRatio(){
    const pl: number[] = []
    const risk: number[] = []

    return [pl,risk]
  }

}
