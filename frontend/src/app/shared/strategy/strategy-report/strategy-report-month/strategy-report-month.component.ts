import {Component, Input, OnInit} from '@angular/core';
import {Trade} from '../../../../model/report/trade';
import {ComparatorTableRow, Month} from '../../../../model/study/study/comparatorTableRow';
import {Utils} from '../../../../model/calculator/utils';
import {StrategyReportService} from '../../../../services/strategy-report.service';
import {StrategyReport} from '../../../../model/report/starategyReport';
import {NewTrade} from '../../../../model/report/new/newTrade';
import {Strategy} from '../../../../model/report/strategy';

@Component({
  selector: 'app-strategy-report-month',
  templateUrl: './strategy-report-month.component.html',
})
export class StrategyReportMonthComponent implements OnInit {

  @Input() allTrades: NewTrade[]

  utils = new Utils()

  strategyMonth: Month[] = []
  strategyReportMonth: StrategyReport[] = []
  strategyWinners: number[][] = []

  okData = false

  constructor() { }

  ngOnInit(): void {
    this.strategyMonth = this.utils.getMonthTrades(this.allTrades)

    this.strategyMonth.forEach(month => {
      const services = new StrategyReportService()
      if(month.trades.length){
        services.setDataStudy(month.trades,month.month)
        this.strategyReportMonth.push(services.getStrategyReport())
        this.strategyWinners.push(services.getStrategyPie())
      } else {
        this.strategyReportMonth.push(services.getEmptyStrategyReport(month.month))
        this.strategyWinners.push([0,0,0])
      }
    })
    this.okData = true
  }

}
