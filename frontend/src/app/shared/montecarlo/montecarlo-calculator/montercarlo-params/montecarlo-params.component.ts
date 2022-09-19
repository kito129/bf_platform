import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MontecarloParams} from '../../../../model/calculator/montecarloParams';

@Component({
  selector: 'app-montecarlo-params',
  templateUrl: './montecarlo-params.component.html',
})
export class MontecarloParamsComponent implements OnInit {

  @Output() calculateEmitter = new EventEmitter()
  data: MontecarloParams

  size = 50
  length = 1000
  histogram = 20

  constructor() { }

  ngOnInit(): void {
    this.resetMonteParams()
  }

  resetMonteParams(){
    this.data = {
      winRate: 0.5,
      winRateStdv: 0.5,
      toWin: 100,
      toWinStdv: 1,
      toLoss: 100,
      toLossStdv: 1,
    }
  }

  calculate(){
    this.calculateEmitter.emit({
      data: this.data,
      size: this.size,
      length: this.length,
      histogram: this.histogram
    })
  }

}
