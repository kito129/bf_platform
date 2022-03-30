import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {ColumnMode, DatatableComponent, SelectionType} from '@swimlane/ngx-datatable';
import {select, Store} from '@ngrx/store';
import * as reportActions from '../../../store/report/report.actions';
import {Trade} from '../../../model/report/trade';
import {TradeCalculatorService} from '../../../services/trade-calculator.service';
import * as reportSelectors from '../../../store/report/report.selectors';
import {takeUntil} from 'rxjs/operators';
import {Utils} from '../../../model/calculator/utils';
import {NewTrade} from '../../../model/report/new/newTrade';

@Component({
  selector: 'app-trade-datatable',
  templateUrl: './trade-datatable.component.html',
})
export class TradeDatatableComponent implements OnInit {

  @Input() trades$: Observable<NewTrade[]>
  @Input() showDuplicate: boolean

  @Input() pageNumber: number
  @Output() pageEmitter = new EventEmitter();

  selected: Trade[] = [];

  SelectionType = SelectionType;

  noteOnly = false

  tradeOnly = false


  utils = new Utils()

  @ViewChild(DatatableComponent) table: DatatableComponent;


  rows = [];
  temp =[] ;
  loadingIndicator = true
  ColumnMode = ColumnMode;

  columns = [
    { name: 'Date', sortable: true},
    { name: 'Name', sortable: true},
    { name: 'Strategy', sortable: true},
    { name: 'Exchange', sortable: true},
    { name: 'Note', sortable: true},
    { name: 'PL', sortable: true},
    { name: 'Stock %', sortable: true},
    { name: 'DD', sortable: true},
    { name: 'DD %', sortable: true},
    { name: 'Max Risk', sortable: true},
    { name: 'rR', sortable: true},
    { name: 'Stock', sortable: true},
    { name: 'Tolls', sortable: true},
  ];

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
        if(this.table){
          this.table.offset = this.pageNumber
        }
    })
  }


  emitPage(event){
    this.pageEmitter.emit([event])
  }



  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  noteOnlyChange() {
    this.noteOnly = !this.noteOnly
  }

  tradeOnlyChange() {
    this.tradeOnly = !this.tradeOnly
  }


  toggleExpandRow(row) {
    this.table.rowDetail.toggleExpandRow(row);
  }

  unselectAll(){
    this.selected = []
  }


  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    // filter our data
    // update the rows
    this.rows = this.temp.filter((row) => {
      return (row.trade.trade.info.marketInfo.marketName.toLowerCase().indexOf(val) !== -1 || row.trade.trade.info.marketInfo.sport.toLowerCase().indexOf(val) !== -1) || !val;
    });
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  updateNoteFilter(event) {
    const val = event.target.value.toLowerCase();
    // filter our data
    // update the rows
    this.rows = this.temp.filter((row) => {
      return (
        (row.trade.trade.info.note.description ===null ? false :row.trade.trade.info.note.description.toLowerCase().indexOf(val) !== -1)
        || (row.trade.trade.info.note.entry ===null ? false :row.trade.trade.info.note.entry.toLowerCase().indexOf(val) !== -1)
        || (row.trade.trade.info.note.exit ===null ? false :row.trade.trade.info.note.exit.toLowerCase().indexOf(val) !== -1)
        || (row.trade.trade.info.note.position  === null ? false :row.trade.trade.info.note.position.toLowerCase().indexOf(val) !== -1)
        || (row.trade.trade.info.note.mm ===null ? false :row.trade.trade.info.note.mm.toLowerCase().indexOf(val) !== -1)
        || (row.trade.trade.info.note.odds ===null ? false :row.trade.trade.info.note.odds.toLowerCase().indexOf(val) !== -1)
        || (row.trade.trade.info.note.post ===null ? false :row.trade.trade.info.note.post.toLowerCase().indexOf(val) !== -1)
        || !val)
    });
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }


  getStrategyName(id: string){
    return this.store.pipe(select(reportSelectors.getStrategyNameById(id)))
  }

  getTotal(trade: any[]){
    return this.utils.getPlTrades(trade.map(x =>x.trade).map( x=> x.trade.result.netProfit))
  }

  getRisk(trade: any[]){
    return this.utils.getPlTrades(trade.map(x =>x.trade).map( x=> x.trade.result.maxRisk))
  }
  getRR(trade: any[]){
    return this.utils.avgOfTrades(trade.map(x =>x.trade).map( x=> x.trade.result.rr))
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
