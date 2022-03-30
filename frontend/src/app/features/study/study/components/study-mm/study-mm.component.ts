import {Component, Input, OnInit} from '@angular/core';
import {Trade} from "../../../../../model/report/trade";
import {StrategyReport} from "../../../../../model/report/starategyReport";
import {MmCalculatorService} from "../../../../../services/mm-calculator.service";
import {MmResult} from "../../../../../model/calculator/mm";

@Component({
  selector: 'app-study-mm',
  templateUrl: './study-mm.component.html',
})
export class StudyMmComponent implements OnInit {

  @Input() trades: Trade[]
  @Input() strategyReport: StrategyReport

  mmResult: MmResult

  constructor(private mmCalculator: MmCalculatorService) { }

  ngOnInit(): void {

  }

  calculateEmitter(event){

    this.mmResult = this.mmCalculator.getMmResult(this.trades,event)
    console.log(this.mmResult)

  }

}
