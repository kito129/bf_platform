import {Component, Input, OnInit} from '@angular/core';
import {MonthTrade} from '../../../../model/study/report/comparatorTableRow';
import {Utils} from '../../../../model/utils';
import {StrategyReport} from '../../../../model/report/strategy/starategyReport';
import {Trade} from '../../../../model/report/trade/trade';
import {StrategyReportClass} from '../../../../model/report/strategyReport';

@Component({
  selector: 'app-strategy-report-month',
  templateUrl: './strategy-report-month.component.html',
})
export class StrategyReportMonthComponent implements OnInit {

  @Input() allTrades: Trade[]

  utils = new Utils()

  strategyMonth: MonthTrade[] = []
  strategyReportMonth: StrategyReport[] = []
  strategyWinners: number[][] = []
  monthPl: number[][] = []

  monthLabel = []

  height= 450

  okData = false

  constructor() { }

  ngOnInit(): void {
    this.strategyMonth = this.utils.getMonthTrades(this.allTrades)

    this.strategyMonth.forEach(month => {
      const services = new StrategyReportClass()
      if(month.trades.length){
        services.setDataNoStrategy(month.month, 10000,month.trades)
        this.strategyReportMonth.push(services.getStrategyReport())
        this.strategyWinners.push(services.getStrategyPie())
      } else {
        // empty strategy
        this.strategyReportMonth.push(services.getEmptyStrategyReport(month.month))
        this.strategyWinners.push([0,0,0])
      }
      // month label
      this.monthLabel.push(month.month)
      const tempPl = []
      for (const monthTrade of month.trades) {
        tempPl.push(monthTrade.trade.results.netProfit + (tempPl.length ? tempPl[tempPl.length-1] : 0))
      }
      this.monthPl.push(tempPl)
    })

    this.okData = true
  }

}
