import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dd-multi-charts',
  templateUrl: './dd-multi-charts.component.html',
})
export class DdMultiChartsComponent implements OnInit {

  @Input() ddPercent: number[][]
  @Input() ddMonetary: number[][]
  @Input() maxDDMonetary: number[]
  @Input() maxDDPercent: number[]
  @Input() avgDD: number[]
  @Input() seriesName: string[]
  @Input() chartHeight: number
  @Input() histogramResolution: number
  @Input() toolTipCharts: boolean
  @Input() wantLegend: boolean

  constructor() { }

  ngOnInit(): void {

    this.maxDDMonetary.sort((a, b) => a-b)
    this.maxDDPercent.sort((a, b) => a-b)
    this.avgDD.sort((a,b) => a-b)
  }

}
