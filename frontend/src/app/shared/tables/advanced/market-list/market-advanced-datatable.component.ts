import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ColumnMode, DatatableComponent, SortType} from '@swimlane/ngx-datatable';
import {MarketInfoAdvanced} from '../../../../model/market/advanced/marketInfoAdvanced';

@Component({
  selector: 'app-markets-advanced-datatable',
  templateUrl: './markets-advanced-datatable.html',
  styles: [
    `
      .ngx-datatable.bootstrap:not(.cell-selection) .datatable-body-row:hover,
      .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-group {
        background: #323232;
      }
    `
  ]
})
export class MarketAdvancedDatatableComponent implements OnInit {

  @Input() markets: MarketInfoAdvanced[]

  @ViewChild(DatatableComponent) table: DatatableComponent;

  rows: MarketInfoAdvanced[] = []
  temp: MarketInfoAdvanced[] = []
  loadingIndicator = true
  ColumnMode = ColumnMode;

  columns = [
    { name: 'Date', sortable: true},
    { name: 'Name', sortable: true},
    { name: 'Winner', sortable: true},
    { name: 'Winner BSP', sortable: true},
    { name: 'Winner MAX', sortable: true},
    { name: 'PreMatch Volume', sortable: true},
    { name: 'PV %', sortable: true},
    { name: 'Traded Volume', sortable: true},
    { name: 'Open Winner"', sortable: false},
    { name: 'Open Market', sortable: false},
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
    this.rows = this.temp.filter( (d:MarketInfoAdvanced) =>{
      return (d.marketInfo.eventName.toLowerCase().indexOf(val) !== -1 || d.marketInfo.sport.toLowerCase().indexOf(val) !== -1 || d.marketInfo.eventName.toLowerCase().indexOf(val) !== -1) || !val;
    });
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }


}
