import {createAction, props} from "@ngrx/store";
import {Trade} from "../../model/report/trade";
import {Strategy} from "../../model/report/strategy";


export const GET_ALL_TRADES = '[Trades] Get all Trades';
export const GET_ALL_TRADES_SUCCESS = '[Trades] Get all Trades Success';
export const GET_ALL_TRADES_FAILURE = '[Trades] Get all Trades Failure';

export const CREATE_TRADE = '[Trades] Create Trade';
export const CREATE_TRADE_SUCCESS = '[Trades] Create Trade Success';
export const CREATE_TRADE_FAILURE = '[Trades] Create Trade Failure';

export const UPDATE_TRADE = '[Trades] Update Trade';
export const UPDATE_TRADE_SUCCESS = '[Trades] Update Trade Success';
export const UPDATE_TRADE_FAILURE = '[Trades] Update Trade Failure';

export const DELETE_TRADE = '[Trades] Delete Trade';
export const DELETE_TRADE_SUCCESS = '[Trades] Delete Trade Success';
export const DELETE_TRADE_FAILURE = '[Trades] Delete Trade Failure';

export const GET_ALL_STRATEGY = '[Strategy] Get all Strategy';
export const GET_ALL_STRATEGY_SUCCESS = '[Strategy] Get all Strategy Success';
export const GET_ALL_STRATEGY_FAILURE = '[Strategy] Get all Strategy Failure';

export const CREATE_STRATEGY = '[Strategy] Create Strategy Trade';
export const CREATE_STRATEGY_SUCCESS = '[Strategy] Create Strategy Success';
export const CREATE_STRATEGY_FAILURE = '[Strategy] Create Strategy Failure';

export const UPDATE_STRATEGY = '[Strategy] Update Strategy Trade';
export const UPDATE_STRATEGY_SUCCESS = '[Strategy] Update Strategy Success';
export const UPDATE_STRATEGY_FAILURE = '[Strategy] Update Strategy Failure';

export const DELETE_STRATEGY = '[Strategy] Delete Strategy';
export const DELETE_STRATEGY_SUCCESS = '[Strategy] Delete Strategy Success';
export const DELETE_STRATEGY_FAILURE = '[Strategy] Delete Strategy Failure';

export const SET_SELECTED_STRATEGY = '[Strategy] Set selected Strategy';
export const SET_SELECTED_STRATEGY_SUCCESS = '[Strategy] Set selected Success';
export const SET_SELECTED_STRATEGY_FAILURE = '[Strategy] Set selected Failure';

export const SET_SELECTED_STRATEGY_TRADES = '[Strategy] Set selected Strategy Trades';
export const SET_SELECTED_STRATEGY_TRADES_SUCCESS = '[Strategy] Set selected Trades Success';
export const SET_SELECTED_STRATEGY_TRADES_FAILURE = '[Strategy] Set selected Trades Failure';

// -- NEW TRADE --
export const GET_ALL_NEW_TRADES = '[New Trade] Get all new Trades';
export const GET_ALL_NEW_TRADES_SUCCESS = '[New Trade] Get all new Trades Success';
export const GET_ALL_NEW_TRADES_FAILURE = '[New Trade] Get all new Trades Failure';



// CRUD TRADES

// get all trades
export const getAllTrades = createAction(
  GET_ALL_TRADES,
);

export const getAllTradesSuccess = createAction(
  GET_ALL_TRADES_SUCCESS,
  props<any>()
);

export const getAllTradesFailure = createAction(
  GET_ALL_TRADES_FAILURE,
  props<any>()
);

// create trade
export const createTrade = createAction(
  CREATE_TRADE,
  props<{trade: Trade}>()
);

export const createTradeSuccess = createAction(
  CREATE_TRADE_SUCCESS,
  props<any>()
);

export const createTradeFailure = createAction(
  CREATE_TRADE_FAILURE,
  props<any>()
);


// update trade
export const updateTrade = createAction(
  UPDATE_TRADE,
  props<{ _id: string, trade: Trade }>()
);

export const updateTradeSuccess = createAction(
  UPDATE_TRADE_SUCCESS,
  props<any>()
);

export const updateTradeFailure = createAction(
  UPDATE_TRADE_FAILURE,
  props<any>()
);


// delete runner note
export const deleteTrade = createAction(
  DELETE_TRADE,
  props<{ _id: string }>()
);

export const deleteTradeSuccess = createAction(
  DELETE_TRADE_SUCCESS,
  props<any>()
);

export const deleteTradeFailure = createAction(
  DELETE_TRADE_FAILURE,
  props<any>()
);



// CRUD STRATEGY

// get all trades
export const getAllStrategies = createAction(
  GET_ALL_STRATEGY,
);

export const getAllStrategySuccess = createAction(
  GET_ALL_STRATEGY_SUCCESS,
  props<any>()
);

export const getAllStrategyFailure = createAction(
  GET_ALL_STRATEGY_FAILURE,
  props<any>()
);

// create trade
export const createStrategy = createAction(
  CREATE_STRATEGY,
  props<{strategy: Strategy}>()
);

export const createStrategySuccess = createAction(
  CREATE_STRATEGY_SUCCESS,
  props<any>()
);

export const createStrategyFailure = createAction(
  CREATE_STRATEGY_FAILURE,
  props<any>()
);


// update trade
export const updateStrategy = createAction(
  UPDATE_STRATEGY,
  props<{ _id: string, strategy: Strategy }>()
);

export const updateStrategySuccess = createAction(
  UPDATE_STRATEGY_SUCCESS,
  props<any>()
);

export const updateStrategyFailure = createAction(
  UPDATE_STRATEGY_FAILURE,
  props<any>()
);


// delete runner note
export const deleteStrategy = createAction(
  DELETE_STRATEGY,
  props<{ _id: string }>()
);

export const deleteStrategySuccess = createAction(
  DELETE_STRATEGY_SUCCESS,
  props<any>()
);

export const deleteStrategyFailure = createAction(
  DELETE_STRATEGY_FAILURE,
  props<any>()
);


// STRATEGY SELECT AND SELECTED TRADES

// set selected strategy
export const setSelectedStrategy = createAction(
  SET_SELECTED_STRATEGY,
  props<{ _id: string }>()
);

export const setSelectedStrategySuccess = createAction(
  SET_SELECTED_STRATEGY_SUCCESS,
  props<{ _id: string, strategy: Strategy }>()
);

export const setSelectedStrategyFailure = createAction(
  SET_SELECTED_STRATEGY_FAILURE,
  props<any>()
);

// set selected strategy trade
export const setSelectedStrategyTrades = createAction(
  SET_SELECTED_STRATEGY_TRADES,
  props<{ _id: string }>()
);

export const setSelectedStrategyTradesSuccess = createAction(
  SET_SELECTED_STRATEGY_TRADES_SUCCESS,
  props<{ _id: string, strategy: Strategy }>()
);

export const setSelectedStrategyTradesFailure = createAction(
  SET_SELECTED_STRATEGY_TRADES_FAILURE,
  props<any>()
);


// NEW TRADES
// get all NEW trades
export const getAllNewTrades = createAction(
  GET_ALL_NEW_TRADES,
);

export const getAllNewTradesSuccess = createAction(
  GET_ALL_NEW_TRADES_SUCCESS,
  props<any>()
);

export const getAllNewTradesFailure = createAction(
  GET_ALL_NEW_TRADES_FAILURE,
  props<any>()
);



