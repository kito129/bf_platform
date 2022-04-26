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
    const martingala =  this.getMartingalaK(params.params.fixedStake, params.params.martingala.k, params.params.martingala.maxStake, originalRR, params.t0capital)
    const percent =  this.getPercent(params.params.fixedFractional.f,originalRR,params.params.fixedFractional.maxStake,params.t0capital)
    const fixedRatio =  this.getFixedRatio(params.params.fixedRatio.ratio,params.params.fixedStake,params.params.fixedRatio.delta,originalRR,params.t0capital)
    const kelly =  this.getFixedRatio(params.params.fixedRatio.ratio,params.params.fixedStake,params.params.fixedRatio.delta,originalRR,params.t0capital)


    return {
      originalSeries: this.utils.getTradesSeries(originalPL,originalRisk,'originalSeries', params.t0capital),
      fixedStake: this.utils.getTradesSeries(this.getFixedStake(params.params.fixedStake, originalRR, params.t0capital), trade.map( x=> -params.params.fixedStake),'fixedStake', params.t0capital),
      martingalaK: this.utils.getTradesSeries(martingala[0], martingala[1],'martingalaK', params.t0capital),
      percent: this.utils.getTradesSeries(percent[0],percent[1],'fixedFractional', params.t0capital),
      fixedRatio: this.utils.getTradesSeries(fixedRatio[0],fixedRatio[1],'fixedRatio', params.t0capital),
      kelly: this.utils.getTradesSeries(kelly[0],kelly[1],'kelly', params.t0capital)
    }
  }

  getFixedStake(fixedStake: number, rr: number[], bank: number){
   const pl = []
    rr.forEach( r =>{
      if(fixedStake<=bank){
        pl.push(r*fixedStake)
      } else {
        pl.push(0)
      }
    })
    return pl
  }

  getMartingalaK(fixedStake: number, martingalaK: number, maxStake: number, rr: number[], bank: number){
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
          // check for max stake
          if(maxStake>0){
            if(stake*martingalaK<=maxStake){
              stake = stake*martingalaK
            } else {
              stake = maxStake
            }
          } else {
            stake = stake*martingalaK
          }
        }
      }
      cum = cum+p
      // if stake > bank, end bets
      if(stake>cum){
        stake = 0
      }
    })
    return [pl, risk]
  }

  getPercent(f: number, rr: number[], maxStake: number, bank: number){
    const pl: number[] = []
    const risk: number[] = []
    let stake = bank * f
    rr.forEach((r, i ) =>{
      const p = r*stake
      pl.push(p)
      risk.push(-stake)
      bank = bank + p
      if(maxStake>0){
        if(bank*f<=maxStake){
          stake = bank*f
        } else {
          stake = maxStake
        }
      } else {
        stake = bank*f
      }
    })
    return [pl,risk]
  }

  getFixedRatio(ratio: number, fixedStake: number, delta: number,rr: number[], bank: number){
    const pl: number[] = []
    const risk: number[] = []
    let stake = fixedStake
    let cum = bank
    rr.forEach((r, i ) =>{
      const p = r*stake
      pl.push(p)
      risk.push(-stake)
      cum = cum + p
      const val = (1+(Math.sqrt(1+8*((cum-bank)/delta))))
      if(cum<bank){
        stake = fixedStake
      } else {
        stake = val
      }
    })
    return [pl,risk]
  }

  getKelly(w: number, R: number, rr: number[], maxStake: number, bank: number){
    const kPercent = w -((1-w)/R)
    return this.getPercent(kPercent,rr,maxStake,bank)
  }

}
