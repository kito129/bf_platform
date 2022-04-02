import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ColumnMode, DatatableComponent} from '@swimlane/ngx-datatable';
import * as reportActions from '../../../../../store/report/report.actions';
import { Store} from '@ngrx/store';
import {StrategyDatatable} from '../../../../../model/report/strategyDatatable';

@Component({
  selector: 'app-strategy-datatable',
  templateUrl: './strategy-datatable.component.html',
})
export class StrategyDatatableComponent implements OnInit {

  @Input() strategyDatatable: StrategyDatatable[]
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @Input() selectedStrategyId: string

  rows = [];
  temp =[] ;
  loadingIndicator = true
  ColumnMode = ColumnMode;
  tableSize = 10
  page = 1

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    console.log(val)
    // filter our data
    // update the rows
    this.rows = this.strategyDatatable.filter((d: StrategyDatatable) => {
      return (d.name.toLowerCase().indexOf(val) !== -1 || d.sport.toLowerCase().indexOf(val) !== -1);
    });
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
    console.log(val)
  }


  createModal(event){
    if(event[1]==='create'){
      // CREATE runner note
      this.store.dispatch(reportActions.createStrategy({ strategy: event[0]}));
    }
  }

  updateModal(event){

    if(event[1]==='update'){
      event[0].lastUpdate = new Date().getTime()
      // UPDATE runner note
      this.store.dispatch(reportActions.updateStrategy({ _id: event[0]._id, strategy: event[0] }));
    }

  }

  deleteModal(event){
    if(event[1]==='delete'){
      // DELETE runner note
      this.store.dispatch(reportActions.deleteStrategy({ _id: event[0] }));
    }

  }

  clickSelectStrategy(id: string){

    if(this.selectedStrategyId === id){
      this.store.dispatch(reportActions.setSelectedStrategy({ _id: null}));
    } else {
      this.store.dispatch(reportActions.setSelectedStrategy({ _id: id}));
    }
  }
}
