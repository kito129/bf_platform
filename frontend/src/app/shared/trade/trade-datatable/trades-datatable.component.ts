import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {DatatableComponent, ColumnMode, SelectionType} from '@swimlane/ngx-datatable';
import {Store} from '@ngrx/store';
import {TradeCalculatorService} from '../../../services/trade-calculator.service';
import {takeUntil} from 'rxjs/operators';
import * as reportActions from '../../../store/report/report.actions';
import {NewTrade} from '../../../model/report/new/newTrade';
import {TradeDetail} from '../../../model/report/trade';
import {Utils} from '../../../model/calculator/utils';
import {TradePlSeries} from '../../../model/calculator/montecarlo';

@Component({
  selector: 'app-trades-datatable',
  templateUrl: './trades-datatable.component.html',
})
export class TradesDatatableComponent implements OnInit, OnDestroy {

  @Input() trades$: Observable<NewTrade[]>
  @Input() trades: NewTrade[]
  @Input() selectedMarketId: string
  @Input() viewSelectors: boolean
  @ViewChild(DatatableComponent) table: DatatableComponent;

  utils = new Utils()

  selected: TradeDetail[] = [];

  SelectionType = SelectionType;

  search = ''

  viewTrades = false
  viewStats = false

  rows = [];
  temp =[] ;
  loadingIndicator = true
  ColumnMode = ColumnMode;
  tableSize = 15

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

  // click selection
  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);

    this.getTradeDetail()
  }

  getTradeDetail(){
    if(this.selected.length){
      this.tradeSelectedResume =  this.utils.getTradesSeries(this.selected.map( x=> x.trade.trade.results.netProfit),
        this.selected.map( x=> x.trade.trade.results.maxRisk),
        'Selected',
        this.utils.getSumOfArrayNumber(this.selected.map( x=> x.trade.trade.results.maxRisk)))
    } else {
      this.tradeSelectedResume = null
    }

  }

  getPL(trade: TradeDetail[]){
    return this.utils.getSumOfArrayNumber(trade.map(x =>x.trade).map( x=> x.trade.results.netProfit))
  }

  getWinNumber(trade: TradeDetail[]){
    return trade.map(x =>x.trade).filter(y => y.trade.results.netProfit>0).length
  }

  getVoidNumber(trade: TradeDetail[]){
    return trade.map(x =>x.trade).filter(y => y.trade.results.netProfit===0).length
  }

  getLossNumber(trade: TradeDetail[]){
    return trade.map(x =>x.trade).filter(y => y.trade.results.netProfit<0).length
  }

  getAvgPL(trade: TradeDetail[]){
    return this.utils.avgOfArrayNumber(trade.map(x =>x.trade).map( x=> x.trade.results.netProfit))
  }

  getRisk(trade: TradeDetail[]){
    return this.utils.getSumOfArrayNumber(trade.map(x =>x.trade).map( x=> x.trade.results.maxRisk))
  }

  getAvgRisk(trade: TradeDetail[]){
    return this.utils.avgOfArrayNumber(trade.map(x =>x.trade).map( x=> x.trade.results.maxRisk))
  }

  getRR(trade: TradeDetail[]){
    return this.utils.avgOfArrayNumber(trade.map(x =>x.trade).map( x=> x.trade.results.rr))
  }
  getAvgBack(trade: TradeDetail[]) {
   // @ts-ignore
    return Math.round(this.utils.avgOfArrayNumber((trade.filter( x => x.trade.trade.selections[1].avg.back.odds >0).map( y => y.trade.trade.selections[1].avg.back.odds)).concat(
     trade.filter( x => x.trade.trade.selections[0].avg.back.odds >0).map( y => y.trade.trade.selections[0].avg.back.odds))) *100)/100
  }

  getAvgLay(trade: TradeDetail[]){
    // @ts-ignore
    return Math.round(this.utils.avgOfArrayNumber((trade.filter( x => x.trade.trade.selections[1].avg.lay.odds >0).map( y => y.trade.trade.selections[1].avg.lay.odds)).concat(
      trade.filter( x => x.trade.trade.selections[0].avg.lay.odds >0).map( y => y.trade.trade.selections[0].avg.lay.odds))) *100)/100
  }

  getWin(trade: TradeDetail[]){
    return this.utils.getSumOfArrayNumber(trade.map(x =>x.trade).filter(y => y.trade.results.netProfit>=0).map( x=> x.trade.results.netProfit))
  }

  getLoss(trade: TradeDetail[]){
    return this.utils.getSumOfArrayNumber(trade.map(x =>x.trade).filter(y => y.trade.results.netProfit<0).map( x=> x.trade.results.netProfit))
  }

  getAvgWin(trade: TradeDetail[]){
    return this.utils.avgOfArrayNumber(trade.map(x =>x.trade).filter(y => y.trade.results.netProfit>=0).map( x=> x.trade.results.netProfit))
  }

  getAvgLoss(trade: TradeDetail[]){
    return this.utils.avgOfArrayNumber(trade.map(x =>x.trade).filter(y => y.trade.results.netProfit<0).map( x=> x.trade.results.netProfit))
  }

  getPf(trade: TradeDetail[]){
    return this.getWin( trade)/ -this.getLoss(trade)
  }

  unselectAll(){
    this.selected = []
    this.tradeSelectedResume = null
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
