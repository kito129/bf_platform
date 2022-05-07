import {Component, Input, OnInit} from '@angular/core';
import {NewTrade} from '../../../../model/report/new/newTrade';
import {StrategyFilterBsp, StrategyFilterBspClass} from '../../../../model/report/strategyFilter/strategyFilterBsp';
import {Utils} from '../../../../model/calculator/utils';
import {CompareStrategy} from '../../../../model/report/new/compareStrategy';

@Component({
  selector: 'app-strategy-report-bspfilter',
  templateUrl: './strategy-report-bspfilter.component.html',
})
export class StrategyReportBSPFilterComponent implements OnInit {

  @Input() trades: NewTrade[]

  utils = new Utils()

  filterLow: StrategyFilterBsp
  filterMid: StrategyFilterBsp
  filterHigh: StrategyFilterBsp

  stock: number[][] = []

  compare:CompareStrategy[] = []

  validData = false

  constructor() { }

  ngOnInit(): void {
    if(this.trades.length){
      this.filterLow = new StrategyFilterBspClass('low', 1.01,1.2,this.trades)
      this.filterMid = new StrategyFilterBspClass('mid', 1.21,1.60,this.trades)
      this.filterHigh = new StrategyFilterBspClass('high', 1.61,2,this.trades)
      this.stock.push(this.utils.getStock(this.filterLow.trades.map(x => x.trade.results.netProfit),0))
      this.stock.push(this.utils.getStock(this.filterMid.trades.map(x => x.trade.results.netProfit),0))
      this.stock.push(this.utils.getStock(this.filterHigh.trades.map(x => x.trade.results.netProfit),0))
      this.validData = true

      this.compare.push({
        strategy: this.generateStrategy('low',2000),
        trades: this.filterLow.trades
      })
      this.compare.push({
        strategy: this.generateStrategy('mid',2000),
        trades: this.filterMid.trades
      })
      this.compare.push({
        strategy: this.generateStrategy('high',2000),
        trades: this.filterHigh.trades
      })



    } else {
      this.validData = false
    }
  }


  private generateStrategy(name: string, bank: number ){
    return {
      _id: '',
      created: 1,
      lastUpdate: 1,
      strategy: {
        info: {
          name,
          sport: 'TENNIS',
          year: 2022,
          bank,
          executor: '',
          moneyManagement: '',
          stake: 20,
          typeOfStake: '',
          detail: {
            description: '',
            entryDescription: '',
            exitDescription: '',
            mmDescription: '',
          }
        }
      }
    }
  }

}
