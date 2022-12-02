import {Component, Input, OnInit} from '@angular/core';
import {TVBets} from "../../../model/TV/TVBets";
import * as studyActions from "../../../store/study/study/study.actions";
import * as basketActions from "../../../store/study/basket/basket.actions";
import {Store} from "@ngrx/store";
import {Trade} from '../../../model/report/trade/trade';

@Component({
  selector: 'app-study-markets-selected-detail',
  templateUrl: './study-markets-selected-detail.component.html',
})
export class StudyMarketsSelectedDetailComponent implements OnInit {

  @Input() selectedMarketData: any
  @Input() detail: boolean
  @Input() selectedTrades: TVBets[]
  @Input() haveTrades: boolean
  @Input() basketBspTime: number
  @Input() basketBspOdds: number
  @Input() trade: Trade


  constructor(private readonly store: Store) { }

  ngOnInit(): void {

    console.log(this.selectedMarketData)
  }

  closePanel(){
    this.store.dispatch(studyActions.unsetSelectedStudyMarket())
    this.store.dispatch(basketActions.unsetSelectedBasketMarket())
  }

}
