import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-montecarlo-charts',
  templateUrl: './montecarlo-charts.component.html',
})
export class MontecarloChartsComponent implements OnInit {

  @Input() win: boolean[][]

  constructor() { }

  ngOnInit(): void {
  }

}
