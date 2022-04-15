import {Component, Input, OnInit, Output} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {EventEmitter} from '@angular/core';
import {Trade} from '../../../../model/report/trade';
import {TradeCalculatorService} from '../../../../services/trade-calculator.service';
import {TennisPoint} from '../../../../model/point/tennisPoint';
import {FootballPoint} from '../../../../model/point/footballPoint';
import {NewTrade} from '../../../../model/report/new/newTrade';

@Component({
  selector: 'app-trade-updates-modal',
  templateUrl: './trade-updates-modal.component.html',
})
export class TradeUpdatesModalComponent implements OnInit {

  @Input()
  tradeInput: NewTrade
  @Output()
  tradeUpdateEmitter = new EventEmitter()
  public tradeOutput: NewTrade
  // tradeOutput.trade support data
  public executor = ['BAGNA', 'KEVIN', 'KITO']
  public exchange = ['UK KEVIN', 'ITA WILLO', 'ITA PIDO', 'ITA KITO' ]
  public sport = ['TENNIS', 'FOOTBALL', 'HORSE RACING']


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

    this.modalService.open(content, {centered: true, size:'xl', backdrop: 'static', keyboard: false}).result.then((result) => {

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

    } else if(this.tradeOutput.trade.info.marketInfo.sport === ('FOOTBALL')) {
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
      this.tradeOutput.trade.selections[index].avg.lay.bank = event[2]
      this.tradeOutput.trade.selections[index].avg.lay.liability = event[3]
    }

    console.log(this.tradeOutput.trade.selections[index])
  }

  /*
  * SELECTIONS
   */

  public addSelection(){
    this.tradeOutput.trade.selections.push({
      runnerId: 0,
      runnerName: '',
      winner: false,
      bsp: 0,
      avg: {
        back: {
          odds: 0,
          stake: 0,
        },
        lay: {
          odds: 0,
          bank: 0,
          liability: 0,
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

    const backBet = {
      selectionN: 0,
      odds: this.supportBets.odds,
      stake: this.supportBets.stake,
      ifWin: (this.supportBets.odds - 1) * this.supportBets.stake,
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
          time: null,
        },
        time: 0,
        note: null,
      }
    }

    const layBet = {
      selectionN: 0,
      odds: this.supportBets.odds,
      bank: this.supportBets.stake,
      ifWin: this.supportBets.stake,
      liability: (this.supportBets.odds - 1) * this.supportBets.stake,
      condition: {
        tennis: {
          isTennis: null,
          point: null,

        },
        football: {
          isFootball: null,
          point: null,
        },
        horse: {
          isHorse: null,
        },
        time: new Date().getTime(),
        note: null,
      }
    }

    // check for sport and condition of bet
    if (this.supportBets.condition.tennis.isTennis) {
      // tennis
      layBet.condition.tennis.isTennis = this.supportBets.condition.tennis.isTennis
      layBet.condition.tennis.point = JSON.parse(JSON.stringify(this.supportBets.condition.tennis.point))

      backBet.condition.tennis.isTennis = this.supportBets.condition.tennis.isTennis
      backBet.condition.tennis.point = JSON.parse(JSON.stringify(this.supportBets.condition.tennis.point))

    } else if (this.supportBets.condition.horse.isHorse) {
      // horse
      layBet.condition.horse.isHorse = this.supportBets.condition.horse.isHorse
      backBet.condition.horse.isHorse = this.supportBets.condition.horse.isHorse

    } else if (this.supportBets.condition.football.isFootball) {
      // football
      layBet.condition.football.isFootball = this.supportBets.condition.football.isFootball
      layBet.condition.football.point = this.supportBets.condition.football.point
      backBet.condition.football.isFootball = this.supportBets.condition.football.isFootball
      backBet.condition.football.point = this.supportBets.condition.football.point

    }
    // time
    layBet.condition.time = new Date(this.supportBets.condition.time).getTime()
    backBet.condition.time = new Date(this.supportBets.condition.time).getTime()
    // note
    backBet.condition.note = this.supportBets.condition.note
    layBet.condition.note = this.supportBets.condition.note

    if (this.supportBets.isBackEntry) {
      // is BACK SIDE
      let i = 0
      for (const selection of this.tradeOutput.trade.selections) {
        if (selection.runnerId === this.supportBets.selection.runnerId) {
          // push to back array
          backBet.selectionN = i
          this.tradeOutput.trade.trades.push(backBet)
        }
        i++
      }

    } else if (this.supportBets.isLay) {
      // is LAY SIDE
      let j = 0
      for (const selection of this.tradeOutput.trade.selections) {
        if (selection.runnerId === this.supportBets.selection.runnerId) {
          layBet.selectionN = j
          this.tradeOutput.trade.trades.push(layBet)
        }
        j++
      }
    }

    // empty support bet condition
    this.updateExpositionAndPl()
  }

  updateBetsDate(event, trade: any){
    trade.condition.time = event[0]
  }

  updateTradeTennisPoint(event, trade: any){
    trade.condition.tennis.point = event[0]
  }

  setTennisTournament(event){
    this.tradeOutput.trade.info.tennisTournamentId = event[0].id
  }

  // remove bets from selection
  removeBets(selectionIndex: number, type: string){

    if(type.indexOf('back')!== -1 ){

      this.tradeOutput.trade.trades.back.splice(selectionIndex, 1);

    } else if (type.indexOf('lay')!== -1 ){

      this.tradeOutput.trade.trades.lay.splice(selectionIndex, 1);

    }
    this.updateExpositionAndPl()
  }


  /*
  * PL
  */

  calculatePl(){
    this.tradeCalculatorService.calculatePl(this.tradeOutput.trade)
  }
  public updateExpositionAndPl(){
    this.tradeCalculatorService.expositionForEachSelection(this.tradeOutput.trade)
    this.calculatePl()
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
      case ('UK KEVIN'):{
        this.tradeOutput.trade.info.exchange.commission = 0.02
        break
      }
      case ('ITA PIDO'):{
        this.tradeOutput.trade.info.exchange.commission = 0.05
        break
      }
      case ('ITA WILLO'):{
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
  * PRIVATE UTILS FUNCTION
  */

  setCurrentSelectionName(event, index: number){
    this.tradeOutput.trade.selections[index].runnerId = event[0].id
    this.tradeOutput.trade.selections[index].runnerName = event[0].name
  }

  setBSPodds(event, index: number){
    this.tradeOutput.trade.selections[index].bsp = event[0]
  }

  setBetsOdds(event){
    this.supportBets.odds = event[0]
  }

  public updateTennisPoint(event){
    if(event[0]){
      this.supportBets.condition.tennis.point = event[0]
    }
  }

  public updateFootballPoint(event){
    if(event[0]){
      this.supportBets.condition.football.point = event[0]
    }
  }

  public updateFinalResultTennis(event){
    if(event[0]){
      this.tradeOutput.trade.result.finalScore.tennis = event[0]
    }
  }

  public updateFinalResultFootball(event){
    if(event[0]){
      this.tradeOutput.trade.result.finalScore.football = event[0]
    }
  }

}
