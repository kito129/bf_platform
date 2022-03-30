import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {TradePlSeries} from "../../../../model/calculator/montecarlo";
import {DatatableComponent, ColumnMode} from "@swimlane/ngx-datatable";

@Component({
  selector: 'app-montecarlo-compare-table',
  templateUrl: './montecarlo-compare-table.component.html',
})
export class MontecarloCompareTableComponent implements OnInit {


  @Input() montecarlo: TradePlSeries[]

  @ViewChild(DatatableComponent) table: DatatableComponent;

  rows = [];
  temp =[] ;
  ColumnMode = ColumnMode;

  // width
  colNumberWidth: 25
  colNumberLargeWidth: 70
  colBarWidth: 100

  constructor() { }

  ngOnInit(): void {
    // set data to table
    this.temp = [...this.montecarlo]
    this.rows = this.montecarlo
  }

}
