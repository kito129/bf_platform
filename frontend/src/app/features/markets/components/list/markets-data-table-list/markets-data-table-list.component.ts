import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {MarketInfoBasic} from '../../../../../model/market/basic/marketInfoBasic';
import {IsLoading} from '../../../../../model/isLoading';
import {ColumnMode, DatatableComponent} from '@swimlane/ngx-datatable';


@Component({
  selector: 'app-markets-data-table-list',
  templateUrl: './markets-data-table-list.component.html',
})
export class MarketsDataTableListComponent implements OnInit {


  @Input()
  markets?: null | MarketInfoBasic[]

  @ViewChild(DatatableComponent) table: DatatableComponent;

  rows = [];
  temp =[] ;
  loadingIndicator = true
  ColumnMode = ColumnMode;

  columns = [
    { name: 'date', sortable: true},
    { prop: 'Hour', sortable: true},
    { prop: 'evenName', sortable: true},
    { prop: 'sport', sortable: true},
    { prop: 'market', sortable: true},
    { prop: 'winner', sortable: true},
    { prop: 'winnerLink', sortable: false},
    { prop: 'openLink', sortable: false},
  ];

  constructor() {}

  ngOnInit(): void {
    this.temp = [...this.markets]
    this.rows = this.markets

  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    // filter our data
    // update the rows
    this.rows = this.temp.filter( (d: MarketInfoBasic) => {
      return (d.marketInfo.sport.toLowerCase().indexOf(val) !== -1 || d.marketInfo.eventName.toLowerCase().indexOf(val) !== -1) || !val;
    });
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

}
