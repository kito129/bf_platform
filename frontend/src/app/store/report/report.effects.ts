import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ReportService} from "../../services/report.service";
import {catchError, exhaustMap, map} from "rxjs/operators";
import {of} from "rxjs";
import * as reportActions from './report.actions';
import {NewReportService} from '../../services/new-report.service';

@Injectable()
export class ReportEffects {

  constructor(
    private actions$: Actions,
    private reportServices: ReportService,
    private newReportServices: NewReportService,
  ) {}

  getAllTrades = createEffect(() => {
      return this.actions$.pipe(
        ofType(reportActions.getAllTrades),
        exhaustMap(action =>
          this.reportServices.getAllTrades().pipe(
            map(response => {
              // console.log('response:::', response)

              return reportActions.getAllTradesSuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(reportActions.getAllTradesFailure(error));
            }))
        )
      );
    }
  );

  createTrade$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(reportActions.createTrade),
        exhaustMap(action =>
          this.reportServices.createTrade(action.trade).pipe(
            map(response => {
              // console.log('response:::', response)

              return reportActions.createTradeSuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(reportActions.createTradeFailure(error));
            }))
        )
      );
    }
  );

  updateTrade$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(reportActions.updateTrade),
        exhaustMap(action =>
          this.reportServices.updateTrade(action._id,action.trade).pipe(
            map(response => {
              // console.log('response:::', response)

              return reportActions.updateTradeSuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(reportActions.updateTradeFailure(error));
            }))
        )
      );
    }
  );

  deleteTrade$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(reportActions.deleteTrade),
        exhaustMap(action =>
          this.reportServices.deleteTrade(action._id).pipe(
            map(response => {
              // console.log('response:::', response)

              return reportActions.deleteTradeSuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(reportActions.deleteTradeFailure(error));
            }))
        )
      );
    }
  );


  getAllStrategy$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(reportActions.getAllStrategies),
        exhaustMap(action =>
          this.reportServices.getAllStrategy().pipe(
            map(response => {
              // console.log('response:::', response)

              return reportActions.getAllStrategySuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(reportActions.getAllStrategyFailure(error));
            }))
        )
      );
    }
  );

  createStrategy$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(reportActions.createStrategy),
        exhaustMap(action =>
          this.reportServices.createStrategy(action.strategy).pipe(
            map(response => {
              // console.log('response:::', response)

              return reportActions.createStrategySuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(reportActions.createStrategyFailure(error));
            }))
        )
      );
    }
  );

  updateStrategy$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(reportActions.updateStrategy),
        exhaustMap(action =>
          this.reportServices.updateStrategy(action._id,action.strategy).pipe(
            map(response => {
              // console.log('response:::', response)

              return reportActions.updateStrategySuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(reportActions.updateStrategyFailure(error));
            }))
        )
      );
    }
  );

  deleteStrategy$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(reportActions.deleteStrategy),
        exhaustMap(action =>
          this.reportServices.deleteStrategy(action._id).pipe(
            map(response => {
              // console.log('response:::', response)

              return reportActions.deleteStrategySuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(reportActions.deleteStrategyFailure(error));
            }))
        )
      );
    }
  );

  // -- NEW TRADE --
  getAllNewTrades = createEffect(() => {
      return this.actions$.pipe(
        ofType(reportActions.getAllNewTrades),
        exhaustMap(action =>
          this.newReportServices.getAllNewTrades().pipe(
            map(response => {
              // console.log('response:::', response)

              return reportActions.getAllNewTradesSuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(reportActions.getAllNewTradesFailure(error));
            }))
        )
      );
    }
  );

}
