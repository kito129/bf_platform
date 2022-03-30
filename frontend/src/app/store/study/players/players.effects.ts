import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {StudyService} from "../../../services/study.service";
import * as playersActions from "../players/players.actions";
import {catchError, exhaustMap, map} from "rxjs/operators";
import {of} from "rxjs";

@Injectable()
export class PlayersEffects {

  constructor(
    private actions$: Actions,
    private studyServices: StudyService,
  ) {
  }

  getAllPlayers = createEffect(() => {
      return this.actions$.pipe(
        ofType(playersActions.getAllPlayers),
        exhaustMap(action =>
          this.studyServices.getAllPlayers().pipe(
            map(response => {
              //console.log('response:::', response)

              return playersActions.getAllPlayersSuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(playersActions.getAllPlayersFailure(error));
            }))
        )
      );
    }
  );

  createPlayers = createEffect(() => {
      return this.actions$.pipe(
        ofType(playersActions.createPlayers),
        exhaustMap(action =>
          this.studyServices.createPlayers(action.players).pipe(
            map(response => {
              //console.log('response:::', response)

              return playersActions.createPlayersSuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(playersActions.createPlayersFailure(error));
            }))
        )
      );
    }
  );

  updatePlayers = createEffect(() => {
      return this.actions$.pipe(
        ofType(playersActions.updatePlayers),
        exhaustMap(action =>
          this.studyServices.updatePlayers(action._id,action.players).pipe(
            map(response => {
              //console.log('response:::', response)

              return playersActions.updatePlayersSuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(playersActions.updatePlayersFailure(error));
            }))
        )
      );
    }
  );

  deletePlayers = createEffect(() => {
      return this.actions$.pipe(
        ofType(playersActions.deletePlayers),
        exhaustMap(action =>
          this.studyServices.deletePlayers(action._id).pipe(
            map(response => {
              //console.log('response:::', response)

              return playersActions.deletePlayersSuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(playersActions.deletePlayersFailure(error));
            }))
        )
      );
    }
  );
}
