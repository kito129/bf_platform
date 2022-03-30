import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {StudyService} from '../../../services/study.service';
import * as basketActions from './basket.actions';
import {catchError, exhaustMap, map} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class BasketEffects {

  constructor(
    private actions$: Actions,
    private studyServices: StudyService,
  ) {}

  getAllBaskets = createEffect(() => {
      return this.actions$.pipe(
        ofType(basketActions.getAllBaskets),
        exhaustMap(action =>
          this.studyServices.getAllBaskets().pipe(
            map(response => {
              //console.log('response:::', response)

              return basketActions.getAllBasketsSuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(basketActions.getAllBasketsFailure(error));
            }))
        )
      );
    }
  );

  createBasket = createEffect(() => {
      return this.actions$.pipe(
        ofType(basketActions.createBasket),
        exhaustMap(action =>
          this.studyServices.createBasket(action.basket).pipe(
            map(response => {
              //console.log('response:::', response)

              return basketActions.createBasketSuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(basketActions.createBasketFailure(error));
            }))
        )
      );
    }
  );

  updateBasket = createEffect(() => {
      return this.actions$.pipe(
        ofType(basketActions.updateBasket),
        exhaustMap(action =>
          this.studyServices.updateBasket(action._id,action.basket).pipe(
            map(response => {
              //console.log('response:::', response)

              return basketActions.updateBasketSuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(basketActions.updateBasketFailure(error));
            }))
        )
      );
    }
  )

  deleteBasket = createEffect(() => {
      return this.actions$.pipe(
        ofType(basketActions.deleteBasket),
        exhaustMap(action =>
          this.studyServices.deleteBasket(action._id).pipe(
            map(response => {
              //console.log('response:::', response)

              return basketActions.deleteBasketSuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(basketActions.deleteBasketFailure(error));
            }))
        )
      );
    }
  );

  getSelectedBasketMarket = createEffect(() => {
      return this.actions$.pipe(
        ofType(basketActions.setSelectedBasket),
        exhaustMap(action =>
          this.studyServices.getBasketMarkets(action.id).pipe(
            map(response => {
              //console.log('response:::', response)

              return basketActions.setSelectedBasketSuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(basketActions.setSelectedBasketFailure(error));
            }))
        )
      );
    }
  );



  setSelectedBasketMarket = createEffect(() => {
      return this.actions$.pipe(
        ofType(basketActions.setSelectedBasketMarket),
        exhaustMap(action =>
          this.studyServices.getStudyMarket(action.marketId, action.selectionId).pipe(
            map(response => {
              //console.log('response:::', response)

              return basketActions.setSelectedBasketMarketSuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(basketActions.setSelectedBasketMarketFailure(error));
            }))
        )
      );
    }
  );
}
