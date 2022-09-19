import {Component, Input, OnInit} from '@angular/core';
import {MonthTrade} from '../../../../model/study/study/comparatorTableRow';
import {Utils} from '../../../../model/calculator/utils';
import {StrategyReport} from '../../../../model/report/starategyReport';
import {NewTrade} from '../../../../model/report/new/newTrade';
import {StrategyReportClass} from '../../../../model/calculator/strategyReport';

@Component({
  selector: 'app-strategy-report-month',
  templateUrl: './strategy-report-month.component.html',
})
export class StrategyReportMonthComponent implements OnInit {

  @Input() allTrades: NewTrade[]

  utils = new Utils()

  strategyMonth: MonthTrade[] = []
  strategyReportMonth: StrategyReport[] = []
  strategyWinners: number[][] = []

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
    })

    this.okData = true
  }

}
