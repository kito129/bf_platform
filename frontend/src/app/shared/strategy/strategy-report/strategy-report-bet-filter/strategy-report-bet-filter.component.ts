import {Component, Input, OnInit} from '@angular/core';
import {Trade} from '../../../../model/report/trade/trade';
import {StrategyTradeFilter} from '../../../../model/report/strategyFilter/strategyTradeFiltersInterface';

@Component({
  selector: 'app-strategy-report-bet-filter',
  templateUrl: './strategy-report-bet-filter.component.html',
})
export class StrategyReportBetFilterComponent implements OnInit {

  @Input() trades: Trade[]

  validData = false

  constructor() { }

  ngOnInit(): void {
  }

  filterEmit(event){
    this.validData = false

    if(this.trades.length){

      this.validData = true
    } else {
      this.validData = false
    }

  }

  resetEmitter(event){
    this.validData = false
  }

}
