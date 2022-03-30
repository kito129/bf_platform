import {Component, Input, OnInit} from '@angular/core';
import {MarketsState} from '../../../../store/markets/markets.reducer';
import {Router} from '@angular/router';
import * as marketActions from '../../../../store/markets/markets.actions';
import {Store} from '@ngrx/store';
import {MarketInfoBasic} from "../../../../model/market/basic/marketInfoBasic";

@Component({
  selector: 'app-market-detail-same-match',
  templateUrl: './market-detail-same-match.component.html',
})
export class MarketDetailSameMatchComponent implements OnInit {

  @Input()
  sameMatchMarkets: MarketInfoBasic[]
  @Input()
  selectedMarketId: string

  private marketId: string;

  constructor(private readonly store: Store,) { }

  ngOnInit(): void {
  }


  public changeMarkets(marketId: string){
    this.marketId = marketId
    // market detail
    this.store.dispatch(marketActions.getMarketDetail({ marketId: this.marketId }));
  }

}
