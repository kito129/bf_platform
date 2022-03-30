import { createAction, props } from '@ngrx/store';

// getMarketAdvancedList
export const GET_MARKET_ADVANCED_LIST = '[Markets Advanced] Get Markets advanced list ';
export const GET_MARKET_ADVANCED_LIST_SUCCESS = '[Markets Advanced] Get Markets advanced list Success';
export const GET_MARKET_ADVANCED_LIST_FAILURE = '[Markets Advanced] Get Markets advanced list Failure';

// detail by marketId
export const GET_MARKET_ADVANCED_DETAIL = '[Market Advanced] Get market Advanced detail';
export const GET_MARKET_ADVANCED_DETAIL_SUCCESS = '[Market Advanced] Get market Advanced detail Success';
export const GET_MARKET_ADVANCED_DETAIL_FAILURE = '[Market Advanced] Get market Advanced detail Failure';

// market metalist advanced
export const GET_MARKET_ADVANCED_METALIST = '[Market Advanced] Get market meta list Advanced';
export const GET_MARKET_ADVANCED_METALIST_SUCCESS = '[Market Advanced] Get market meta list Advanced Success';
export const GET_MARKET_ADVANCED_METALIST_FAILURE = '[Market Advanced] Get market meta list Advanced Failure';


// set and get selected market actions
export const getMarketsAdvancedList = createAction(
  GET_MARKET_ADVANCED_LIST,
);

export const getMarketsAdvancedListSuccess = createAction(
  GET_MARKET_ADVANCED_LIST_SUCCESS,
  props<any>()
);

export const getMarketsAdvancedListFailure = createAction(
  GET_MARKET_ADVANCED_LIST_FAILURE,
  props<any>()
);


// set and get selected market actions
export const getMarketAdvancedDetail = createAction(
  GET_MARKET_ADVANCED_DETAIL,
  props<{ marketId: string}>()
);

export const getMarketAdvancedDetailSuccess = createAction(
  GET_MARKET_ADVANCED_DETAIL_SUCCESS,
  props<any>()
);

export const getMarketAdvancedDetailFailure = createAction(
  GET_MARKET_ADVANCED_DETAIL_FAILURE,
  props<any>()
);

// set and get market metalist
export const getMarketMetalistAdvanced = createAction(
  GET_MARKET_ADVANCED_METALIST,
);

export const getMarketMetalistAdvancedSuccess = createAction(
  GET_MARKET_ADVANCED_METALIST_SUCCESS,
  props<any>()
);

export const getMarketMetalistAdvancedFailure = createAction(
  GET_MARKET_ADVANCED_METALIST_FAILURE,
  props<any>()
);

