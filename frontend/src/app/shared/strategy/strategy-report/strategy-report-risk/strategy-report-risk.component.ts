import {Component, Input, OnInit} from '@angular/core';
import {StrategyReport} from '../../../../model/report/starategyReport';
import {Utils} from "../../../../model/calculator/utils";

@Component({
  selector: 'app-strategy-report-risk',
  templateUrl: './strategy-report-risk.component.html',
})
export class StrategyReportRiskComponent implements OnInit {

  @Input() strategyReport: StrategyReport
  @Input() element: 'max' | 'open' | 'increase' | 'decrease' | 'close' | 'freeBet'

  myValue = {
    total: 0,
    count: 0,
    avgPerTrade: 0,
    max: 0,
    min: 0,
    stdv: 0,
  }

  utils = new Utils()

  constructor() { }

  ngOnInit(): void {
    switch(this.element){
      case 'max': {
        this.myValue = {
          total: this.strategyReport.trades.risk.total.total,
          count: this.strategyReport.trades.total,
          avgPerTrade: this.strategyReport.trades.risk.total.avgPerTrade,
          max: this.strategyReport.trades.risk.total.max,
          min: this.strategyReport.trades.risk.total.min,
          stdv: this.strategyReport.trades.risk.total.stdv,
        }
        break
      }
      case 'open': {
        this.myValue = {
          total: this.strategyReport.trades.risk.open.total,
          count: this.strategyReport.trades.risk.open.count,
          avgPerTrade: this.strategyReport.trades.risk.open.avgPerTrade,
          max: this.strategyReport.trades.risk.open.max,
          min: this.strategyReport.trades.risk.open.min,
          stdv: this.strategyReport.trades.risk.open.stdv,
        }
        break
      }
      case 'increase': {
        this.myValue = {
          total: this.strategyReport.trades.risk.increase.total,
          count: this.strategyReport.trades.risk.increase.count,
          avgPerTrade: this.strategyReport.trades.risk.increase.avgPerTrade,
          max: this.strategyReport.trades.risk.increase.max,
          min: this.strategyReport.trades.risk.increase.min,
          stdv: this.strategyReport.trades.risk.increase.stdv,
        }
        break
      }
      case 'decrease': {
        this.myValue = {
          total: this.strategyReport.trades.risk.decrease.total,
          count: this.strategyReport.trades.risk.decrease.count,
          avgPerTrade: this.strategyReport.trades.risk.decrease.avgPerTrade,
          max: this.strategyReport.trades.risk.decrease.max,
          min: this.strategyReport.trades.risk.decrease.min,
          stdv: this.strategyReport.trades.risk.decrease.stdv,
        }
        break
      }
      case 'close': {
        this.myValue = {
          total: this.strategyReport.trades.risk.close.total,
          count: this.strategyReport.trades.risk.close.count,
          avgPerTrade: this.strategyReport.trades.risk.close.avgPerTrade,
          max: this.strategyReport.trades.risk.close.max,
          min: this.strategyReport.trades.risk.close.min,
          stdv: this.strategyReport.trades.risk.close.stdv,
        }
        break
      }
      case 'freeBet': {
        this.myValue = {
          total: this.strategyReport.trades.risk.freeBet.total,
          count: this.strategyReport.trades.risk.freeBet.count,
          avgPerTrade: this.strategyReport.trades.risk.freeBet.avgPerTrade,
          max: this.strategyReport.trades.risk.freeBet.max,
          min: this.strategyReport.trades.risk.freeBet.min,
          stdv: this.strategyReport.trades.risk.freeBet.stdv,
        }
        break
      }
    }
  }

}
