import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as tennisTournamentActions from "./tennisTournament.actions";
import {catchError, exhaustMap, map} from "rxjs/operators";
import {of} from "rxjs";
import {TennisTournamentService} from "../../services/tennis-tournament.service";

@Injectable()
export class TennisTournamentEffects {

  constructor(
    private actions$: Actions,
    private tennisTournamentService: TennisTournamentService,
  ) {}
  getAllTennisTournaments = createEffect(() => {
      return this.actions$.pipe(
        ofType(tennisTournamentActions.getAllTennisTournament),
        exhaustMap(action =>
          this.tennisTournamentService.getAllTennisTournaments().pipe(
            map(response => {
             // console.log('response:::', response)

              return tennisTournamentActions.getAllTennisTournamentSuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(tennisTournamentActions.getAllTennisTournamentFailure(error));
            }))
        )
      );
    }
  );

  createTennisTournament$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(tennisTournamentActions.createTennisTournament),
        exhaustMap(action =>
          this.tennisTournamentService.createTennisTournaments(action.tennisTournament).pipe(
            map(response => {
              //console.log('response:::', response)

              return tennisTournamentActions.createTennisTournamentSuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(tennisTournamentActions.createTennisTournamentFailure(error));
            }))
        )
      );
    }
  );

  updateTennisTournament$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(tennisTournamentActions.updateTennisTournament),
        exhaustMap(action =>
          this.tennisTournamentService.updateTennisTournaments(action._id,action.tennisTournament).pipe(
            map(response => {
              // console.log('response:::', response)

              return tennisTournamentActions.updateTennisTournamentSuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(tennisTournamentActions.updateTennisTournamentFailure(error));
            }))
        )
      );
    }
  );


  deleteTennisTournament$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(tennisTournamentActions.deleteTennisTournament),
        exhaustMap(action =>
          this.tennisTournamentService.deleteTennisTournaments(action._id).pipe(
            map(response => {
              //console.log('response:::', response)

              return tennisTournamentActions.deleteTennisTournamentSuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(tennisTournamentActions.deleteTennisTournamentFailure(error));
            }))
        )
      );
    }
  );




}
