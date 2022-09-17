import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {DatatableComponent, ColumnMode, SelectionType} from '@swimlane/ngx-datatable';
import {Store} from '@ngrx/store';
import {TradeCalculatorService} from '../../../services/trade-calculator.service';
import {takeUntil} from 'rxjs/operators';
import {NewTrade} from '../../../model/report/new/newTrade';
import {TradeDetail} from '../../../model/report/trade';
import {Utils} from '../../../model/calculator/utils';
import {TradePlSeries} from '../../../model/calculator/montecarlo';
import * as reportActions from '../../../store/report/report.actions';


@Component({
  selector: 'app-trades-datatable',
  templateUrl: './trades-datatable.component.html',
})
export class TradesDatatableComponent implements OnInit, OnDestroy {

  @Input() trades$: Observable<NewTrade[]>
  @Input() trades: NewTrade[]
  @Input() selectedMarketId: string
  @Input() viewSelectors: boolean
  @Input() title: string

  @ViewChild(DatatableComponent) table: DatatableComponent;
  SelectionType = SelectionType;

  utils = new Utils()
  selected: TradeDetail[] = [];
  search = ''
  bug=false

  viewTrades = false
  viewResult = true
  viewOdds = true
  viewStatsService = false
  viewStatsSet = false
  viewStatsLeaderboard = false

  viewSelectedReport = false
  selectedTrades: Observable<NewTrade[]>

  rows = [];
  temp =[] ;
  loadingIndicator = true
  ColumnMode = ColumnMode;
  tableSize = 30

  tradeSelectedResume: TradePlSeries = null


  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private readonly store: Store,
              private tradeServices: TradeCalculatorService) {
  }

  ngOnInit() {

    if(this.trades){
      const trade = this.tradeServices.addCumulativeInTrade(this.trades)
      this.rows = trade
      this.temp = trade
      this.updateFilter()
    } else {
    this.trades$
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        const trade = this.tradeServices.addCumulativeInTrade(data)
        this.rows = trade
        this.temp = trade
        this.updateFilter()
      })
    }
  }


  updateFilter() {
    const val = this.search.toLowerCase();
    if(val){
      this.rows = this.temp.filter((d: TradeDetail) => {
        return (d.trade.trade.info.marketInfo.marketName.toLowerCase().indexOf(val) !== -1) || !val;
      });
      this.table.offset = 0;
    } else {
      this.rows = this.temp
    }
  }


  // click selection
  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
    this.getTradeDetail()

    this.selectedTrades = of(this.selected.map(x =>x.trade))

  }

  getTradeDetail(){
    if(this.selected.length){
      this.tradeSelectedResume =  this.utils.getTradesSeries(this.selected.map( x=> x.trade.trade.results.netProfit),
        this.selected.map( x=> x.trade.trade.results.maxRisk),
        'Selected',
        this.utils.sumOfArray(this.selected.map(x=> x.trade.trade.results.maxRisk)))
    } else {
      this.tradeSelectedResume = null
    }

  }

  unselectAll(){
    this.selected = []
    this.tradeSelectedResume = null
    this.viewSelectedReport = false

  }

  selectAll(){
    this.selected = this.rows
  }

  generateReport(){
    this.viewSelectedReport = true
    this.bugFix()
  }

  deleteMany(event){
    if(event[1]==='delete'){
      // DELETE many trades
      this.store.dispatch(reportActions.deleteManyTrades({ _ids: event[0] }));
    }
  }

  saveReport(event){
    if(event[1] === 'create'){
      console.log(event[0])
      this.store.dispatch(reportActions.createSavedReport({ savedReport: event[0] }));
    }
  }

  // temp to fix odds bug
  bugFix(){
    this.bug = false
    setTimeout(() =>
      {
        this.bug = true
      },
      500);
  }


  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
