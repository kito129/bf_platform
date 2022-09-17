import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ColumnMode, DatatableComponent} from '@swimlane/ngx-datatable';
import { Store} from '@ngrx/store';
import {StrategyDatatable} from '../../../../../model/report/strategyDatatable';
import * as reportActions from '../../../../../store/report/report.actions';
import {removeTradesFromSavedReport} from '../../../../../store/report/report.actions';

@Component({
  selector: 'app-strategy-datatable',
  templateUrl: './strategy-datatable.component.html',
  styles: ['/deep/ .datatable-row-even {background-color: #181818;}']
})
export class StrategyDatatableComponent implements OnInit {

  @Input() strategyDatatable: StrategyDatatable[]
  @Input() compareList: string[]
  @Input() compareStatus: boolean
  @Input() isSaved: boolean

  @Input() selectedStrategyId: string
  @Input() selectedSavedReportId: string

  @ViewChild(DatatableComponent) table: DatatableComponent;

  rows = [];
  temp =[] ;
  loadingIndicator = true
  ColumnMode = ColumnMode;
  tableSize = 30
  page = 1

  isCollapsed = false

  viewId = false

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

  deleteSavedReportModal(event){
    if(event[1]==='delete'){
      // DELETE runner note
      this.store.dispatch(reportActions.deleteSavedReport({ _id: event[0] }));
    }
  }

  clickSelectStrategy(id: string){

    if(this.selectedStrategyId === id){
      this.store.dispatch(reportActions.setSelectedStrategy({ _id: null}));
    } else {
      this.store.dispatch(reportActions.setSelectedStrategy({ _id: id}));
    }
  }

  addToCompare(id: string){
    this.store.dispatch(reportActions.setSelectedStrategy({ _id: null}));
    if(this.compareList.indexOf(id) !==-1){
      this.store.dispatch(reportActions.removeStrategyInCompare({strategyId: id}))
    } else {
      this.store.dispatch(reportActions.addStrategyInCompare({strategyId: id, first:false}))
    }
  }

  compare(){
    this.store.dispatch(reportActions.setSelectedStrategy({ _id: null}));
    this.store.dispatch(reportActions.compareStrategy())
  }

  compareAll(){
    this.store.dispatch(reportActions.resetStrategyCompare())
    const notEmpty =  this.strategyDatatable.filter( x => x.numberOfTrade)
    for (const at of notEmpty) {
      this.store.dispatch(reportActions.addStrategyInCompare({strategyId: at._id, first:false}))
    }
    this.store.dispatch(reportActions.setSelectedStrategy({ _id: null}));
    this.store.dispatch(reportActions.compareStrategy())
  }

  resetCompare(){
    this.store.dispatch(reportActions.setSelectedStrategy({ _id: null}));
    this.store.dispatch(reportActions.resetStrategyCompare())
  }

  firstToCompare($event, id: string){
    $event.preventDefault();
    if(this.compareList.indexOf(id) !==-1){
      this.store.dispatch(reportActions.removeStrategyInCompare({strategyId: id}))
      this.store.dispatch(reportActions.addStrategyInCompare({strategyId: id, first:true}))
    } else {
      this.store.dispatch(reportActions.addStrategyInCompare({strategyId: id, first:true}))
    }
  }

  // savedReport list

  clickSelectSavedReport(id: string){
    if(this.selectedSavedReportId === id){
      this.store.dispatch(reportActions.setSelectedSavedReport({ _id: null}));
    } else {
      this.store.dispatch(reportActions.setSelectedSavedReport({ _id: id}));
    }
  }

}
