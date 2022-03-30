import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, exhaustMap, catchError} from 'rxjs/operators';
import { of } from 'rxjs';


import * as dbManagerActions from './dbManager.actions';
import {DbManagerService} from '../../services/db-manager.service';


@Injectable()
export class DbManagerEffects {

  constructor(
    private actions$: Actions,
    private dbManagerService: DbManagerService
  ) {}

  updateUnderOver$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(dbManagerActions.updateUnderOver),
        exhaustMap(action =>
          this.dbManagerService.updateUnderOver().pipe(
            map(response => {
              //console.log('response:::', response)

              return dbManagerActions.updateSportsSuccess({response})
            }),
            catchError((error: any) => {
              //console.log('response:::', error)
              return of(dbManagerActions.updateSportsFailure(error));
            })

        )
      ));
    }
  );

  getSportsStats$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(dbManagerActions.getSportStatsAction),
        exhaustMap(action =>
          this.dbManagerService.getSportsStats().pipe(
            map(response => {

              console.log(action)
              console.log('response:::', response)

              return dbManagerActions.getSportStatsActionSuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(dbManagerActions.getSportStatsActionFailure(error));
            })

          )
        ));
    }
  );

  updateRunnersStats$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(dbManagerActions.updateRunnersStatsAction),
        exhaustMap(action =>
          this.dbManagerService.updateRunnersStats().pipe(
            map(response => {
              console.log('response:::', response)

              return dbManagerActions.updateRunnersStatsActionSuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(dbManagerActions.updateRunnersStatsActionFailure(error));
            })

          )
        ));
    }
  );


  updateRunnersSport$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(dbManagerActions.updateRunnersSportAction),
        exhaustMap(action =>
          this.dbManagerService.updateRunnersSport().pipe(
            map(response => {
              console.log('response:::', response)

              return dbManagerActions.updateRunnersSportActionSuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(dbManagerActions.updateRunnersSportActionFailure(error));
            })

          )
        ));
    }
  );


}
