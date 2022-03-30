import { Injectable } from '@angular/core';
import {Mm, MmResult} from "../model/calculator/mm";
import {Trade} from "../model/report/trade";
import {Utils} from "../model/calculator/utils";

@Injectable({
  providedIn: 'root'
})
export class MmCalculatorService {

  utils = new Utils()

  constructor() { }

  getMmResult(trade: Trade[], params: Mm): MmResult{

    let originalPL = trade.map( x=>x.trade.result.netProfit)
    let originalStock = this.utils.getStock(trade.map( x=>x.trade.result.netProfit))

    let result: MmResult = {
      fixedStake: this.utils.getTradesSeries(originalPL,'fixedStake'),
      martingalaK: this.utils.getTradesSeries(originalPL,'martingalaK'),
      antimartingalaK: this.utils.getTradesSeries(originalPL,'antimartingalaK'),
      fixedFractional: this.utils.getTradesSeries(originalPL,'fixedFractional'),
      fixedRatio: this.utils.getTradesSeries(originalPL,'fixedRatio'),
    }

    return result
  }

  getFixedStake(){
    let pl: number[] = []
    let risk: number[] = []

    return [pl,risk]
  }

  getMartingalaK(){
    let pl: number[] = []
    let risk: number[] = []

    return [pl,risk]
  }

  getAntimartingalaK(){
    let pl: number[] = []
    let risk: number[] = []

    return [pl,risk]
  }

  getFixedFractional(){
    let pl: number[] = []
    let risk: number[] = []

    return [pl,risk]
  }

  getFxedRatio(){
    let pl: number[] = []
    let risk: number[] = []

    return [pl,risk]
  }

}
