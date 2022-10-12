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
import {number} from 'ngx-custom-validators/src/app/number/validator';


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
          || (d.trade.trade.info.note.description ? d.trade.trade.info.note.description.toLowerCase().indexOf(val) !== -1 : false)
          || (d.trade.trade.info.note.entry ? d.trade.trade.info.note.entry.toLowerCase().indexOf(val) !== -1 : false)
          || (d.trade.trade.info.note.post ? d.trade.trade.info.note.post.toLowerCase().indexOf(val) !== -1 : false)) || !val
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

  saveAsCSV(type: string) {
    const nowDate = new Date()
    const temp = []
    // sort by the longest trade number
    JSON.parse(JSON.stringify(this.rows))
      .sort((a:TradeDetail,b:TradeDetail) =>b.trade.trade.trades.length - a.trade.trade.trades.length)
      .forEach((x: TradeDetail) => {
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
            winnerAvgBackStake: x.trade.trade.selections[winnerIndex].avg.back.stake,
            // @ts-ignore
            winnerAvgBackIfWin: x.trade.trade.selections[winnerIndex].avg.back.toWin,
              // @ts-ignore
            winnerAvgLay: x.trade.trade.selections[winnerIndex].avg.lay.odds,
            // @ts-ignore
            winnerAvgLayBank: x.trade.trade.selections[winnerIndex].avg.lay.stake,
            // @ts-ignore
            winnerAvgLayLiability: x.trade.trade.selections[winnerIndex].avg.lay.liability,
              // @ts-ignore
            loserAvgBack: x.trade.trade.selections[loserIndex].avg.back.odds,
            // @ts-ignore
            loserAvgBackStake: x.trade.trade.selections[loserIndex].avg.back.stake,
            // @ts-ignore
            loserAvgBackIfWin: x.trade.trade.selections[loserIndex].avg.back.toWin,
              // @ts-ignore
            loserAvgLay: x.trade.trade.selections[loserIndex].avg.lay.odds,
            // @ts-ignore
            loserAvgBank: x.trade.trade.selections[loserIndex].avg.lay.stake,
            // @ts-ignore
            loserAvgLiability: x.trade.trade.selections[loserIndex].avg.lay.liability,
            empty: null,
            pl: x.trade.trade.results.netProfit,
            maxRisk: x.trade.trade.results.maxRisk,
            emptyy: null,
          })
        }
        // add element from bets
        this.addPropsToObj(x,temp, type)
      }
    )

    this.util.exportToCsv(`${nowDate.getMonth() + 1}_${nowDate.getDate()}_${nowDate.getFullYear()}_trades.csv`,
      JSON.parse(JSON.stringify(temp.sort((c,d) => c.date - d.date ))))
  }

  private createTradeRows(trade: TradeDetail){
    let i =0
    return trade.trade.trade.trades.map( x =>{
      i++
      const sideName = trade.trade.trade.selections[x.selectionN].runnerName
      return {
        name: sideName,
        type: x.type,
        options: x.options,
        odds: x.odds,
        stake: x.stake,
        liability: x.liability,
        ifWin: x.ifWin,
        empty: null
      }
    })
  }

  private createTradeRowsGrouped(trade: TradeDetail){
    let i =0
    const open = {
      name: '',
      type: '',
      options: '',
      odds: 0,
      stake: 0,
      liability: 0,
      ifWin:0,
      empty: null
    }
    const increase = {
      name: '',
      type: '',
      options: '',
      odds: 0,
      stake: 0,
      liability: 0,
      ifWin:0,
      empty: null
    }
    const decrease = {
      name: '',
      type: '',
      options: '',
      odds: 0,
      stake: 0,
      liability: 0,
      ifWin:0,
      empty: null
    }
    const close = {
      name: '',
      type: '',
      options: '',
      odds: 0,
      stake: 0,
      liability: 0,
      ifWin:0,
      empty: null
    }
    const freeBet = {
      name: '',
      type: '',
      options: '',
      odds: 0,
      stake: 0,
      liability: 0,
      ifWin:0,
      empty: null
    }

    trade.trade.trade.trades.map( x =>{
      i++
      const sideName = trade.trade.trade.selections[x.selectionN].runnerName
      switch (x.options){
        case ('OPEN'):{
          open.type = x.type
          open.name = sideName
          open.options = 'OPEN'
          const avgOdds = (open.odds * open.stake + x.odds*x.stake)/(open.stake+x.stake)
          open.stake += x.stake
          open.odds = avgOdds
          open.liability = x.type === 'back' ? 0 : open.stake*(open.odds-1)
          open.ifWin = x.type === 'back' ? open.stake*(open.odds-1) : open.stake
          break
        }
        case ('INCREASE MARGIN'):{
          increase.type = x.type
          increase.name = sideName
          increase.options = 'INCREASE MARGIN'
          const avgOdds = (increase.odds * increase.stake + x.odds*x.stake)/(increase.stake+x.stake)
          increase.stake += x.stake
          increase.odds = avgOdds
          increase.liability = x.type === 'back' ? 0 : open.stake*(open.odds-1)
          increase.ifWin = x.type === 'back' ? open.stake*(open.odds-1) : open.stake
          break
        }
        case ('DECREASE MARGIN'):{
          decrease.type = x.type
          decrease.name = sideName
          decrease.options = 'DECREASE MARGIN'
          const avgOdds = (decrease.odds * decrease.stake + x.odds*x.stake)/(decrease.stake+x.stake)
          decrease.stake += x.stake
          decrease.odds = avgOdds
          decrease.liability = x.type === 'back' ? 0 : open.stake*(open.odds-1)
          decrease.ifWin = x.type === 'back' ? open.stake*(open.odds-1) : open.stake
          break
        }
        case ('CLOSE'):{
          close.type = x.type
          close.name = sideName
          close.options = 'CLOSE'
          const avgOdds = (close.odds * close.stake + x.odds*x.stake)/(close.stake+x.stake)
          close.stake += x.stake
          close.odds = avgOdds
          close.liability = x.type === 'back' ? 0 : open.stake*(open.odds-1)
          close.ifWin = x.type === 'back' ? open.stake*(open.odds-1) : open.stake
          break
        }
      }
      return {
        name: sideName,
        type: x.type,
        options: x.options,
        odds: x.odds,
        stake: x.stake,
        liability: x.liability,
        ifWin: x.ifWin,
        empty: null
      }
    })
    return [open, increase, decrease, close, freeBet]
  }

  private addPropsToObj(trade: TradeDetail, arrayToAdd, type: string){
    // add element from bets
    const bets = type ==="ALL" ? this.createTradeRows(trade) : this.createTradeRowsGrouped(trade)
    for (const [key, value] of Object.entries(bets)) {
      const h = Object.getOwnPropertyNames(value)
      for (const [keyT, valueT] of Object.entries(h)) {
        arrayToAdd[arrayToAdd.length-1][`${valueT}${key}`] = value[`${valueT}`]
      }
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
