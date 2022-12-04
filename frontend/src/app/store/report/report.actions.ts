import {createAction, props} from '@ngrx/store'
import {Strategy} from '../../model/report/strategy/strategy'
import {Trade} from '../../model/report/trade/trade'
import {SavedReport} from '../../model/report/savedReport'
import {BacktestInterface} from '../../model/backtest/backtestInterface';

// -- TRADE --
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
export const GET_ALL_NEW_TRADES = '[New Trade] Get all trade Trades'
export const GET_ALL_NEW_TRADES_SUCCESS = '[New Trade] Get all trade Trades Success'
export const GET_ALL_NEW_TRADES_FAILURE = '[New Trade] Get all trade Trades Failure'

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

export const BACKTEST_ADD_TRADE = '[Backtest] Add trade in backtest list'
export const BACKTEST_REMOVE_TRADE = '[Backtest] Remove trade in backtest list'

export const BACKTEST_TRADES_GET_ALL = '[Backtest trade] Get all backtest trades in DB'
export const BACKTEST_TRADES_GET_ALL_SUCCESS = '[Backtest]  Get all backtest trades in DB Success'
export const BACKTEST_TRADES_GET_ALL_FAILURE = '[Backtest] Get all backtest trades in DB Failure'

export const BACKTEST_TRADES_CREATE = '[Backtest trade] Create backtest trades in DB'
export const BACKTEST_TRADES_CREATE_SUCCESS = '[Backtest]  Create backtest trades in DB Success'
export const BACKTEST_TRADES_CREATE_FAILURE = '[Backtest] Create backtest trades in DB Failure'

export const BACKTEST_TRADES_DELETE = '[Backtest trade] Delete backtest trades in DB'
export const BACKTEST_TRADES_DELETE_SUCCESS = '[Backtest] Delete backtest trades in DB Success'
export const BACKTEST_TRADES_DELETE_FAILURE = '[Backtest] Delete backtest trades in DB Failure'


export const BACKTEST_GET_ALL = '[Backtest] Get all backtest'
export const BACKTEST_GET_ALL_SUCCESS = '[Backtest] Get all backtest Success'
export const BACKTEST_GET_ALL_FAILURE = '[Backtest] CGet all backtest Failure'


export const BACKTEST_CREATE = '[Backtest] Create a new back test from back test data and list'
export const BACKTEST_CREATE_SUCCESS = '[Backtest] Create a new back test from back test data and list Success'
export const BACKTEST_CREATE_FAILURE = '[Backtest] Create a new back test from back test data and list Failure'

export const BACKTEST_UPDATE = '[Backtest] Update a back test from back test data and list'
export const BACKTEST_UPDATE_SUCCESS = '[Backtest] Update a back test from back test data and list Success'
export const BACKTEST_UPDATE_FAILURE = '[Backtest] Update a back test from back test data and list Failure'

export const BACKTEST_DELETE = '[Backtest] Delete a back test '
export const BACKTEST_DELETE_SUCCESS = '[Backtest] Delete a back test Success'
export const BACKTEST_DELETE_FAILURE = '[Backtest] Delete a back test Failure'

// -- BACKTEST SELECTED
export const BACKTEST_SET_SELECTED= '[Backtest] Set selected back test '
export const BACKTEST_UNSET_SELECTED = '[Backtest] Unset selected a back test Success'


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
  props<{trade: Trade}>()
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
  props<{ trade: Trade }>()
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
// backtest mode On off
export const backtestChangeMode = createAction(
  BACKTEST_CHANGE_MODE,
)

// trade in backtest
export const backtestAddTrade = createAction(
  BACKTEST_ADD_TRADE,
  props<{ trade: Trade}>()
)
export const backtestRemoveTrade = createAction(
  BACKTEST_REMOVE_TRADE,
  props<{ _id: string}>()
)

// CRUD backtest trade

// create backtest trade
export const backtestTradeGetAll = createAction(
  BACKTEST_TRADES_GET_ALL,
)
export const backtestTradeGetAllSuccess = createAction(
  BACKTEST_TRADES_GET_ALL_SUCCESS,
  props<any>()
)
export const backtestTradeGetAllFailure = createAction(
  BACKTEST_TRADES_GET_ALL_FAILURE,
  props<any>()
)

// create backtest trade
export const backtestTradeCreate = createAction(
  BACKTEST_TRADES_CREATE,
  props<{ trades: Trade[]}>()
)
export const backtestTradeCreateSuccess = createAction(
  BACKTEST_TRADES_CREATE_SUCCESS,
  props<any>()
)
export const backtestTradeCreateFailure = createAction(
  BACKTEST_TRADES_CREATE_FAILURE,
  props<any>()
)

// delete backtest trade
export const backtestTradeDelete = createAction(
  BACKTEST_TRADES_DELETE,
  props<{ trades: Trade[], tradeIds: string[]}>()
)
export const backtestTradeDeleteSuccess = createAction(
  BACKTEST_TRADES_DELETE_SUCCESS,
  props<any>()
)
export const backtestTradeDeleteFailure = createAction(
  BACKTEST_TRADES_DELETE_FAILURE,
  props<any>()
)

// get all backtest
export const backtestGetAll = createAction(
  BACKTEST_GET_ALL,
)
export const backtestGetAllSuccess = createAction(
  BACKTEST_GET_ALL_SUCCESS,
  props<any>()
)
export const backtestGetAllFailure = createAction(
  BACKTEST_GET_ALL_FAILURE,
  props<any>()
)

// create backtest
export const backtestCreate = createAction(
  BACKTEST_CREATE,
  props<{ backtest: BacktestInterface, trades: Trade[]}>()
)
export const backtestCreateSuccess = createAction(
  BACKTEST_CREATE_SUCCESS,
  props<any>()
)
export const backtestCreateFailure = createAction(
  BACKTEST_CREATE_FAILURE,
  props<any>()
)

// update backtest
export const backtestUpdate = createAction(
  BACKTEST_UPDATE,
  props<{ _id: string, backtest: BacktestInterface }>()
)
export const backtestUpdateSuccess = createAction(
  BACKTEST_UPDATE_SUCCESS,
  props<any>()
)
export const backtestUpdateFailure = createAction(
  BACKTEST_UPDATE_FAILURE,
  props<any>()
)

// delete backtest
export const backtestDelete = createAction(
  BACKTEST_DELETE,
  props<{ _id: string}>()
)
export const backtestDeleteSuccess = createAction(
  BACKTEST_DELETE_SUCCESS,
  props<any>()
)
export const backtestDeleteFailure = createAction(
  BACKTEST_DELETE_FAILURE,
  props<any>()
)

// selected backtest
export const backtestSetSelected = createAction(
  BACKTEST_SET_SELECTED,
  props<{ backtest: BacktestInterface, _id: string }>()
)

export const backtestUnSelected = createAction(
  BACKTEST_UNSET_SELECTED,
)

