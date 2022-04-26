import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Mm} from '../../../../model/calculator/mm';

@Component({
  selector: 'app-mm-params',
  templateUrl: './mm-params.component.html',
})
export class MmParamsComponent implements OnInit {

  @Output() calculateEmitter = new EventEmitter()
  @Output() resetEmitter = new EventEmitter()

  constructor() { }
  mmParams: Mm

  ngOnInit(): void {
    this.resetMmParams()
  }

  calculate(){
    this.calculateEmitter.emit([this.mmParams])
  }

  resetMmParams(){
    this.mmParams = {
      t0capital: 2000,
      params:{
        fixedStake: 20,
        martingala: {
          k: 1.2,
          maxStake: 100
        },
        fixedFractional: {
          f: 0.01,
          maxStake: 100
        },
        fixedRatio: {
            ratio: 500,
            delta: 1000,
        },
        kelly: {
          kPercent: 0,
          R: 1.2,
          w: 0.6
        }
      }
    }
    this.resetEmitter.emit(['reset'])
  }

}
