import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {StudyService} from "../../../services/study.service";
import * as entryActions from "../entry/entry.actions";
import {catchError, exhaustMap, map} from "rxjs/operators";
import {of} from "rxjs";

@Injectable()
export class EntryEffects {

  constructor(
    private actions$: Actions,
    private studyServices: StudyService,
  ) {}

  getAllEntry = createEffect(() => {
      return this.actions$.pipe(
        ofType(entryActions.getAllEntries),
        exhaustMap(action =>
          this.studyServices.getAllEntries().pipe(
            map(response => {
              //console.log('response:::', response)

              return entryActions.getAllEntriesSuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(entryActions.getAllEntriesFailure(error));
            }))
        )
      );
    }
  );

  createEntry = createEffect(() => {
      return this.actions$.pipe(
        ofType(entryActions.createEntry),
        exhaustMap(action =>
          this.studyServices.createEntry(action.entry).pipe(
            map(response => {
              //console.log('response:::', response)

              return entryActions.createEntrySuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(entryActions.createEntryFailure(error));
            }))
        )
      );
    }
  );

  updateEntry = createEffect(() => {
      return this.actions$.pipe(
        ofType(entryActions.updateEntry),
        exhaustMap(action =>
          this.studyServices.updateEntry(action._id,action.entry).pipe(
            map(response => {
              //console.log('response:::', response)

              return entryActions.updateEntrySuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(entryActions.updateEntryFailure(error));
            }))
        )
      );
    }
  );

  deleteEntry = createEffect(() => {
      return this.actions$.pipe(
        ofType(entryActions.deleteEntry),
        exhaustMap(action =>
          this.studyServices.deleteEntry(action._id).pipe(
            map(response => {
              //console.log('response:::', response)

              return entryActions.deleteEntrySuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(entryActions.deleteEntryFailure(error));
            }))
        )
      );
    }
  );
}
