import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {DatatableComponent, ColumnMode, SelectionType} from '@swimlane/ngx-datatable';
import {Store} from '@ngrx/store';
import {TradeCalculatorService} from '../../../services/trade-calculator.service';
import {takeUntil} from 'rxjs/operators';
import {Trade} from '../../../model/report/trade/trade';
import {Utils} from '../../../model/utils';
import {TradePlSeries} from '../../../model/calculator/montecarlo';
import * as reportActions from '../../../store/report/report.actions';
import {SavedReport} from '../../../model/report/savedReport';
import { TradeDetail} from '../../../model/report/trade/trade';
import {SwallService} from '../../../services/swall.service';
import {
  backtestRemoveTradeFromBacktest,
  backtestsAddRemovedTradeFromBacktest
} from '../../../store/report/report.actions';


@Component({
  selector: 'app-trades-datatable',
  templateUrl: './trades-datatable.component.html',
})
export class TradesDatatableComponent implements OnInit, OnDestroy {

  @Input() trades$: Observable<Trade[]>
  @Input() trades: Trade[]
  @Input() selectedMarketId: string
  @Input() title: string
  // saved
  @Input() isSaved: boolean
  @Input() savedReportId: string
  @Input() savedReport: SavedReport
  // backtest
  @Input() isBackTest: boolean
  @Input() isBackTestToAdd: boolean
  @Input() isBackTestToAddRemoved: boolean
  // TODO default only column date, name, pl, risk. No view selected trade resume and state buttons.
  // TODO to change also button delete and edit, not view edit and remove from backtest state and not from DB

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

  selectedTrades: Observable<Trade[]>

  rows = [];
  temp =[] ;
  loadingIndicator = true
  ColumnMode = ColumnMode;
  tableSize = 30

  tradeSelectedResume: TradePlSeries = null


  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private readonly store: Store,
              private tradeServices: TradeCalculatorService,
              private swall: SwallService) {
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

    // if backtest
    if(this.isBackTest){
      this.viewResult = true
    }
  }

  // -- TABLE --
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

  // -- TRADE SELECT --
  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
    this.selectedIds = this.selected.map(x=> x.trade._id)
    this.getTradeDetail()

    this.selectedTrades = of(this.selected.map(x =>x.trade))

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

  saveSavedReport(event){
    if(event[1] === 'create'){
      console.log(event[0])
      this.store.dispatch(reportActions.createSavedReport({ savedReport: event[0] }));
      this.selected = []
    }
  }

  updateSavedReport(event){
    if(event[1] === 'update'){
      console.log(event[0])
      this.store.dispatch(reportActions.updateSavedReport({ _id: event[0]._id, savedReport:event[0] }));
      this.selected = []
    }
  }

  // -- BACKTEST --
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


  removeTradesFromTradesToAdd(event){
    console.log(event)
    if(event[1] === 'remove'){
      this.store.dispatch(reportActions.backtestRemoveTradeFromTradesToAdd({ _id:event[2][0] as string}));
      this.swall.showToast('Removed Trade to add', 'success')
    }
  }

  removeTradesFromBacktest(event){
    console.log(event)
    if(event[1] === 'remove'){
      // match id to trade
      const tradeToRemove = this.rows.filter( (x:TradeDetail)=> x.trade._id === event[2][0])[0].trade
      if(tradeToRemove){
        this.store.dispatch(reportActions.backtestRemoveTradeFromBacktest({ trade: tradeToRemove}));
        this.swall.showToast('Removed Trade from Backtest', 'success')
      } else {
        this.swall.showToast('Error in Removing Trade from Backtest', 'error')
      }
    }
  }

  reAddTradesFromBacktest(trade: Trade){
    this.store.dispatch(reportActions.backtestsAddRemovedTradeFromBacktest({ trade}));
    this.swall.showToast('Trade added to Backtest', 'success')
  }

  // -- CSV
  // DEPRECATED - to csv to fix with trade version in utils
  saveAsCSV(type: string) {
    const nowDate = new Date()
    const temp = []
    // sort by the longest trade number
    const data: Trade[]  = JSON.parse(JSON.stringify(this.rows.map(x => x.trade)))
      data
      .sort((a:Trade, b:Trade) =>b.trade.trades.length - a.trade.trades.length)
      .forEach((x: Trade) => {
        const t = new Date(x.trade.info.date)
        const date = `${t.getMonth() + 1}/${t.getDate()}/${t.getFullYear()}`
        const time = `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`
        const winner = x.trade.selections.filter( y => y.winner)[0]
        const loser = x.trade.selections.filter( y => !y.winner)[0]
        const winnerIndex = (x.trade.selections[0].winner) ? 0 : 1
        const loserIndex = winnerIndex ? 0 : 1

        const marketType = (x.trade.info.marketInfo.marketName.indexOf(' - Set')!==-1) ? 'Set Winner' : 'Match Odds'

        if(winner && loser){

          temp.push({
            date,
            marketName: x.trade.info.marketInfo.marketName,
            result: this.util.getPointInStringWay(x.trade.results.finalScore.tennis),
            marketType: x.trade.info.tennisTournamentId,
            duration: time,
            winner: winner.runnerName,
            loser: loser.runnerName,
            winnerBSP: winner.bsp,
            loserBSP: loser.bsp,
            // @ts-ignore
            winnerSet2: x.trade.selections[winnerIndex].sets.secondSet,      // @ts-ignore
            loserSet2: x.trade.selections[loserIndex].sets.secondSet,      // @ts-ignore
            winnerSet3: x.trade.selections[winnerIndex].sets.thirdSet,      // @ts-ignore
            loserSet3: x.trade.selections[loserIndex].sets.thirdSet,      // @ts-ignore
            winnerAvgBack: x.trade.selections[winnerIndex].avg.back.odds,      // @ts-ignore
            winnerAvgBackStake: x.trade.selections[winnerIndex].avg.back.stake,      // @ts-ignore
            winnerAvgBackIfWin: x.trade.selections[winnerIndex].avg.back.toWin,      // @ts-ignore
            winnerAvgLay: x.trade.selections[winnerIndex].avg.lay.odds,      // @ts-ignore
            winnerAvgLayBank: x.trade.selections[winnerIndex].avg.lay.stake,      // @ts-ignore
            winnerAvgLayLiability: x.trade.selections[winnerIndex].avg.lay.liability,      // @ts-ignore
            loserAvgBack: x.trade.selections[loserIndex].avg.back.odds,      // @ts-ignore
            loserAvgBackStake: x.trade.selections[loserIndex].avg.back.stake,      // @ts-ignore
            loserAvgBackIfWin: x.trade.selections[loserIndex].avg.back.toWin,      // @ts-ignore
            loserAvgLay: x.trade.selections[loserIndex].avg.lay.odds,      // @ts-ignore
            loserAvgBank: x.trade.selections[loserIndex].avg.lay.stake,      // @ts-ignore
            loserAvgLiability: x.trade.selections[loserIndex].avg.lay.liability,      // @ts-ignore
            empty: null,
            pl: x.trade.results.grossProfit,
            maxRisk: x.trade.results.maxRisk,
          })
        }
        // add element from bets
        this.addPropsToObj(x,temp, type)
      }
    )

    this.util.exportToCsv(`${nowDate.getMonth() + 1}_${nowDate.getDate()}_${nowDate.getFullYear()}_trades.csv`,
      JSON.parse(JSON.stringify(temp.sort((c,d) => c.date - d.date ))))
  }

  private addPropsToObj(trade: Trade, arrayToAdd, type: string){
    // add element from bets
    const bets = type ==='ALL' ? this.createTradeRows(trade) :
      type ==='BFL' ? this.createTradeRowsBFLGrouped(trade) :  this.createTradeRowsGrouped(trade)
    // match the key for csv
    for (const [key, value] of Object.entries(bets)) {
      const h = Object.getOwnPropertyNames(value)
      for (const [keyT, valueT] of Object.entries(h)) {
        arrayToAdd[arrayToAdd.length-1][`${valueT}${key}`] = value[`${valueT}`]
      }
    }
  }

  private createTradeRows(trade: Trade){
    let i =0
    return trade.trade.trades.map( x =>{
      console.log(trade.trade.info.marketInfo.marketName)
      console.log(trade.trade.selections.length)
      i++
      console.log(x.selectionN)
      const sideName = trade.trade.selections[x.selectionN].runnerName
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

  private createTradeRowsGrouped(trade: Trade){
    let i =0
    const open = this.util.getEmptyCSVBetGroup()
    const increase = this.util.getEmptyCSVBetGroup()
    const decrease = this.util.getEmptyCSVBetGroup()
    const close = this.util.getEmptyCSVBetGroup()
    const freeBet = this.util.getEmptyCSVBetGroup()

    trade.trade.trades.map( x =>{
      i++
      const sideName = trade.trade.selections[x.selectionN].runnerName
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
          increase.liability = x.type === 'back' ? 0 : increase.stake*(increase.odds-1)
          increase.ifWin = x.type === 'back' ? increase.stake*(increase.odds-1) : increase.stake
          break
        }
        case ('DECREASE MARGIN'):{
          decrease.type = x.type
          decrease.name = sideName
          decrease.options = 'DECREASE MARGIN'
          const avgOdds = (decrease.odds * decrease.stake + x.odds*x.stake)/(decrease.stake+x.stake)
          decrease.stake += x.stake
          decrease.odds = avgOdds
          decrease.liability = x.type === 'back' ? 0 : decrease.stake*(decrease.odds-1)
          decrease.ifWin = x.type === 'back' ? decrease.stake*(decrease.odds-1) : decrease.stake
          break
        }
        case ('CLOSE'):{
          close.type = x.type
          close.name = sideName
          close.options = 'CLOSE'
          const avgOdds = (close.odds * close.stake + x.odds*x.stake)/(close.stake+x.stake)
          close.stake += x.stake
          close.odds = avgOdds
          close.liability = x.type === 'back' ? 0 : close.stake*(close.odds-1)
          close.ifWin = x.type === 'back' ? close.stake*(close.odds-1) : close.stake
          break
        }
        case ('FREE BET'):{
          freeBet.type = x.type
          freeBet.name = sideName
          freeBet.options = 'FREE BET'
          const avgOdds = (freeBet.odds * freeBet.stake + x.odds*x.stake)/(freeBet.stake+x.stake)
          freeBet.stake += x.stake
          freeBet.odds = avgOdds
          freeBet.liability = x.type === 'back' ? 0 : freeBet.stake*(freeBet.odds-1)
          freeBet.ifWin = x.type === 'back' ? freeBet.stake*(freeBet.odds-1) : freeBet.stake
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

  private createTradeRowsBFLGrouped(trade: Trade){
    let i =0
    const open = this.util.getEmptyCSVBetGroup()
    const increase = this.util.getEmptyCSVBetGroup()
    const decrease15 = this.util.getEmptyCSVBetGroup()
    const decrease25 = this.util.getEmptyCSVBetGroup()
    const decrease30 = this.util.getEmptyCSVBetGroup()
    const decreaseOther = this.util.getEmptyCSVBetGroup()
    const closeFs = this.util.getEmptyCSVBetGroup()
    const close = this.util.getEmptyCSVBetGroup()
    const freeBet = this.util.getEmptyCSVBetGroup()

    trade.trade.trades.map( x =>{
      i++
      const sideName = trade.trade.selections[x.selectionN].runnerName
      switch (x.options){
        case ('OPEN'):{
          open.type = x.type
          open.name = sideName
          open.options = 'OPEN'
          open.point = this.util.getPointInStringWay(x.condition.tennis.point)
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
          increase.point = this.util.getPointInStringWay(x.condition.tennis.point)
          const avgOdds = (increase.odds * increase.stake + x.odds*x.stake)/(increase.stake+x.stake)
          increase.stake += x.stake
          increase.odds = avgOdds
          increase.liability = x.type === 'back' ? 0 : increase.stake*(increase.odds-1)
          increase.ifWin = x.type === 'back' ? increase.stake*(increase.odds-1) : increase.stake
          break
        }
        case ('DECREASE MARGIN'):{
          switch (x.stake){
            case (1.5):{
              decrease15.type = x.type
              decrease15.name = sideName
              decrease15.options = 'DECREASE MARGIN'
              decrease15.point = this.util.getPointInStringWay(x.condition.tennis.point)
              const avgOdds = (decrease15.odds * decrease15.stake + x.odds*x.stake)/(decrease15.stake+x.stake)
              decrease15.stake += x.stake
              decrease15.odds = avgOdds
              decrease15.liability = x.type === 'back' ? 0 : decrease15.stake*(decrease15.odds-1)
              decrease15.ifWin = x.type === 'back' ? decrease15.stake*(decrease15.odds-1) : decrease15.stake
              break
            }
            case (2.5):{
              decrease25.type = x.type
              decrease25.name = sideName
              decrease25.options = 'DECREASE MARGIN'
              decrease25.point = this.util.getPointInStringWay(x.condition.tennis.point)
              const avgOdds = (decrease25.odds * decrease25.stake + x.odds*x.stake)/(decrease25.stake+x.stake)
              decrease25.stake += x.stake
              decrease25.odds = avgOdds
              decrease25.liability = x.type === 'back' ? 0 : decrease25.stake*(decrease25.odds-1)
              decrease25.ifWin = x.type === 'back' ? decrease25.stake*(decrease25.odds-1) : decrease25.stake
              break
            }
            case (3):{
              decrease30.type = x.type
              decrease30.name = sideName
              decrease30.options = 'DECREASE MARGIN'
              decrease30.point = this.util.getPointInStringWay(x.condition.tennis.point)
              const avgOdds = (decrease30.odds * decrease30.stake + x.odds*x.stake)/(decrease30.stake+x.stake)
              decrease30.stake += x.stake
              decrease30.odds = avgOdds
              decrease30.liability = x.type === 'back' ? 0 : decrease30.stake*(decrease30.odds-1)
              decrease30.ifWin = x.type === 'back' ? decrease30.stake*(decrease30.odds-1) : decrease30.stake
              break
            }
            default:{
              decreaseOther.type = x.type
              decreaseOther.name = sideName
              decreaseOther.options = 'DECREASE MARGIN'
              decreaseOther.point = this.util.getPointInStringWay(x.condition.tennis.point)
              const avgOdds = (decreaseOther.odds * decreaseOther.stake + x.odds*x.stake)/(decreaseOther.stake+x.stake)
              decreaseOther.stake += x.stake
              decreaseOther.odds = avgOdds
              decreaseOther.liability = x.type === 'back' ? 0 : decreaseOther.stake*(decreaseOther.odds-1)
              decreaseOther.ifWin = x.type === 'back' ? decreaseOther.stake*(decreaseOther.odds-1) : decreaseOther.stake
              break
            }
          }
          break
        }
        case ('CLOSE'):{
          if(x.condition.tennis.point.set3.runnerA>0 ||x.condition.tennis.point.set3.runnerB>0  ){
            close.type = x.type
            close.name = sideName
            close.options = 'CLOSE'
            close.point = this.util.getPointInStringWay(x.condition.tennis.point)
            const avgOdds = (close.odds * close.stake + x.odds*x.stake)/(close.stake+x.stake)
            close.stake += x.stake
            close.odds = avgOdds
            close.liability = x.type === 'back' ? 0 : close.stake*(close.odds-1)
            close.ifWin = x.type === 'back' ? close.stake*(close.odds-1) : close.stake
          } else {
            closeFs.type = x.type
            closeFs.name = sideName
            closeFs.options = 'CLOSE'
            closeFs.point = this.util.getPointInStringWay(x.condition.tennis.point)
            const avgOdds = (closeFs.odds * closeFs.stake + x.odds*x.stake)/(closeFs.stake+x.stake)
            closeFs.stake += x.stake
            closeFs.odds = avgOdds
            closeFs.liability = x.type === 'back' ? 0 : closeFs.stake*(closeFs.odds-1)
            closeFs.ifWin = x.type === 'back' ? closeFs.stake*(closeFs.odds-1) : closeFs.stake
          }
          break
        }
        case ('FREE BET'):{
          freeBet.type = x.type
          freeBet.name = sideName
          freeBet.options = 'FREE BET'
          freeBet.point = this.util.getPointInStringWay(x.condition.tennis.point)
          const avgOdds = (freeBet.odds * freeBet.stake + x.odds*x.stake)/(freeBet.stake+x.stake)
          freeBet.stake += x.stake
          freeBet.odds = avgOdds
          freeBet.liability = x.type === 'back' ? 0 : freeBet.stake*(freeBet.odds-1)
          freeBet.ifWin = x.type === 'back' ? freeBet.stake*(freeBet.odds-1) : freeBet.stake
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
    return [open, increase, decrease15, decrease25, decrease30, decreaseOther, closeFs, close, freeBet]
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
