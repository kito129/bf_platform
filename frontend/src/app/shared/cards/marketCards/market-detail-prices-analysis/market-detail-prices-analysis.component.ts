import {Component, Input, OnInit} from '@angular/core';
import {MarketsState} from '../../../../store/markets/markets.reducer';
import {PriceAnalysis} from '../../../../model/stats/priceAnalysis';

@Component({
  selector: 'app-market-detail-prices-analysis',
  templateUrl: './market-detail-prices-analysis.component.html',
})
export class MarketDetailPricesAnalysisComponent implements OnInit {

  @Input()
  markets?: MarketsState

  pricesAnalysis: PriceAnalysis[] = []

  xSize: number
  ySize: number

  constructor() {


  }

  ngOnInit(): void {

    // calc size
    this.xSize = document.getElementById('chartDimension').clientWidth
    this.ySize = this.xSize*0.5

    let i=0
    for (const selection of this.markets.selectedMarket.marketOdds.marketOdds){

      this.pricesAnalysis.push(new PriceAnalysis(selection, this.markets.selectedMarket.marketId, this.markets.selectedMarket.marketRunners.marketRunners[i],selection.odds.length , this.markets.selectedMarket.marketInfo.marketInfo.openDate))
      i= i+1

    }

  }

}
