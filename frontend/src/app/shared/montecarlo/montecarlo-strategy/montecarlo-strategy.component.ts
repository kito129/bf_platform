import {Component, Input, OnInit} from '@angular/core';
import {MontecarloService} from "../../../services/montecarlo.service";
import {TradePlSeries} from "../../../model/calculator/montecarlo";
import {Trade} from '../../../model/report/trade/trade';

@Component({
  selector: 'app-montecarlo-strategy',
  templateUrl: './montecarlo-strategy.component.html',
})
export class MontecarloStrategyComponent implements OnInit {

  @Input() trades: Trade[]

  montecarlo: TradePlSeries[] = []
  montecarloSeries: number[][] = []
  montecarloDDPercent: number[][] = []
  montecarloMaxDDPercent: number[] = []
  montecarloAvgDDPercent: number[] = []
  montecarloDDMonetary: number[][] = []
  montecarloMaxDDMonetary: number[] = []
  montecarloSeriesName: string[] = []

  defaultNavActiveId = 1

  chartHeight = 500
  size = 100
  histogram = 15
  visibleOk = true

  constructor(private montecarloService :MontecarloService) { }

  ngOnInit(): void {
    this.generate()
  }

  generate(){
    this.montecarloService.setTrade(this.trades)
    this.montecarlo = this.montecarloService.getMontecarlo(this.size)

    this.montecarlo.forEach((monte, j) => {
      this.montecarloSeries.push( monte.series.map(x => x.stock))
      this.montecarloDDPercent.push( monte.series.map(x => x.ddPercent))
      this.montecarloMaxDDPercent.push(monte.result.dd.max.percent)
      this.montecarloAvgDDPercent.push(monte.result.dd.avg.percent)

      this.montecarloDDMonetary.push( monte.series.map(x => x.dd))
      this.montecarloMaxDDMonetary.push(monte.result.dd.max.dd)
      this.montecarloSeriesName.push(j.toString())
    })
  }

  refresh(){
    // reset value
    this.montecarlo = []
    this.montecarloSeries = []
    this.montecarloDDPercent = []
    this.montecarloMaxDDPercent = []
    this.montecarloAvgDDPercent = []
    this.montecarloSeriesName = []
    // generate trade value with trade params
    this.generate()
    this.bugFix()
  }

  bugFix(){
    this.visibleOk = false
    setTimeout(() =>
      {
        this.visibleOk = true;
      },
      100);
  }

}


