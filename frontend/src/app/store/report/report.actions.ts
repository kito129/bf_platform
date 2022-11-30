import {createAction, props} from '@ngrx/store'
import {Strategy} from '../../model/report/strategy'
import {NewTrade} from '../../model/report/new/newTrade'
import {SavedReport} from '../../model/report/new/savedReport'

export const GET_ALL_TRADES = '[Trades] Get all Trades'
export const GET_ALL_TRADES_SUCCESS = '[Trades] Get all Trades Success'
export const GET_ALL_TRADES_FAILURE = '[Trades] Get all Trades Failure'

export const CREATE_TRADE = '[Trades] Create Trade'
export const CREATE_TRADE_SUCCESS = '[Trades] Create Trade Success'
export const CREATE_TRADE_FAILURE = '[Trades] Create Trade Failure'

export const UPDATE_TRADE = '[Trades] Update Trade'
export const UPDATE_TRADE_SUCCESS = '[Trades] Update Trade Success'
export const UPDATE_TRADE_FAILURE = '[Trades] Update Trade Failure'

export const DELETE_TRADE = '[Trades] Delete Trade'
export const DELETE_TRADE_SUCCESS = '[Trades] Delete Trade Success'
export const DELETE_TRADE_FAILURE = '[Trades] Delete Trade Failure'

export const DELETE_MANY_TRADES = '[Trades] Delete Many Trades'
export const DELETE_MANY_TRADES_SUCCESS = '[Trades] Delete Many Trades Success'
export const DELETE_MANY_TRADES_FAILURE = '[Trades] Delete Many Trades Failure'

// -- STRATEGY --
export const GET_ALL_STRATEGY = '[Strategy] Get all Strategy'
export const GET_ALL_STRATEGY_SUCCESS = '[Strategy] Get all Strategy Success'
export const GET_ALL_STRATEGY_FAILURE = '[Strategy] Get all Strategy Failure'

export const CREATE_STRATEGY = '[Strategy] Create Strategy Trade'
export const CREATE_STRATEGY_SUCCESS = '[Strategy] Create Strategy Success'
export const CREATE_STRATEGY_FAILURE = '[Strategy] Create Strategy Failure'

export const UPDATE_STRATEGY = '[Strategy] Update Strategy Trade'
export const UPDATE_STRATEGY_SUCCESS = '[Strategy] Update Strategy Success'
export const UPDATE_STRATEGY_FAILURE = '[Strategy] Update Strategy Failure'

export const DELETE_STRATEGY = '[Strategy] Delete Strategy'
export const DELETE_STRATEGY_SUCCESS = '[Strategy] Delete Strategy Success'
export const DELETE_STRATEGY_FAILURE = '[Strategy] Delete Strategy Failure'

export const SET_SELECTED_STRATEGY = '[Strategy] Set selected Strategy'
export const SET_SELECTED_STRATEGY_SUCCESS = '[Strategy] Set selected Success'
export const SET_SELECTED_STRATEGY_FAILURE = '[Strategy] Set selected Failure'

export const SET_SELECTED_STRATEGY_TRADES = '[Strategy] Set selected Strategy Trades'
export const SET_SELECTED_STRATEGY_TRADES_SUCCESS = '[Strategy] Set selected Trades Success'
export const SET_SELECTED_STRATEGY_TRADES_FAILURE = '[Strategy] Set selected Trades Failure'

// -- NEW TRADE --
export const GET_ALL_NEW_TRADES = '[New Trade] Get all new Trades'
export const GET_ALL_NEW_TRADES_SUCCESS = '[New Trade] Get all new Trades Success'
export const GET_ALL_NEW_TRADES_FAILURE = '[New Trade] Get all new Trades Failure'

// -- COMPARE REPORT--
export const ADD_STRATEGY_IN_COMPARE = '[Strategy] Add Strategy in compare list'
export const REMOVE_STRATEGY_IN_COMPARE = '[Strategy] Remove Strategy in compare list'
export const RESET_STRATEGY_COMPARE = '[Strategy] Reset Strategy compare list'
export const COMPARE_STRATEGY = '[Strategy] Compare Strategy'

// -- SAVED REPORT --
export const GET_ALL_SAVED_REPORT = '[SavedReport] Get all Saved Report'
export const GET_ALL_SAVED_REPORT_SUCCESS = '[SavedReport] Get all Saved Report Success'
export const GET_ALL_SAVED_REPORT_FAILURE = '[SavedReport] Get all Saved Report Failure'

export const CREATE_SAVED_REPORT = '[SavedReport] Create Saved Report'
export const CREATE_SAVED_REPORT_SUCCESS = '[SavedReport] Create  Saved Report Success'
export const CREATE_SAVED_REPORT_FAILURE = '[SavedReport] Create  Saved Report Failure'

export const UPDATE_SAVED_REPORT = '[SavedReport] Udpate Saved Report'
export const UPDATE_SAVED_REPORT_SUCCESS = '[SavedReport] Udpate  Saved Report Success'
export const UPDATE_SAVED_REPORT_FAILURE = '[SavedReport] Udpate  Saved Report Failure'

export const DELETE_SAVED_REPORT = '[SavedReport] Delete Saved Report'
export const DELETE_SAVED_REPORT_SUCCESS = '[SavedReport] Delete  Saved Report Success'
export const DELETE_SAVED_REPORT_FAILURE = '[SavedReport] Delete  Saved Report Failure'

export const SET_SELECTED_SAVED_REPORT = '[SavedReport] Set selected Saved Report'
export const REMOVE_TRADES_FROM_SAVED_REPORT = '[SavedReport] Remove Trades from Saved Report'

// -- COMPARE SAVED REPORT --
export const ADD_SAVED_REPORT_IN_COMPARE = '[Saved Report] Add Saved Report in compare list'
export const REMOVE_SAVED_REPORT_IN_COMPARE = '[Saved Report] Remove Saved Report in compare list'
export const RESET_SAVED_REPORT_COMPARE = '[Saved Report] Reset Saved Report compare list'
export const COMPARE_SAVED_REPORT = '[Saved Report] Compare Saved Report'

// -- BACKTEST --
export const BACKTEST_CHANGE_MODE = '[Backtest] Change backtest mode state'


// CRUD TRADES

// get all trades
export const getAllTrades = createAction(
  GET_ALL_TRADES,
)

export const getAllTradesSuccess = createAction(
  GET_ALL_TRADES_SUCCESS,
  props<any>()
)

export const getAllTradesFailure = createAction(
  GET_ALL_TRADES_FAILURE,
  props<any>()
)

// create trade
export const createTrade = createAction(
  CREATE_TRADE,
  props<{trade: NewTrade}>()
)
export const createTradeSuccess = createAction(
  CREATE_TRADE_SUCCESS,
  props<any>()
)
export const createTradeFailure = createAction(
  CREATE_TRADE_FAILURE,
  props<any>()
)

// update trade
export const updateTrade = createAction(
  UPDATE_TRADE,
  props<{ trade: NewTrade }>()
)
export const updateTradeSuccess = createAction(
  UPDATE_TRADE_SUCCESS,
  props<any>()
)
export const updateTradeFailure = createAction(
  UPDATE_TRADE_FAILURE,
  props<any>()
)

// delete
export const deleteTrade = createAction(
  DELETE_TRADE,
  props<{ _id: string }>()
)
export const deleteTradeSuccess = createAction(
  DELETE_TRADE_SUCCESS,
  props<any>()
)
export const deleteTradeFailure = createAction(
  DELETE_TRADE_FAILURE,
  props<any>()
)

// delete many
export const deleteManyTrades = createAction(
  DELETE_MANY_TRADES,
  props<{ _ids: string[] }>()
)
export const deleteManyTradesSuccess = createAction(
  DELETE_MANY_TRADES_SUCCESS,
  props<any>()
)
export const deleteManyTradesFailure = createAction(
  DELETE_MANY_TRADES_FAILURE,
  props<any>()
)


// CRUD STRATEGY

// get all trades
export const getAllStrategies = createAction(
  GET_ALL_STRATEGY,
)
export const getAllStrategySuccess = createAction(
  GET_ALL_STRATEGY_SUCCESS,
  props<any>()
)
export const getAllStrategyFailure = createAction(
  GET_ALL_STRATEGY_FAILURE,
  props<any>()
)

// create strategy
export const createStrategy = createAction(
  CREATE_STRATEGY,
  props<{strategy: Strategy}>()
)
export const createStrategySuccess = createAction(
  CREATE_STRATEGY_SUCCESS,
  props<any>()
)
export const createStrategyFailure = createAction(
  CREATE_STRATEGY_FAILURE,
  props<any>()
)

// update strategy
export const updateStrategy = createAction(
  UPDATE_STRATEGY,
  props<{ _id: string, strategy: Strategy }>()
)

export const updateStrategySuccess = createAction(
  UPDATE_STRATEGY_SUCCESS,
  props<any>()
)

export const updateStrategyFailure = createAction(
  UPDATE_STRATEGY_FAILURE,
  props<any>()
)

// delete strategy
export const deleteStrategy = createAction(
  DELETE_STRATEGY,
  props<{ _id: string }>()
)
export const deleteStrategySuccess = createAction(
  DELETE_STRATEGY_SUCCESS,
  props<any>()
)
export const deleteStrategyFailure = createAction(
  DELETE_STRATEGY_FAILURE,
  props<any>()
)

// STRATEGY SELECT AND SELECTED TRADES

// set selected strategy
export const setSelectedStrategy = createAction(
  SET_SELECTED_STRATEGY,
  props<{ _id: string }>()
)
export const setSelectedStrategySuccess = createAction(
  SET_SELECTED_STRATEGY_SUCCESS,
  props<{ _id: string, strategy: Strategy }>()
)
export const setSelectedStrategyFailure = createAction(
  SET_SELECTED_STRATEGY_FAILURE,
  props<any>()
)

// set selected strategy trade
export const setSelectedStrategyTrades = createAction(
  SET_SELECTED_STRATEGY_TRADES,
  props<{ _id: string }>()
)
export const setSelectedStrategyTradesSuccess = createAction(
  SET_SELECTED_STRATEGY_TRADES_SUCCESS,
  props<{ _id: string, strategy: Strategy }>()
)
export const setSelectedStrategyTradesFailure = createAction(
  SET_SELECTED_STRATEGY_TRADES_FAILURE,
  props<any>()
)

// NEW TRADES

// get all newTrades
export const getAllNewTrades = createAction(
  GET_ALL_NEW_TRADES,
)
export const getAllNewTradesSuccess = createAction(
  GET_ALL_NEW_TRADES_SUCCESS,
  props<any>()
)
export const getAllNewTradesFailure = createAction(
  GET_ALL_NEW_TRADES_FAILURE,
  props<any>()
)


/*
**  COMPARE ACTIONS
 */

// compare CRUD
export const addStrategyInCompare = createAction(
  ADD_STRATEGY_IN_COMPARE,
  props<{strategyId: string, first: boolean}>()
)

export const removeStrategyInCompare = createAction(
  REMOVE_STRATEGY_IN_COMPARE,
  props<{strategyId: string}>()
)
export const resetStrategyCompare = createAction(
  RESET_STRATEGY_COMPARE,
)

// compare actions
export const compareStrategy = createAction(
  COMPARE_STRATEGY,
)


/*
**  COMPARE SAVED REPORT ACTIONS
 */
export const addSavedReportInCompare = createAction(
  ADD_SAVED_REPORT_IN_COMPARE,
  props<{savedReportId: string, first: boolean}>()
)
export const removeSavedReportInCompare = createAction(
  REMOVE_SAVED_REPORT_IN_COMPARE,
  props<{savedReportId: string}>()
)
export const resetSavedReportCompare = createAction(
  RESET_SAVED_REPORT_COMPARE,
)

// compare actions
export const compareSavedReport = createAction(
  COMPARE_SAVED_REPORT,
)

/*
**  SAVED REPORT
 */

// get all
export const getAllSavedReport = createAction(
  GET_ALL_SAVED_REPORT,
)

export const getAllSavedReportSuccess = createAction(
  GET_ALL_SAVED_REPORT_SUCCESS,
  props<any>()
)

export const getAllSavedReportFailure = createAction(
  GET_ALL_SAVED_REPORT_FAILURE,
  props<any>()
)

// create trade
export const createSavedReport = createAction(
  CREATE_SAVED_REPORT,
  props<{savedReport: SavedReport}>()
)
export const createSavedReportSuccess = createAction(
  CREATE_SAVED_REPORT_SUCCESS,
  props<any>()
)
export const createSavedReportFailure = createAction(
  CREATE_SAVED_REPORT_FAILURE,
  props<any>()
)

// update
export const updateSavedReport = createAction(
  UPDATE_SAVED_REPORT,
  props<{ _id: string, savedReport: SavedReport }>()
)
export const updateSavedReportSuccess = createAction(
  UPDATE_SAVED_REPORT_SUCCESS,
  props<any>()
)
export const updateSavedReportFailure = createAction(
  UPDATE_SAVED_REPORT_FAILURE,
  props<any>()
)

// delete
export const deleteSavedReport = createAction(
  DELETE_SAVED_REPORT,
  props<{ _id: string }>())

export const deleteSavedReportSuccess = createAction(
  DELETE_SAVED_REPORT_SUCCESS,
  props<any>()
)
export const deleteSavedReportFailure = createAction(
  DELETE_SAVED_REPORT_FAILURE,
  props<any>()
)

// set selected savedReport
export const setSelectedSavedReport = createAction(
  SET_SELECTED_SAVED_REPORT,
  props<{ _id: string }>()
)

// remove trades from saved report
export const removeTradesFromSavedReport = createAction(
  REMOVE_TRADES_FROM_SAVED_REPORT,
  props<{ savedReportId: string, _idS: string[] }>())

/*
**  BACKTEST
 */
export const backtestChangeMode = createAction(
  BACKTEST_CHANGE_MODE,
)

