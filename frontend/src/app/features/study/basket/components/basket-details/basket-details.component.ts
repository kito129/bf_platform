import {Component, Input, OnInit} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {MarketBasket} from "../../../../../model/market/marketBasket";
import {Pie} from "../../../../../model/apxCharts/pie";
import {select, Store} from "@ngrx/store";
import * as basketSelectors from "../../../../../store/study/basket/basket.selectors";

@Component({
  selector: 'app-basket-details',
  templateUrl: './basket-details.component.html',
})
export class BasketDetailsComponent implements OnInit {

  @Input() marketsBasketList$: Observable<MarketBasket[]>
  destroy$: Subject<boolean> = new Subject<boolean>();

  label: string[] = ['WIN','LOSS']
  data: number[] = []

  constructor(private readonly store: Store) { }

  ngOnInit(): void {

    this.marketsBasketList$.subscribe( data => {
      if(data){
        let win = data.reduce(function(acc, val){
          return val.marketInfo.marketInfo.winner!== undefined &&  val.selection.id === val.marketInfo.marketInfo.winner.id
            ? acc+=1
            : acc;
        },0)
        this.data = [win,data.length -win]
      }
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
