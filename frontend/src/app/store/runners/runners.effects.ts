import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';


import { RunnersService } from '../../services/runners.service';
import * as runnersActions from './runners.action';
import {MarketService} from "../../services/market.service";


@Injectable()
export class RunnersEffects {

  constructor(
    private actions$: Actions,
    private runnersService: RunnersService,
    private marketsService: MarketService
  ) {}


  getAllRunners$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(runnersActions.getAllRunners),
        exhaustMap(action =>
          this.runnersService.getAllRunners().pipe(
            map(response => {
              //console.log('response:::', response)

              return runnersActions.getAllRunnersSuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(runnersActions.getRunnerByIdFailure(error));
            }))
        )
      );
    }
  );


  getRunnerById$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(runnersActions.getRunnerById),
        exhaustMap(action =>
          this.runnersService.getRunnerById(action.runnerId).pipe(
            map(response => {
              //console.log('response:::', response)

              return runnersActions.getRunnerByIdSuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(runnersActions.getRunnerByIdFailure(error));
            }))
        )
      );
    }
  );


  getRunnersByMarketId$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(runnersActions.getMarketsByRunnerId),
        exhaustMap(action =>
          this.marketsService.getMarketsByRunnerId(action.runnerId).pipe(
            map(response => {
              console.log('response:::', response)

              return runnersActions.getMarketsByRunnerIdSuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(runnersActions.getMarketsByRunnerIdFailure(error));
            }))
        )
      );
    }
  );


}
