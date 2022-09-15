import {Component, Input, OnInit} from '@angular/core';
import {StrategyReport, StrategyResume} from '../../../model/report/starategyReport';

@Component({
  selector: 'app-strategy-compare-charts',
  templateUrl: './strategy-compare-charts.component.html',
})
export class StrategyCompareChartsComponent implements OnInit {

  @Input() strategyReports: StrategyReport[]
  @Input() height: number
  @Input() label: string[] = []

  pl: number[][] = []
  tradeNumber: number[][] = []
  win: number[][] = []
  profitLoss: number[][] = []
  pf: number[][] = []
  maxDd: number[][] = []
  maxDDPercent: number[][] = []
  avgProfitLoss: number[][] = []
  expectedValue: number[][] = []

  constructor() { }

  ngOnInit(): void {
    // generate month values for chart
    this.pl.push(this.strategyReports.map(x => x.cash.pl))
    this.win.push(this.strategyReports.map(x => Math.round(Math.abs(x.trades.detail.profit.count / x.trades.total)*100)/100))
    this.tradeNumber.push(this.strategyReports.map(x => x.trades.total))
    this.profitLoss.push(this.strategyReports.map(x => x.trades.detail.profit.grossCash))
    this.profitLoss.push(this.strategyReports.map(x => x.trades.detail.loss.grossCash))
    this.pf.push(this.strategyReports.map(x => Math.round(Math.abs(x.trades.detail.profit.grossCash / x.trades.detail.loss.grossCash)*100)/100))
    this.maxDd.push(this.strategyReports.map(x => x.trades.dd.max.dd))
    this.maxDDPercent.push(this.strategyReports.map(x => x.trades.dd.max.percent))
    this.avgProfitLoss.push(this.strategyReports.map(x => x.trades.detail.profit.averageCash))
    this.avgProfitLoss.push(this.strategyReports.map(x => x.trades.detail.loss.averageCash))
    this.expectedValue.push(this.strategyReports.map(x => Math.round(((x.trades.detail.profit.averageCash * (x.trades.detail.profit.count / x.trades.total)) +
      (x.trades.detail.loss.averageCash * (x.trades.detail.loss.count / x.trades.total)))*100)/100))
  }

}
