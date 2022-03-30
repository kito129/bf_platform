import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {SupportBets, Trade, TradeForm} from '../../../../model/report/trade';
import {TradeCalculatorService} from '../../../../services/trade-calculator.service';

@Component({
  selector: 'app-trade-create-modal',
  templateUrl: './trade-create-modal.component.html',
})
export class TradeCreateModalComponent implements OnInit {


  @Output()
  addTradeEmitter = new EventEmitter();

  // tradeForm support data
  public executor = ['BAGNA', 'KEVIN', 'KITO']
  public exchange = ['UK KEVIN', 'ITA WILLO', 'ITA PIDO', 'ITA KITO' ]
  public sport = ['TENNIS', 'FOOTBALL', 'HORSE RACING']

  public tradeForm: TradeForm = new TradeForm()

  public supportBets: SupportBets = new SupportBets()

  constructor(private modalService: NgbModal,
              private tradeCalculatorService: TradeCalculatorService) {}

  ngOnInit(): void {

  }

  updateDateTrade(event){
    this.tradeForm.info.date = event[0]
  }
  updateDateBets(event){
    this.supportBets.condition.time = event[0]
  }

  openVerticalCenteredModal(content) {
    this.modalService.open(content, {centered: true, size: 'xl', backdrop: 'static', keyboard: false}).result.then((result) => {

      // action before pass to action

      const trade: Trade ={
        created: new Date().getTime(),
        lastUpdate: new Date().getTime(),
        trade: this.tradeForm
      }
      this.addTradeEmitter.emit([trade,result])
    }).finally(()=>{
      this.tradeForm = new TradeForm()
    })
  }

  /*
  * SELECTIONS
   */

  public addSelection(){
    this.tradeForm.selections.push({
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
    this.tradeForm.exposition.push({
      back: null,
      lay: null,
      selectionN: this.tradeForm.selections.length-1,
    })

  }

  public removeSelection(selectionIndex: number) {
    if (selectionIndex > -1) {
      this.tradeForm.selections.splice(selectionIndex, 1);
      this.tradeForm.exposition.splice(selectionIndex, 1);

      // remove all back of this selection
      let k =0
      for (const trade of this.tradeForm.trades.back){
        if(trade.selectionN === selectionIndex){
          this.tradeForm.trades.back.splice(k, 1);
          k--
        }
        k++
      }

      // remove all lay of this selection
      let h =0
      for (const trade of this.tradeForm.trades.lay){
        if(trade.selectionN === selectionIndex){
          this.tradeForm.trades.lay.splice(k, 1);
          h--
        }
        h++
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
        time: 0,
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
    layBet.condition.time = this.supportBets.condition.time
    backBet.condition.time = this.supportBets.condition.time
    // note
    backBet.condition.note = this.supportBets.condition.note
    layBet.condition.note = this.supportBets.condition.note

    if (this.supportBets.isBack) {
      // is BACK SIDE
      let i = 0
      for (const selection of this.tradeForm.selections) {
        if (selection.runnerId === this.supportBets.selection.runnerId) {
          // push to back array
          backBet.selectionN = i
          this.tradeForm.trades.back.push(backBet)
        }
        i++
      }

    } else if (this.supportBets.isLay) {
      // is LAY SIDE
      let j = 0
      for (const selection of this.tradeForm.selections) {
        if (selection.runnerId === this.supportBets.selection.runnerId) {
          layBet.selectionN = j
          this.tradeForm.trades.lay.push(layBet)
        }
        j++
      }
    }

    console.log(this.tradeForm)

    this.updateExpositionAndPl()
  }

  updateBetsDate(event, trade: any){
    trade.condition.time = event[0]
  }

  updateTradeTennisPoint(event, trade: any){
    trade.condition.tennis.point = event[0]
  }




  // remove bets from selection
  removeBets(selectionIndex: number, type: string){

    if(type.indexOf('back')!== -1 ){

      this.tradeForm.trades.back.splice(selectionIndex, 1);

    } else if (type.indexOf('lay')!== -1 ){

      this.tradeForm.trades.lay.splice(selectionIndex, 1);

    }
    this.updateExpositionAndPl()
  }


  /*
  * PL
  */

  calculatePl(){
    this.tradeCalculatorService.calculatePl(this.tradeForm)
  }

  public updateExpositionAndPl(){
    this.tradeCalculatorService.expositionForEachSelection(this.tradeForm)
    this.calculatePl()
  }


  /*
  * PUBLIC FOR UPDATE IN FORM
  */

  public sportChange(){
    // set bet condition type
    switch (this.tradeForm.info.marketInfo.sport){
      case('TENNIS'):{
        this.supportBets.condition.tennis.isTennis = true
        this.supportBets.condition.football.isFootball = false
        this.supportBets.condition.horse.isHorse = false
        break
      }
      case('FOOTBALL'):{
        this.supportBets.condition.tennis.isTennis = false
        this.supportBets.condition.football.isFootball = true
        this.supportBets.condition.horse.isHorse = false
        break
      }
      case('HORSE RACING'):{
        this.supportBets.condition.football.isFootball = false
        this.supportBets.condition.tennis.isTennis = false
        this.supportBets.condition.horse.isHorse = true

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
    switch (this.tradeForm.info.exchange.name){
      case ('UK KEVIN'):{
        this.tradeForm.info.exchange.commission = 0.02
        break
      }
      case ('ITA PIDO'):{
        this.tradeForm.info.exchange.commission = 0.05
        break
      }
      case ('ITA WILLO'):{
        this.tradeForm.info.exchange.commission = 0.045
        break
      }
      default:{
        this.tradeForm.info.exchange.commission = 0.02
        break
      }
    }
  }


  /*
  * PRIVATE UTILS FUNCTION
  */


  setCurrentSelectionName(event, index: number){

    this.tradeForm.selections[index].runnerId = event[0].id
    this.tradeForm.selections[index].runnerName = event[0].name

  }

  setTennisTournament(event){
    this.tradeForm.info.tennisTournamentId = event[0].id
  }

  setStrategy(event){
    this.tradeForm.info.strategyId = event[0].id
    this.sportChange()
  }

  setBSPodds(event, index: number){
    this.tradeForm.selections[index].bsp = event[0]
  }

  setBetsOdds(event){
    this.supportBets.odds = event[0]
  }

  setSelectionAvgOdds(event, index){

    if(event[0]){
      // im back
      this.tradeForm.selections[index].avg.back.odds = event[1]
      this.tradeForm.selections[index].avg.back.stake = event[2]
    } else {
      // im lay
      this.tradeForm.selections[index].avg.lay.odds = event[1]
      this.tradeForm.selections[index].avg.lay.bank = event[2]
      this.tradeForm.selections[index].avg.lay.liability = event[3]
    }

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
      this.tradeForm.result.finalScore.tennis = event[0]
    }
  }

  public updateFinalResultFootball(event){
    if(event[0]){
      this.tradeForm.result.finalScore.football = event[0]
    }
  }
}
