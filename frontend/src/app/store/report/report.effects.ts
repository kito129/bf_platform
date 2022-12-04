import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ReportService} from '../../services/report.service';
import {catchError, exhaustMap, map} from 'rxjs/operators';
import {of} from 'rxjs';
import * as reportActions from './report.actions';
import {NewReportService} from '../../services/new-report.service';
import {BacktestInterface} from '../../model/backtest/backtestInterface';

@Injectable()
export class ReportEffects {

  constructor(
    private actions$: Actions,
    private reportServices: ReportService,
    private newReportServices: NewReportService,
  ) {}

// -- TRADE --
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

// -- TRADES --
  deleteTrades$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(reportActions.deleteManyTrades),
        exhaustMap(action =>
          this.reportServices.deleteManyTrades(action._ids).pipe(
            map(response => {
              // console.log('response:::', response)

              return reportActions.deleteManyTradesSuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(reportActions.deleteManyTradesFailure(error));
            }))
        )
      );
    }
  );

// -- STRATEGY --
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

  updateNewTrade$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(reportActions.updateTrade),
        exhaustMap(action =>
          this.newReportServices.updateNewTrade(action.trade).pipe(
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

// -- SAVED REPORT --
  getAllSavedReport$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(reportActions.getAllSavedReport),
        exhaustMap(action =>
          this.reportServices.getAllSavedReport().pipe(
            map(response => {
              // console.log('response:::', response)

              return reportActions.getAllSavedReportSuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(reportActions.getAllSavedReportFailure(error));
            }))
        )
      );
    }
  );

  createSavedReport$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(reportActions.createSavedReport),
        exhaustMap(action =>
          this.reportServices.createSavedReport(action.savedReport).pipe(
            map(response => {
              // console.log('response:::', response)

              return reportActions.createSavedReportSuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(reportActions.createSavedReportFailure(error));
            }))
        )
      );
    }
  );

  updateSavedReport$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(reportActions.updateSavedReport),
        exhaustMap(action =>
          this.reportServices.updateSavedReport(action._id,action.savedReport).pipe(
            map(response => {
              // console.log('response:::', response)

              return reportActions.updateSavedReportSuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(reportActions.updateSavedReportFailure(error));
            }))
        )
      );
    }
  );

  deleteSavedReport$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(reportActions.deleteSavedReport),
        exhaustMap(action =>
          this.reportServices.deleteSavedReport(action._id).pipe(
            map(response => {
              // console.log('response:::', response)

              return reportActions.deleteSavedReportSuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(reportActions.deleteSavedReportFailure(error));
            }))
        )
      );
    }
  );

  // -- BACKTEST --

  getAllBacktest$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(reportActions.backtestGetAll),
        exhaustMap(action =>
          this.reportServices.getAllBacktests().pipe(
            map(response => {
              // console.log('response:::', response)

              return reportActions.backtestGetAllSuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(reportActions.backtestGetAllFailure(error));
            }))
        )
      );
    }
  );

  createBacktest$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(reportActions.backtestCreate),
        exhaustMap(action =>
        this.reportServices.createBacktest(action.backtest, action.trades).pipe(
          map(response => {
            // console.log('response:::', response)

            return reportActions.backtestCreateSuccess({response})
          }),
          catchError((error: any) => {
            console.log('response:::', error)
            return of(reportActions.backtestCreateFailure(error));
          }))
        )
      );
    }
  );

  updateBacktest$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(reportActions.backtestUpdate),
        exhaustMap(action =>
          this.reportServices.updateBacktest(action._id,action.backtest).pipe(
            map(response => {
              // console.log('response:::', response)

              return reportActions.backtestUpdateSuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(reportActions.backtestUpdateFailure(error));
            }))
        )
      );
    }
  );

  deleteBacktest$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(reportActions.backtestDelete),
        exhaustMap(action =>
          this.reportServices.deleteBacktest(action._id).pipe(
            map(response => {
              // console.log('response:::', response)

              return reportActions.backtestDeleteSuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(reportActions.backtestDeleteFailure(error));
            }))
        )
      );
    }
  );

  // -- BACKTEST TRADE --
  getAllBacktestTrades$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(reportActions.backtestTradeGetAll),
        exhaustMap(action =>
          this.reportServices.getAllBacktestsTrades().pipe(
            map(response => {
              // console.log('response:::', response)

              return reportActions.backtestTradeGetAllSuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(reportActions.backtestTradeGetAllFailure(error));
            }))
        )
      );
    }
  );

  createBacktestTrades$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(reportActions.backtestTradeCreate),
        exhaustMap(action =>
          this.reportServices.createBacktestTrades(action.trades).pipe(
            map(response => {
              // console.log('response:::', response)

              return reportActions.backtestTradeCreateSuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(reportActions.backtestTradeCreateFailure(error));
            }))
        )
      );
    }
  );

  deleteBacktestTrades$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(reportActions.backtestTradeDelete),
        exhaustMap(action =>
          this.reportServices.deleteBacktestTrades(action.tradeIds).pipe(
            map(response => {
              // console.log('response:::', response)

              return reportActions.backtestTradeDeleteSuccess({response})
            }),
            catchError((error: any) => {
              console.log('response:::', error)
              return of(reportActions.backtestTradeDeleteFailure(error));
            }))
        )
      );
    }
  );


}
