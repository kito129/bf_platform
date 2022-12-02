import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {CSVTrade, Trade} from '../../../model/report/trade/trade';
import {Table} from "primeng/table";
import {Utils} from "../../../model/utils";

@Component({
  selector: 'app-trade-data-grid',
  templateUrl: './trade-data-grid.component.html'
})
export class TradeDataGridComponent implements OnInit {

  @Input() trades: Trade[]
  @ViewChild('dt') table: Table;


  betsGroup: CSVTrade[]

  first = 0;
  cols = []
  frozenCols: any[];
  rows = 15

  util = new Utils()

  constructor() {
  }

  ngOnInit() {

    this.betsGroup = this.util.createGroupBetByTrades(this.trades)

    this.frozenCols = [
      { field: '', header: '#' },
      { field: 'date', header: 'date' },
      { field: 'name', header: 'Name' },
    ];

    // iterate over prop name for columns
    for (const [key,value] of Object.entries(this.betsGroup[0])) {
      if(value){
        this.cols.push({
          field: key,
          header: key
        })
      }
    }

    console.log(this.cols)
  }

  // PAGINATOR FUNCTION
  next() {
    this.first = this.first + this.rows;
  }
  prev() {
    this.first = this.first - this.rows;
  }
  reset() {
    this.first = 0;
  }
  isLastPage(): boolean {
    return this.trades ? this.first === (this.trades.length - this.rows): true;
  }
  isFirstPage(): boolean {
    return this.trades ? this.first === 0 : true;
  }

}
