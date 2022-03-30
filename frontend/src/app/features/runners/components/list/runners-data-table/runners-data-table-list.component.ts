import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Runner} from '../../../../../model/runner/runner';
import {ColumnMode, DatatableComponent} from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-runners-datatable-list',
  templateUrl: './runners-data-table.component.html',
})
export class RunnersDataTableListComponent implements OnInit {


  @Input()
  runners: null | Runner[]

  @ViewChild(DatatableComponent) table: DatatableComponent;

  rows = [];
  temp =[] ;
  loadingIndicator = true
  ColumnMode = ColumnMode;

  columns = [
    { name: 'Name',   sortable: true},
    { prop: 'Sport',  sortable: true},
    { prop: 'open',   sortable: false},
  ];

  constructor() {

  }

  ngOnInit(): void {
    this.temp = [...this.runners]
    this.rows = this.runners
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    // filter our data
    // update the rows
    this.rows = this.temp.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
}
