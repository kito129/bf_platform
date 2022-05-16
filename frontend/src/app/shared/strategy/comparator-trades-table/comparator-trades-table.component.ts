import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {TradeComparator} from '../../../model/study/study/tradeComparator';
import * as studyActions from '../../../store/study/study/study.actions';
import * as studySelectors from '../../../store/study/study/study.selectors';
import {select, Store} from '@ngrx/store';
@Component({
  selector: 'app-comparator-trades-table',
  templateUrl: './comparator-trades-table.component.html',
})
export class ComparatorTradesTableComponent implements OnInit {

  @Input() rowsInput: TradeComparator[][]
  @Input() tradesCompared: TradeComparator[][]

  selectedTradeId: string = null

  selectedCol = 0

  @Input() studyName: string[]

  better: number[] = []
  worse: number[] = []
  betterCash: number[] = []
  worseCash: number[] = []

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    this.generateBetterAndWorst(this.studyName.length)
    this.calculateBetterAndWorse()

  }

  setCol(i: number){
    this.selectedCol = i
  }

  generateBetterAndWorst(size: number){
    for (let i =0; i<size;i++){
      this.better.push(0)
      this.worse.push(0)
      this.betterCash.push(0)
      this.worseCash.push(0)
    }
  }

  calculateBetterAndWorse(){
    this.rowsInput.forEach((rows,i ) =>{
      rows.forEach(  (trade, j)=>{
        if(trade){
          const check = trade.compare
          if(check!==null && check>0){
            this.better[j] = this.better[j]+1
            this.betterCash[j] = this.betterCash[j]+ check
          } else if(check!==null && check<0){
            this.worse[j] = this.worse[j]+1
            this.worseCash[j] = this.worseCash[j] +check
          }
        }
      })
    })
  }

  setMarketAndTrade(tradeComp: TradeComparator){
    if(tradeComp.tradeId === this.selectedTradeId){
      this.selectedTradeId = null
      this.store.dispatch(studyActions.unsetSelectedStudyMarket())
    } else if(tradeComp.tradeId !== this.selectedTradeId) {
      this.selectedTradeId = tradeComp.tradeId
      // get correct trade
      this.store.pipe(select(studySelectors.getTradeById(tradeComp.tradeId))).subscribe(trade => {
        this.store.dispatch(studyActions.setSelectedStudyMarket({marketId: tradeComp.marketId, selectionId: tradeComp.selectionId, marketTrade: trade}))
      }).unsubscribe()
    }
  }
}
