import {Component, Input, OnInit} from '@angular/core';
import { TradeDetail} from '../../../../model/report/trade/trade';
import {Utils} from '../../../../model/utils';

@Component({
  selector: 'app-trade-datatable-stats',
  templateUrl: './trade-datatable-stats.component.html',
})
export class TradeDatatableStatsComponent implements OnInit {

  @Input() selected: TradeDetail[]
  @Input() totalSize: number

  utils = new Utils()

  constructor() { }

  ngOnInit(): void {
  }

  getPL(trade: TradeDetail[]){
    return this.utils.sumOfArray(trade.map(x =>x.trade).map(x=> x.trade.results.netProfit))
  }

  getWinNumber(trade: TradeDetail[]){
    return trade.map(x =>x.trade).filter(y => y.trade.results.netProfit>0).length
  }

  getVoidNumber(trade: TradeDetail[]){
    return trade.map(x =>x.trade).filter(y => y.trade.results.netProfit===0).length
  }

  getLossNumber(trade: TradeDetail[]){
    return trade.map(x =>x.trade).filter(y => y.trade.results.netProfit<0).length
  }

  getAvgPL(trade: TradeDetail[]){
    return this.utils.avgOfArray(trade.map(x =>x.trade).map(x=> x.trade.results.netProfit))
  }

  getRisk(trade: TradeDetail[]){
    return this.utils.sumOfArray(trade.map(x =>x.trade).map(x=> x.trade.results.maxRisk))
  }

  getAvgRisk(trade: TradeDetail[]){
    return this.utils.avgOfArray(trade.map(x =>x.trade).map(x=> x.trade.results.maxRisk))
  }

  getRR(trade: TradeDetail[]){
    return this.utils.avgOfArray(trade.map(x =>x.trade).map(x=> x.trade.results.rr))
  }
  getAvgBack(trade: TradeDetail[]) {
    // @ts-ignore
    return Math.round(this.utils.avgOfArray((trade.filter(x => x.trade.trade.selections[1].avg.back.odds >0).map(y => y.trade.trade.selections[1].avg.back.odds)).concat(
      trade.filter( x => x.trade.trade.selections[0].avg.back.odds >0).map( y => y.trade.trade.selections[0].avg.back.odds))) *100)/100
  }

  getAvgLay(trade: TradeDetail[]){
    // @ts-ignore
    return Math.round(this.utils.avgOfArray((trade.filter(x => x.trade.trade.selections[1].avg.lay.odds >0).map(y => y.trade.trade.selections[1].avg.lay.odds)).concat(
      trade.filter( x => x.trade.trade.selections[0].avg.lay.odds >0).map( y => y.trade.trade.selections[0].avg.lay.odds))) *100)/100
  }

  getWin(trade: TradeDetail[]){
    return this.utils.sumOfArray(trade.map(x =>x.trade).filter(y => y.trade.results.netProfit>=0).map(x=> x.trade.results.netProfit))
  }

  getLoss(trade: TradeDetail[]){
    return this.utils.sumOfArray(trade.map(x =>x.trade).filter(y => y.trade.results.netProfit<0).map(x=> x.trade.results.netProfit))
  }

  getAvg(trade: TradeDetail[]){
    return this.utils.avgOfArray(trade.map(x=> x.trade.trade.results.netProfit))
  }
  getAvgWin(trade: TradeDetail[]){
    return this.utils.avgOfArray(trade.map(x =>x.trade).filter(y => y.trade.results.netProfit>=0).map(x=> x.trade.results.netProfit))
  }

  getAvgLoss(trade: TradeDetail[]){
    return this.utils.avgOfArray(trade.map(x =>x.trade).filter(y => y.trade.results.netProfit<0).map(x=> x.trade.results.netProfit))
  }

  getPf(trade: TradeDetail[]){
    return this.getWin( trade)/ -this.getLoss(trade)
  }

}
