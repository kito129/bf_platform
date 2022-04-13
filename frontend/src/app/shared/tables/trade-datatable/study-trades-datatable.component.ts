import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {DatatableComponent, ColumnMode} from '@swimlane/ngx-datatable';
import {select, Store} from '@ngrx/store';
import {TradeCalculatorService} from '../../../services/trade-calculator.service';
import {takeUntil} from 'rxjs/operators';
import * as reportActions from '../../../store/report/report.actions';
import * as reportSelectors from '../../../store/report/report.selectors';
import * as studyActions from '../../../store/study/study/study.actions';
import {NewTrade} from '../../../model/report/new/newTrade';

@Component({
  selector: 'app-study-trade-datatable',
  templateUrl: './study-trades-datatable.component.html',
})
export class StudyTradesDatatableComponent implements OnInit, OnDestroy {

  @Input() trades$: Observable<NewTrade[]>
  @Input() selectedMarketId: string
  @Input() viewSelectors: boolean
  @ViewChild(DatatableComponent) table: DatatableComponent;


  viewTrades = false
  viewStats = false

  rows = [];
  temp =[] ;
  loadingIndicator = true
  ColumnMode = ColumnMode;
  tableSize = 10


  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private readonly store: Store,
              private tradeServices: TradeCalculatorService) {
  }

  ngOnInit() {

    this.trades$
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        const trade = this.tradeServices.addCumulativeInTrade(data)
        this.rows = trade
        this.temp = [... trade]
      })
  }


  toggleExpandRow(row) {
    this.table.rowDetail.toggleExpandRow(row);
  }


  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    // filter our data
    // update the rows
    this.rows = this.temp.filter((d) => {
      return (d.trade.trade.info.marketInfo.marketName.toLowerCase().indexOf(val) !== -1 || d.trade.trade.info.marketInfo.sport.toLowerCase().indexOf(val) !== -1) || !val;
    });
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }


  createModal(event){
    if(event[1]==='create'){
      // CREATE runner note
      this.store.dispatch(reportActions.createTrade({ trade: event[0]}));
    }
  }

  updateModal(event){

    if(event[1]==='update'){
      event[0].lastUpdate = new Date().getTime()
      // UPDATE runner note
      this.store.dispatch(reportActions.updateTrade({ _id: event[0]._id, trade: event[0] }));
    }

  }

  deleteModal(event){
    if(event[1]==='delete'){
      // DELETE runner note
      this.store.dispatch(reportActions.deleteTrade({ _id: event[0] }));
    }

  }

  getStrategyName(id: string){
    return this.store.pipe(select(reportSelectors.getStrategyNameById(id)))
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  onClick(marketId, selectionId, trade){
    if(this.selectedMarketId === marketId){
      this.store.dispatch(studyActions.unsetSelectedStudyMarket())
    } else if(marketId !== this.selectedMarketId) {
      this.store.dispatch(studyActions.setSelectedStudyMarket({marketId, selectionId, marketTrade: trade}))
    }
  }

}
