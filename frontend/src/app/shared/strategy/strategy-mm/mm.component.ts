import {Component, Input, OnInit} from '@angular/core';
import {StrategyReport} from '../../../model/report/starategyReport';
import {MmCalculatorService} from '../../../services/mm-calculator.service';
import {MmResult} from '../../../model/calculator/mm';
import {NewTrade} from '../../../model/report/new/newTrade';
import {TradePlSeries} from '../../../model/calculator/montecarlo';

@Component({
  selector: 'app-mm',
  templateUrl: './mm.component.html',
})
export class MmComponent implements OnInit {

  @Input() trades: NewTrade[]
  @Input() strategyReport: StrategyReport

  defaultHeight = 800

  mmResult: MmResult
  // to reset
  seriesName = []
  pl = []
  stock = []
  dd = []
  ddPercent = []
  risk = []
  riskPercent = []

  validData = false
  bug = false

  constructor(private mmCalculator: MmCalculatorService) { }

  ngOnInit(): void {

  }

  calculateEmitter(event) {
    this.validData = false
    // empty prev calculation
    this.seriesName = []
    this.pl = []
    this.stock = []
    this.dd = []
    this.ddPercent = []
    this.risk = []
    this.riskPercent = []

    this.mmResult = this.mmCalculator.getMmResult(this.trades, event[0])

    let i = 0
    // tslint:disable-next-line:forin
    for (const serie in this.mmResult) {
        const s: TradePlSeries = this.mmResult[serie]
        this.seriesName.push(serie)
        // data
        this.stock.push(s.series.map(x => x.stock))
        this.dd.push(s.series.map(x => x.dd))
        this.ddPercent.push(s.series.map(x => x.ddPercent))
        this.risk.push(s.series.map(x => x.risk))
        this.riskPercent.push(s.series.map(x => x.risk/x.stock))
        this.pl.push(s.series.map(x => x.pl))
      i++
    }

    this.validData = true
    this.bugFix()
  }

  // temp to fix odds bug
  bugFix(){
    this.bug = false
    setTimeout(() =>
      {
        this.bug = true
      },
      100);
  }


  resetEmitter(event){
    this.validData = false
  }

}
