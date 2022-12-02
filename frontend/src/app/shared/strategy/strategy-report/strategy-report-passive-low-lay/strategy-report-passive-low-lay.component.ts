import {Component, Input, OnInit} from '@angular/core';
import {Trade} from '../../../../model/report/trade/trade';
import {LowLayReport} from '../../../../model/report/lowLayReport';
import {PassiveStrategyService} from '../../../../services/passive-strategy.service';

@Component({
  selector: 'app-strategy-report-passive-low-lay',
  templateUrl: './strategy-report-passive-low-lay.component.html',
})
export class StrategyReportPassiveLowLayComponent implements OnInit {

  @Input() trades: Trade[]
  lowLayReport: LowLayReport

  constructor(private passiveStrategyService: PassiveStrategyService) { }

  ngOnInit(): void {

    this.passiveStrategyService.setData(this.trades)
    this.lowLayReport = this.passiveStrategyService.getLowLayReport()
  }

}
