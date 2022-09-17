import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {SavedReport} from '../../../../model/report/new/savedReport';
import {Observable} from 'rxjs';
import {ColumnMode, DatatableComponent} from '@swimlane/ngx-datatable';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-saved-report-datatable',
  templateUrl: './saved-report-datatable.component.html',
  styles: ['/deep/ .datatable-row-even {background-color: #181818;}']
})
export class SavedReportDatatableComponent implements OnInit {

  @Input() savedReport: SavedReport[]

  @ViewChild(DatatableComponent) table: DatatableComponent;

  rows = [];
  temp =[] ;
  loadingIndicator = true
  ColumnMode = ColumnMode;
  tableSize = 20
  page = 1

  isCollapsed = false

  viewId = false

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
  }

}
