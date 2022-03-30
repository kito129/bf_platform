import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Mm} from "../../../../../../model/calculator/mm";

@Component({
  selector: 'app-study-mm-params',
  templateUrl: './study-mm-params.component.html',
})
export class StudyMmParamsComponent implements OnInit {

  @Output() calculateEmitter = new EventEmitter

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
      t0capital: 10000,
      params:{
        fixedStake: 100,
        martingalaK: 2,
        antimartingalaK: 0.5,
        fixedFractional: 0.1,
        fixedRatio: {
            ratio: 500,
            maxLoss: 500,
            delta: 1000,
        }
      }
    }
  }

}
