import {Component, Input, OnInit} from '@angular/core';
import {MontecarloRecap, TradePlSeries} from "../../../../model/calculator/montecarlo";

@Component({
  selector: 'app-montecarlo-recap',
  templateUrl: './montecarlo-recap.component.html',
})
export class MontecarloRecapComponent implements OnInit {

  @Input() montecarlo: TradePlSeries[]
  montecarloRecap: MontecarloRecap

  constructor() { }

  ngOnInit(): void {


  }

}
