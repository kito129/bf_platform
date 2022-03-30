import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { MarketAdvancedService } from '../../services/market-advanced.service';
import * as marketAdvancedActions from './marketAdvanced.actions';


@Injectable()
export class MarketAdvancedEffectEffects {

  constructor(
    private actions$: Actions,
    private marketAdvancedService: MarketAdvancedService
  ) {
  }


  getMarketDetailsAdvanced$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(marketAdvancedActions.getMarketAdvancedDetail),
        exhaustMap(action =>
          this.marketAdvancedService.getMarketAdvancedDetailById(action.marketId).pipe(
            map(response => {
                // console.log('response:::', response)

              return marketAdvancedActions.getMarketAdvancedDetailSuccess({response})
            }),
            catchError((error: any) => of(marketAdvancedActions.getMarketAdvancedDetailFailure(error))))
        )
      );
    }
  );

  getMarketsAdvancedList$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(marketAdvancedActions.getMarketsAdvancedList),
        exhaustMap(action =>
          this.marketAdvancedService.getMarketsAdvancedList().pipe(
            map(response => {
              // console.log('response:::', response)

              return marketAdvancedActions.getMarketsAdvancedListSuccess({response})
            }),
            catchError((error: any) => of(marketAdvancedActions.getMarketsAdvancedListFailure(error))))
        )
      );
    }
  );

  getMarketMetaListAdvanced$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(marketAdvancedActions.getMarketMetalistAdvanced),
        exhaustMap(action =>
          this.marketAdvancedService.getMarketMetalistAdvanced().pipe(
            map(response => {
              // console.log('response:::', response)

              return marketAdvancedActions.getMarketMetalistAdvancedSuccess({response})
            }),
            catchError((error: any) => of(marketAdvancedActions.getMarketMetalistAdvancedFailure(error))))
        )
      );
    }
  );

}
