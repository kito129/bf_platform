import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import {NotesService} from "../../services/notes.service";
import * as notesActions from './notes.actions';

@Injectable()
export class NotesEffects {

  constructor(
    private actions$: Actions,
    private notesServices: NotesService,
  ) {}

  getAllRunnersNotes = createEffect(() => {
      return this.actions$.pipe(
        ofType(notesActions.getAllRunnersNotes),
        exhaustMap(action =>
          this.notesServices.getAllNotes().pipe(
            map(response => {
              //console.log('response:::', response)

              return notesActions.getAllRunnersNotesSuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(notesActions.getAllRunnersNotesFailure(error));
            }))
        )
      );
    }
  );

  createRunnerNote$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(notesActions.createRunnerNote),
        exhaustMap(action =>
          this.notesServices.createNotes(action.runnerNote).pipe(
            map(response => {
              // console.log('response:::', response)

              return notesActions.createRunnerNoteSuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(notesActions.createRunnerNoteFailure(error));
            }))
        )
      );
    }
  );

  updateRunnerNote$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(notesActions.updateRunnerNote),
        exhaustMap(action =>
          this.notesServices.updateNotes(action._id,action.runnerNote).pipe(
            map(response => {
              // console.log('response:::', response)

              return notesActions.updateRunnerNoteSuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(notesActions.updateRunnerNoteFailure(error));
            }))
        )
      );
    }
  );


  deleteRunnerNote$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(notesActions.deleteRunnerNote),
        exhaustMap(action =>
          this.notesServices.deleteNotes(action._id).pipe(
            map(response => {
              // console.log('response:::', response)

              return notesActions.deleteRunnerNoteSuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(notesActions.deleteRunnerNoteFailure(error));
            }))
        )
      );
    }
  );




}
