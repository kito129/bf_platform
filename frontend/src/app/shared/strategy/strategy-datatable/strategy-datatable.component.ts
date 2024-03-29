import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ColumnMode, DatatableComponent} from '@swimlane/ngx-datatable';
import { Store} from '@ngrx/store';
import {StrategyDatatable} from '../../../model/report/strategy/strategyDatatable';
import * as reportActions from '../../../store/report/report.actions';
import {SavedReport} from '../../../model/report/savedReport';
import {BacktestInterface} from '../../../model/backtest/backtestInterface';

@Component({
  selector: 'app-strategy-datatable',
  templateUrl: './strategy-datatable.component.html',
  styles: ['/deep/ .datatable-row-even {background-color: #181818;}']
})
export class StrategyDatatableComponent implements OnInit {

  // strategy
  @Input() strategyDatatable: StrategyDatatable[]
  // compare strategy
  @Input() compareList: string[]
  @Input() compareStatus: boolean
  @Input() selectedStrategyId: string
  // backtest
  @Input() isBacktest: boolean
  @Input() selectedBacktestId: string
  // backtest compare
  @Input() compareBacktestList: string[]
  @Input() compareBacktestStatus: boolean
  // compare saved report
  @Input() isSaved: boolean
  @Input() selectedSavedReportId: string
  @Input() compareSavedReportList: string[]
  @Input() compareSavedReportStatus: boolean

  @ViewChild(DatatableComponent) table: DatatableComponent;

  rows = [];
  loadingIndicator = true
  ColumnMode = ColumnMode;
  tableSize = 10
  page = 1

  isCollapsed = false

  viewId = false

  search = ''

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.rows = JSON.parse(JSON.stringify(this.strategyDatatable))
  }

  updateFilter() {
    const val = this.search.toLowerCase();
    if(val){
      this.strategyDatatable = this.rows.filter((d: StrategyDatatable) => {
        if(!this.isSaved){
          return d.name.toLowerCase().indexOf(val) !== -1
            || d.year.toString().indexOf(val)!==-1
            || d.executor.indexOf(val)!==-1
        } else {
          return d.name.toLowerCase().indexOf(val) !== -1
            || d.year.toString().indexOf(val)!==-1
            || d.executor.indexOf(val)!==-1
            || d.savedReport.savedReport.type.toLowerCase().indexOf(val) !== -1
            || d.savedReport.savedReport.comment.toLowerCase().indexOf(val) !== -1
        }
      });
    } else {
      this.strategyDatatable = this.rows
    }
    // this.table.offset = 0;
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



  // -- STRATEGY --
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
    this.search = ''
  }

  compareAll(){
    this.store.dispatch(reportActions.resetStrategyCompare())
    const notEmpty =  this.strategyDatatable.filter( x => x.numberOfTrade)
    for (const at of notEmpty) {
      this.store.dispatch(reportActions.addStrategyInCompare({strategyId: at._id, first:false}))
    }
    this.store.dispatch(reportActions.setSelectedStrategy({ _id: null}));
    this.store.dispatch(reportActions.compareStrategy())
    this.search = ''
  }

  resetCompare(){
    this.store.dispatch(reportActions.setSelectedStrategy({ _id: null}));
    this.store.dispatch(reportActions.setSelectedSavedReport({ _id: null}));
    this.store.dispatch(reportActions.resetStrategyCompare())
    this.search = ''
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

  // -- SAVED REPORT --

  // saved report compare
  addToCompareSavedReport(id: string){
    this.store.dispatch(reportActions.setSelectedStrategy({ _id: null}));
    if(this.compareSavedReportList.indexOf(id) !==-1){
      this.store.dispatch(reportActions.removeSavedReportInCompare({savedReportId: id}))
    } else {
      this.store.dispatch(reportActions.addSavedReportInCompare({savedReportId: id, first:false}))
    }
  }

  compareSavedReport(){
    this.store.dispatch(reportActions.setSelectedStrategy({ _id: null}));
    this.store.dispatch(reportActions.compareSavedReport())
    this.search = ''
  }

  compareAllSavedReport(){
    this.store.dispatch(reportActions.resetSavedReportCompare())
    const notEmpty =  this.strategyDatatable.filter( x => x.numberOfTrade)
    for (const at of notEmpty) {
      this.store.dispatch(reportActions.addSavedReportInCompare({savedReportId: at._id, first:false}))
    }
    this.store.dispatch(reportActions.setSelectedStrategy({ _id: null}));
    this.store.dispatch(reportActions.compareSavedReport())
    this.search = ''
  }

  resetCompareSavedReport(){
    this.store.dispatch(reportActions.setSelectedStrategy({ _id: null}));
    this.store.dispatch(reportActions.setSelectedSavedReport({ _id: null}));
    this.store.dispatch(reportActions.resetSavedReportCompare())
    this.search = ''
  }

  firstToCompareSavedReport($event, id: string){
    $event.preventDefault();
    if(this.compareList.indexOf(id) !==-1){
      this.store.dispatch(reportActions.removeSavedReportInCompare({savedReportId: id}))
      this.store.dispatch(reportActions.addSavedReportInCompare({savedReportId: id, first:true}))
    } else {
      this.store.dispatch(reportActions.addSavedReportInCompare({savedReportId: id, first:true}))
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

  updateSavedReport(event){
    if(event[1]==='update'){
      this.store.dispatch(reportActions.updateSavedReport({ _id: event[0]._id, savedReport: event[0]}));
    }
    this.search = ''
  }

  duplicateSavedReport(savedReport: SavedReport){
    const temp = JSON.parse(JSON.stringify(savedReport))
    temp.created = Date.now()
    temp.updated = Date.now()
    temp.savedReport.name = temp.savedReport.name.concat(' - duplicate')
    this.store.dispatch(reportActions.createSavedReport({savedReport: temp}))
  }

  // -- BACKTEST --
  clickSelectBacktest(strategy: StrategyDatatable, id: string){
    if(this.selectedBacktestId === id){
      this.store.dispatch(reportActions.backtestUnSelected());
    } else {
      this.store.dispatch(reportActions.backtestSetSelected({ backtest: strategy.backtest, _id: id}));
    }
  }
  deleteBacktest(event){
    console.log(event)
    if(event[1]==='delete'){
      this.store.dispatch(reportActions.backtestDelete({ _id: event[0] }));
    }
  }

  // -- COMPARE BACKTEST --
  // from here
  addToCompareBacktest(id: string){
    this.store.dispatch(reportActions.backtestUnSelected());
    if(this.compareBacktestList.indexOf(id) !==-1){
      this.store.dispatch(reportActions.removeBacktestInCompare({backtestId: id}))
    } else {
      this.store.dispatch(reportActions.addBacktestInCompare({backtestId: id, first:false}))
    }
  }

  compareBacktest(){
    this.store.dispatch(reportActions.backtestUnSelected());
    this.store.dispatch(reportActions.compareBacktest())
    this.search = ''
  }

  compareAllBacktest(){
    this.store.dispatch(reportActions.backtestUnSelected());
    const notEmpty =  this.strategyDatatable.filter( x => x.numberOfTrade)
    for (const at of notEmpty) {
      this.store.dispatch(reportActions.addBacktestInCompare({backtestId: at._id, first:false}))
    }
      this.store.dispatch(reportActions.backtestUnSelected());
      this.store.dispatch(reportActions.compareBacktest())
    this.search = ''
  }

  resetCompareBacktest(){
    this.store.dispatch(reportActions.backtestUnSelected());
    this.store.dispatch(reportActions.backtestUnSelected());
    this.store.dispatch(reportActions.resetBacktestCompare())
    this.search = ''
  }

  firstToCompareBacktest($event, id: string){
    $event.preventDefault();
    if(this.compareBacktestList.indexOf(id) !==-1){
      this.store.dispatch(reportActions.removeBacktestInCompare({backtestId: id}))
      this.store.dispatch(reportActions.addBacktestInCompare({backtestId: id, first:true}))
    } else {
     //  this.store.dispatch(reportActions.addSavedReportInCompare({savedReportId: id, first:true}))
    }
  }
}
