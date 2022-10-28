import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NewTrade} from '../../../model/report/new/newTrade';
import {Table} from "primeng/table";

@Component({
  selector: 'app-trade-data-grid',
  templateUrl: './trade-data-grid.component.html'
})
export class TradeDataGridComponent implements OnInit {

  @Input() trades: NewTrade[]

  @ViewChild('dt') table: Table;

  first = 0;
  cols: any[]
  rows = 15

  _selectedColumns: any[];

  constructor() {
  }

  ngOnInit() {
    this.cols = [
      { field: 'trade.info.date', header: 'Date' },
      { field: 'trade.info.marketInfo.marketName', header: 'Name' },
      { field: 'trade.results.finalScore.tennis', header: 'Result' },
      { field: 'trade.results.netProfit', header: 'Pl' },
      { field: 'trade.results.maxRisk', header: 'Risk' },
      { field: 'trade', header: 'View' }
    ]

    this._selectedColumns = this.cols;
  }

  @Input() get selectedColumns(): any[] {
    return this._selectedColumns;
  }

  set selectedColumns(val: any[]) {
    // restore original order
    this._selectedColumns = this.cols.filter(col => val.includes(col));
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
