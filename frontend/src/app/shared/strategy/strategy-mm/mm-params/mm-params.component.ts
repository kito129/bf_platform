import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Mm} from "../../../../model/calculator/mm";

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
        fixedStake: 10,
        martingalaK: 1.2,
        fixedFractional: 0.1,
        fixedRatio: {
            ratio: 500,
            maxLoss: 500,
            delta: 1000,
        }
      }
    }
    this.resetEmitter.emit(['reset'])
  }

}
