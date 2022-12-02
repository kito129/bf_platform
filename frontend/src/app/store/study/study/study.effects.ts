import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {StudyService} from '../../../services/study.service';
import * as studyActions from '../study/study.actions';
import {catchError, exhaustMap, map} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class StudyEffects {

  constructor(
    private actions$: Actions,
    private studyServices: StudyService,
  ) {}

  getAllStudy = createEffect(() => {
      return this.actions$.pipe(
        ofType(studyActions.getAllStudies),
        exhaustMap(action =>
          this.studyServices.getAllStudies().pipe(
            map(response => {
              // console.log('response:::', response)

              return studyActions.getAllStudiesSuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(studyActions.getAllStudiesFailure(error));
            }))
        )
      );
    }
  );

  getStudyTrades = createEffect(() => {
      return this.actions$.pipe(
        ofType(studyActions.setSelectedStudy),
        exhaustMap(action =>
          this.studyServices.getStudyTrades(action.id).pipe(
            map(response => {
              // console.log('response:::', response)

              return studyActions.setSelectedStudySuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(studyActions.setSelectedStudyFailure(error));
            }))
        )
      );
    }
  );

  createStudy = createEffect(() => {
      return this.actions$.pipe(
        ofType(studyActions.createStudy),
        exhaustMap(action =>
          this.studyServices.createStudy(action.study).pipe(
            map(response => {
              // console.log('response:::', response)

              return studyActions.createStudySuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(studyActions.createStudyFailure(error));
            }))
        )
      );
    }
  );

  updateStudy = createEffect(() => {
      return this.actions$.pipe(
        ofType(studyActions.updateStudy),
        exhaustMap(action =>
          this.studyServices.updateStudy(action._id,action.study).pipe(
            map(response => {
              // console.log('response:::', response)

              return studyActions.updateStudySuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(studyActions.updateStudyFailure(error));
            }))
        )
      );
    }
  )

  deleteStudy = createEffect(() => {
      return this.actions$.pipe(
        ofType(studyActions.deleteStudy),
        exhaustMap(action =>
          this.studyServices.deleteStudy(action._id).pipe(
            map(response => {
              // console.log('response:::', response)

              return studyActions.deleteStudySuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(studyActions.deleteStudyFailure(error));
            }))
        )
      );
    }
  );

  setSelectedStudyMarket = createEffect(() => {
      return this.actions$.pipe(
        ofType(studyActions.setSelectedStudyMarket),
        exhaustMap(action =>
          this.studyServices.getStudyMarket(action.marketId, action.selectionId).pipe(
            map(response => {
              // console.log('response:::', response)

              return studyActions.setSelectedStudyMarketSuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(studyActions.setSelectedStudyMarketFailure(error));
            }))
        )
      );
    }
  );

  compareStudy = createEffect(() => {
      return this.actions$.pipe(
        ofType(studyActions.compareStudy),
        exhaustMap(action =>
          this.studyServices.getMultipleStudyTrades(action.studyIds).pipe(
            map(response => {
              console.log('response:::', response)

              return studyActions.compareStudySuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(studyActions.compareStudyFailure(error));
            }))
        )
      );
    }
  );






}
