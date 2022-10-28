import {Component, Input, OnInit} from '@angular/core';
import {Utils} from '../../../../../../model/utils';

@Component({
  selector: 'app-chart-histogram',
  templateUrl: './chart-histogram.component.html',
})
export class ChartHistogramComponent implements OnInit {

  @Input() series: number[]
  @Input() n: number
  @Input() chartHeight: number
  @Input() isPercent: boolean

  utils = new Utils()
  limit: number[][] = []

  data: number[] = []
  labels: string[] = []

  visibleOk = false

  constructor() { }

  ngOnInit(): void {

    this.limit = this.utils.divideInHistogram(this.series,this.n)
    for(let i=0;i<this.limit[1].length-1;i++){
      if(this.isPercent){
        this.labels.push(`${(this.limit[1][i]*100).toFixed(1)}% /  ${(this.limit[1][i+1]*100).toFixed(1)}%`)
      } else {
        this.labels.push(`${(this.limit[1][i]).toFixed(2)} /  ${(this.limit[1][i+1]).toFixed(2)}`)
      }

    }
    this.data = this.limit[0]

    this.visibleOk = true

  }




}
