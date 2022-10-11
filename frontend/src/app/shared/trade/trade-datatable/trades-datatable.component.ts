import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {DatatableComponent, ColumnMode, SelectionType} from '@swimlane/ngx-datatable';
import {Store} from '@ngrx/store';
import {TradeCalculatorService} from '../../../services/trade-calculator.service';
import {takeUntil} from 'rxjs/operators';
import {NewTrade, Trades} from '../../../model/report/new/newTrade';
import {TradeDetail} from '../../../model/report/trade';
import {Utils} from '../../../model/calculator/utils';
import {TradePlSeries} from '../../../model/calculator/montecarlo';
import * as reportActions from '../../../store/report/report.actions';
import {SavedReport} from '../../../model/report/new/savedReport';
import {number} from "ngx-custom-validators/src/app/number/validator";


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
  @Input() isSaved: boolean
  @Input() savedReportId: string
  @Input() savedReport: SavedReport

  @ViewChild(DatatableComponent) table: DatatableComponent;
  SelectionType = SelectionType;

  util = new Utils()
  selected: TradeDetail[] = [];
  selectedIds: string[] = [];
  search = ''
  bug=false

  viewTrades = false
  viewResult = true
  viewOdds = false
  viewSetOdds = false
  viewStatsService = false
  viewStatsSet = false
  viewStatsLeaderboard = false

  viewNotes = false

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
        return (d.trade.trade.info.marketInfo.marketName.toLowerCase().indexOf(val) !== -1
          || (d.trade.trade.info.note.description ? d.trade.trade.info.note.description.toLowerCase().indexOf(val) !== -1 : false)) || !val;
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
    this.selectedIds = this.selected.map(x=> x.trade._id)
    this.getTradeDetail()

    this.selectedTrades = of(this.selected.map(x =>x.trade))

  }

  getTradeDetail(){
    if(this.selected.length){
      this.tradeSelectedResume =  this.util.getTradesSeries(this.selected.map(x=> x.trade.trade.results.netProfit),
        this.selected.map( x=> x.trade.trade.results.maxRisk),
        'Selected',
        this.util.sumOfArray(this.selected.map(x=> x.trade.trade.results.maxRisk)))
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
    if(event[1]==='delete') {
      // DELETE many trades
      this.store.dispatch(reportActions.deleteManyTrades({_ids: event[2]}));
      this.selected = []
    }
  }

  saveReport(event){
    if(event[1] === 'create'){
      console.log(event[0])
      this.store.dispatch(reportActions.createSavedReport({ savedReport: event[0] }));
      this.selected = []
    }
  }

  updateReport(event){
    if(event[1] === 'update'){
      console.log(event[0])
      this.store.dispatch(reportActions.updateSavedReport({ _id: event[0]._id, savedReport:event[0] }));
      this.selected = []
    }
  }

  removeTradesFromSavedReportModal(event){
    if(event[1] === 'remove'){
      const temp = []
      for (const tradeId of this.savedReport.savedReport.tradesIds) {
        if(!event[2].includes(tradeId)){
          temp.push(tradeId)
        }
      }
      const copy = JSON.parse(JSON.stringify(this.savedReport))
      copy.savedReport.tradesIds = temp
      copy.updated = Date.now()
      this.store.dispatch(reportActions.updateSavedReport({ savedReport: copy, _id: this.savedReportId}));
    }
  }

  saveAsCSV() {
    const nowDate = new Date()
    const temp = []
    this.rows.forEach((x: TradeDetail) => {
      const t = new Date(x.trade.trade.info.date)
      const date = `${t.getMonth() + 1}/${t.getDate()}/${t.getFullYear()}`
      const winner = x.trade.trade.selections.filter( y => y.winner)[0]
      const loser = x.trade.trade.selections.filter( y => !y.winner)[0]
      const winnerIndex = (x.trade.trade.selections[0].winner) ? 0 : 1
      const loserIndex = winnerIndex ? 0 : 1

      const marketType = (x.trade.trade.info.marketInfo.marketName.indexOf(' - Set')!==-1) ? 'Set Winner' : 'Match Odds'

      if(winner && loser){
        temp.push({
          date,
          marketName: x.trade.trade.info.marketInfo.marketName,
          marketType,
          duration: 0,
          winner: winner.runnerName,
          loser: loser.runnerName,
          winnerBSP: winner.bsp,
          loserBSP: loser.bsp,
            // @ts-ignore
          winnerSet2: x.trade.trade.selections[winnerIndex].sets.secondSet,
            // @ts-ignore
          loserSet2: x.trade.trade.selections[loserIndex].sets.secondSet,
            // @ts-ignore
          winnerSet3: x.trade.trade.selections[winnerIndex].sets.thirdSet,
            // @ts-ignore
          loserSet3: x.trade.trade.selections[loserIndex].sets.thirdSet,
            // @ts-ignore
          winnerAvgBack: x.trade.trade.selections[winnerIndex].avg.back.odds,
            // @ts-ignore
          winnerAvgLay: x.trade.trade.selections[winnerIndex].avg.lay.odds,
            // @ts-ignore
          loserAvgBack: x.trade.trade.selections[loserIndex].avg.back.odds,
            // @ts-ignore
          loserAvgLay: x.trade.trade.selections[loserIndex].avg.lay.odds,
          empty: null,
        })
      }

      const bets =this.createTradeRows(x)
      for (const [key, value] of Object.entries(bets)) {
        const h = Object.getOwnPropertyNames(value)
        for (const [keyT, valueT] of Object.entries(h)) {
          temp[temp.length-1][`${valueT}${key}`] = value[`${valueT}`]
        }
      }
    })

    console.log(temp)
    this.util.exportToCsv(`${nowDate.getMonth() + 1}_${nowDate.getDate()}_${nowDate.getFullYear()}_trades.csv`,
      JSON.parse(JSON.stringify(temp)))
  }

  private createTradeRows(trade: TradeDetail){
    let i =0
    return trade.trade.trade.trades.map( x =>{
      i++
      return {
        n: i,
        type: x.type,
        side: x.selectionN,
        options: x.options,
        odds: x.odds,
        stake: x.stake,
        liability: x.liability,
        ifWin: x.ifWin,
        empty: null
      }
    })
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
