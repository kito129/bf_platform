import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';


import { MarketService } from '../../services/market.service';
import * as marketActions from './markets.actions';
import {FilterBasketService} from '../../services/filter-basket.service';
import * as notesActions from '../notes/notes.actions';


@Injectable()
export class MarketsEffects {

  constructor(
    private actions$: Actions,
    private marketsService: MarketService,
    private filterBasketService: FilterBasketService
  ) {}


  getAllMarketsInfo$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(marketActions.getAllMarkets),
        exhaustMap(action =>
          this.marketsService.getAllMarketsInfo().pipe(
            map(response => {
               // console.log('response:::', response)

              return marketActions.getMarketsSuccess({response})
            }),
            catchError((error: any) => of(marketActions.getMarketsFailure(error))))
        )
      );
    }
  );


  getMarketDetails$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(marketActions.getMarketDetail),
        exhaustMap(action =>
          this.marketsService.getMarketDetailById(action.marketId).pipe(
            map(response => {
              // console.log('response:::', response)

              return marketActions.getMarketDetailSuccess({response})
            }),
            catchError((error: any) => of(marketActions.getMarketDetailFailure(error))))
        )
      );
    }
  );


  getMarketsSameMatch$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(marketActions.getMarketsSameMatch),
        exhaustMap(action =>
          this.marketsService.getMarketOfSameMatch(action.marketId).pipe(
            map(response => {
              // console.log('response:::', response)

              return marketActions.getMarketsSameMatchSuccess({response})
            }),
            catchError((error: any) => of(marketActions.getMarketsSameMatchFailure(error))))
        )
      );
    }
  );

  getMarketMetaListTennisBasic$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(marketActions.getMarketMetalistBasicTennis),
        exhaustMap(action =>
          this.marketsService.getMarketMetalistTennis().pipe(
            map(response => {
              // console.log('response:::', response)

              return marketActions.getMarketMetalistBasicTennisSuccess({response})
            }),
            catchError((error: any) => of(marketActions.getMarketMetalistBasicTennisFailure(error))))
        )
      );
    }
  );

  getMarketMetaListSoccerBasic$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(marketActions.getMarketMetalistBasicSoccer),
        exhaustMap(action =>
          this.marketsService.getMarketMetalistSoccer().pipe(
            map(response => {
              // console.log('response:::', response)

              return marketActions.getMarketMetalistBasicSoccerSuccess({response})
            }),
            catchError((error: any) => of(marketActions.getMarketMetalistBasicSoccerFailure(error))))
        )
      );
    }
  );

  getFilterBasket$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(marketActions.getAllFilterBasket),
        exhaustMap(action =>
          this.filterBasketService.getAllFilterBasket().pipe(
            map(response => {
              // console.log('response:::', response)

              return marketActions.getAllFilterBasketSuccess({response})
            }),
            catchError((error: any) => of(marketActions.getMarketMetalistBasicTennisFailure(error))))
        )
      );
    }
  );

  createFilterBasket$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(marketActions.createFilterBasket),
      exhaustMap(action =>
        this.filterBasketService.createFilterBasket(action.filterBasket).pipe(
          map(response => {
            // console.log('response:::', response)

            return marketActions.createFilterBasketSuccess({response})
          }),
          catchError((error: any) => {
            console.log('response:::', error)
            return of(marketActions.createFilterBasketFailure(error));
          }))
      )
    );
    }
  );

  updateFilterBasket$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(marketActions.updateFilterBasket),
        exhaustMap(action =>
          this.filterBasketService.updateFilterBasket(action._id,action.filterBasket).pipe(
            map(response => {
              // console.log('response:::', response)

              return marketActions.updateFilterBasketSuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(marketActions.updateFilterBasketFailure(error));
            }))
        )
      );
    }
  );

  deleteFilterBasket$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(marketActions.deleteFilterBasket),
        exhaustMap(action =>
          this.filterBasketService.deleteFilterBasket(action._id).pipe(
            map(response => {
              // console.log('response:::', response)

              return marketActions.deleteFilterBasketSuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(marketActions.deleteFilterBasketFailure(error));
            }))
        )
      );
    }
  );



}
