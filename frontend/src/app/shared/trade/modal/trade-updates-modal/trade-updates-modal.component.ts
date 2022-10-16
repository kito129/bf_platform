import {Component, Input, OnInit, Output} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {EventEmitter} from '@angular/core';
import {Trade} from '../../../../model/report/trade';
import {TradeCalculatorService} from '../../../../services/trade-calculator.service';
import {NewTrade, Trades} from '../../../../model/report/new/newTrade';
@Component({
  selector: 'app-trade-updates-modal',
  templateUrl: './trade-updates-modal.component.html',
})
export class TradeUpdatesModalComponent implements OnInit {

  @Input() tradeInput: NewTrade
  @Output() tradeUpdateEmitter = new EventEmitter()
  public tradeOutput: NewTrade

  public executor = ['BAGNA', 'KEVIN', 'KITO', 'BAGNA KEVIN', 'BAGNA KEVIN KITO', 'BAGNA KITO', 'KEVIN KITO']
  public exchange = ['UK', 'KITO' ]
  public sport = ['TENNIS', 'SOCCER', 'HORSE']

  addTradeCollapse = true
  betsCollapse = true
  noteCollapse = true


  public date = null

  public supportBets = {
    odds: 1.01,
    stake: 100,
    selection: {
      runnerId: null,
      runnerName: null,
      winner: null
    },
    isBackEntry: true,
    isLay: false,
    options: 'OPEN',
    condition: {
      tennis: {
        isTennis: false,
        point: {
          set1: {
            runnerA: 0,
            runnerB: 0
          },
          set2: {
            runnerA: 0,
            runnerB: 0
          },
          set3: {
            runnerA: 0,
            runnerB: 0
          },
          set4: {
            runnerA: 0,
            runnerB: 0
          },
          set5: {
            runnerA: 0,
            runnerB: 0
          },
          currentGame: {
            runnerA: '0',
            runnerB: '0',
            server: 'A',
          },
        },
      },
      football: {
        isFootball: false,
        point: {
          home: 0,
          away: 0
        },
      },
      horse: {
        isHorse: false,
      },
      time: new Date().getTime(),
      note: null
    }
  }


  constructor(private modalService: NgbModal,
              private tradeCalculatorService: TradeCalculatorService) {}

  ngOnInit(): void {

  }

  updateDateTrade(event){
    this.tradeOutput.trade.info.date = event[0]
  }
  updateDateBets(event){
    this.supportBets.condition.time = event[0]
  }

  openVerticalCenteredModal(content) {

    this.tradeOutput = JSON.parse(JSON.stringify(this.tradeInput))

    // update support bets
    this.updateSupportBets()

    this.modalService.open(content, {centered: true, size:'xl'}).result.then((result) => {

      // action before pass to action

      const trade: NewTrade ={
        _id: this.tradeOutput._id,
        created: this.tradeOutput.created,
        updated: new Date().getTime(),
        trade: this.tradeOutput.trade
      }
      this.tradeUpdateEmitter.emit([trade, result]);
    }).catch((res) => {});
  }

  private updateSupportBets(){
    if(this.tradeOutput.trade.info.marketInfo.sport === ('TENNIS')){
      this.supportBets.condition.tennis.isTennis = true

    } else if(this.tradeOutput.trade.info.marketInfo.sport === ('SOCCER')) {
      this.supportBets.condition.football.isFootball = true

    }else  if(this.tradeOutput.trade.info.marketInfo.sport === ('HORSE')) {
      this.supportBets.condition.horse.isHorse = true

    }
  }

  setStrategy(event){
    this.tradeOutput.trade.info.strategyId = event[0].id
  }

  setSelectionAvgOdds(event, index){

    if(event[0]){
      // im back
      this.tradeOutput.trade.selections[index].avg.back.odds = event[1]
      this.tradeOutput.trade.selections[index].avg.back.stake = event[2]
    } else {
      // im lay
      this.tradeOutput.trade.selections[index].avg.lay.odds = event[1]
      this.tradeOutput.trade.selections[index].avg.lay.stake = event[2]
      this.tradeOutput.trade.selections[index].avg.lay.liability = event[3]
    }

  }

  /*
  * SELECTIONS
   */

  public addSelection(){
    this.tradeOutput.trade.selections.push({
      selectionN: 0,
      sets: {
        secondSet: 0,
        thirdSet: 0
      },
      runnerId: 0,
      runnerName: '',
      winner: false,
      bsp: 0,
      avg: {
        back: {
          odds: 0,
          stake: 0,
          toWin: 0,
          liability: 0
        },
        lay: {
          odds: 0,
          stake: 0,
          liability: 0,
          toWin:0
        }
      }
    })

  }

  public removeSelection(selectionIndex: number) {
    if (selectionIndex > -1) {
      this.tradeOutput.trade.selections.splice(selectionIndex, 1);

      // remove all back of this selection
      let k =0
      for (const trade of this.tradeOutput.trade.trades){
        if(trade.selectionN === selectionIndex){
          this.tradeOutput.trade.trades.splice(k, 1);
          k--
        }
        k++
      }
    }
  }

  /*
  * BETS
 */

  public addBet() {

    const addedBet: Trades = {
      id: this.tradeOutput.trade.trades.length+1,
      selectionN: 0,
      odds: this.supportBets.odds,
      stake: this.supportBets.stake,
      liability: this.supportBets.stake,
      ifWin: (this.supportBets.odds - 1) * this.supportBets.stake,
      options: this.supportBets.options,
      type: 'BACK',
      condition: {
        tennis: {
          isTennis: null,
          point: null,
        },
        football: {
          isFootball: null,
          point: null
        },
        horse: {
          isHorse: null,
        },
        time: 0,
        note: null,
      }
    }

    // check for sport and condition of bet
    if (this.supportBets.condition.tennis.isTennis) {
      // tennis
      addedBet.condition.tennis.isTennis = this.supportBets.condition.tennis.isTennis
      addedBet.condition.tennis.point = JSON.parse(JSON.stringify(this.supportBets.condition.tennis.point))

    } else if (this.supportBets.condition.horse.isHorse) {
      // horse
      addedBet.condition.horse.isHorse = this.supportBets.condition.horse.isHorse

    } else if (this.supportBets.condition.football.isFootball) {
      // football
      addedBet.condition.football.isFootball = this.supportBets.condition.football.isFootball
      addedBet.condition.football.point = this.supportBets.condition.football.point

    }
    // time
    addedBet.condition.time = new Date(this.supportBets.condition.time).getTime()
    // note
    addedBet.condition.note = this.supportBets.condition.note

    // is BACK SIDE
    let i = 0
    for (const selection of this.tradeOutput.trade.selections) {
      if (selection.runnerId === this.supportBets.selection.runnerId) {
        // push to back array
        addedBet.selectionN = i
        this.tradeOutput.trade.trades.push(addedBet)
      }
      i++
    }
  }

  updateBetsDate(event, trade: any){
    trade.condition.time = event[0]
  }


  setTennisTournament(event){
    this.tradeOutput.trade.info.tennisTournamentId = event[0].id
  }

  // remove bets from selection
  removeBets(selectionIndex: number){

    this.tradeOutput.trade.trades.splice(selectionIndex, 1);

  }


  /*
  * PUBLIC FOR UPDATE IN FORM
  */

  public sportChange(){
    // set bet condition type
    switch (this.tradeOutput.trade.info.marketInfo.sport){
      case('TENNIS'):{
        this.supportBets.condition.tennis.isTennis = true
        this.supportBets.condition.football.isFootball = false
        this.supportBets.condition.horse.isHorse = false
        break
      }
      case('FOOTBALL'):{
        this.supportBets.condition.football.isFootball = true
        this.supportBets.condition.tennis.isTennis = false
        this.supportBets.condition.horse.isHorse = false
        break
      }
      case('HORSE RACING'):{
        this.supportBets.condition.horse.isHorse = true
        this.supportBets.condition.football.isFootball = false
        this.supportBets.condition.tennis.isTennis = false

        break
      }
      default:{
        this.supportBets.condition.horse.isHorse = false
        this.supportBets.condition.tennis.isTennis = false
        this.supportBets.condition.football.isFootball = false
      }

    }
  }

  public exchangeChange(){
    switch (this.tradeOutput.trade.info.exchange.name){
      case ('UK'):{
        this.tradeOutput.trade.info.exchange.commission = 0.02
        break
      }
      case ('KITO'):{
        this.tradeOutput.trade.info.exchange.commission = 0.045
        break
      }
      default:{
        this.tradeOutput.trade.info.exchange.commission = 0.02
        break
      }
    }
  }



  /*
  * UTILS FUNCTION
  */

  setCurrentSelectionName(event, index: number){
    this.tradeOutput.trade.selections[index].runnerId = event[0].id
    this.tradeOutput.trade.selections[index].runnerName = event[0].name
  }

  setBSPOdds(event, index: number){
    this.tradeOutput.trade.selections[index].bsp = event[0]
  }

  setBetsOdds(event, index:number){
    this.tradeOutput.trade.trades[index].odds = event[0]
  }

  updateTennisPoint(event){
    if(event[0]){
      this.supportBets.condition.tennis.point = event[0]
    }
  }

  updateFootballPoint(event){
    if(event[0]){
      this.supportBets.condition.football.point = event[0]
    }
  }

  updateFinalResultTennis(event){
    if(event[0]){
      this.tradeOutput.trade.results.finalScore.tennis = event[0]
    }
  }

  updateTradeResultTennis(event, index: number){
    if(event[0]){
      this.tradeOutput.trade.trades[index].condition.tennis.point = event[0]
    }
  }

  updateFinalResultFootball(event){
    if(event[0]){
      this.tradeOutput.trade.results.finalScore.football = event[0]
    }
  }

}
