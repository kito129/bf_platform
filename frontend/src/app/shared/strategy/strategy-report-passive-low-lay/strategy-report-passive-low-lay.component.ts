import {Component, Input, OnInit} from '@angular/core';
import {NewTrade} from '../../../model/report/new/newTrade';
import {LowLayReport} from '../../../model/report/new/lowLayReport';
import {PassiveStrategyService} from '../../../services/passive-strategy.service';

@Component({
  selector: 'app-strategy-report-passive-low-lay',
  templateUrl: './strategy-report-passive-low-lay.component.html',
})
export class StrategyReportPassiveLowLayComponent implements OnInit {

  @Input() trades: NewTrade[]
  lowLayReport: LowLayReport

  constructor(private passiveStrategyService: PassiveStrategyService) { }

  ngOnInit(): void {

    this.passiveStrategyService.setData(this.trades)
    this.lowLayReport = this.passiveStrategyService.getLowLayReport()
  }

}
