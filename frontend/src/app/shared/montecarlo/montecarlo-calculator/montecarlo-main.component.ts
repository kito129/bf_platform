import { Component, OnInit } from '@angular/core';
import {TradePlSeries} from "../../../model/calculator/montecarlo";
import {StrategyReportService} from "../../../services/strategy-report.service";
import {MontecarloService} from "../../../services/montecarlo.service";
import {MontecarloParams} from "../../../model/calculator/montecarloParams";

@Component({
  selector: 'app-montecarlo-main',
  templateUrl: './montecarlo-main.component.html',
})
export class MontecarloMainComponent implements OnInit {

  okData = false

  montecarlo: TradePlSeries[][] = []
  montecarloSeries: number[][] = []
  montecarloDDPercent: number[][] = []
  montecarloMaxDDPercent: number[] = []
  montecarloAvgDDPercent: number[] = []
  montecarloDDMonetary: number[][] = []
  montecarloMaxDDMonetary: number[] = []
  montecarloSeriesName: string[] = []

  montecarloWins: boolean[][] = []

  bug: boolean = true


  constructor(private montecarloService :MontecarloService) { }

  updateParams(event: MontecarloParams){

    this.montecarloWins = this.montecarloService.generateWin(event)
    this.bugFix()
    this.okData = true
  }

  ngOnInit(): void {
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

}
