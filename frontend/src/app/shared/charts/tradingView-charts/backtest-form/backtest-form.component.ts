import {Component, Input, OnInit} from '@angular/core';
import {NewTrade} from '../../../../model/report/new/newTrade';
import {MarketBasic} from '../../../../model/market/basic/marketBasic';
import {BacktestForm} from '../../../../model/calculator/BacktestForm';

@Component({
  selector: 'app-backtest-form',
  templateUrl: './backtest-form.component.html',
})
export class BacktestFormComponent implements OnInit {

  @Input() market : MarketBasic

  backtestForm: BacktestForm

  constructor() { }

  ngOnInit(): void {
    if(this.market){
      this.backtestForm = new BacktestForm(this.market)
    }
  }

}
