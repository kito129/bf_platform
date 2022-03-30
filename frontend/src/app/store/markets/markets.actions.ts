import { createAction, props } from '@ngrx/store';
import {BasketFilter, Filter} from '../../model/market/filter/basketFilter';
import {Note} from '../../model/note/note';
import {
  CREATE_RUNNER_NOTE,
  CREATE_RUNNER_NOTE_FAILURE,
  CREATE_RUNNER_NOTE_SUCCESS,
  DELETE_RUNNER_NOTE, DELETE_RUNNER_NOTE_FAILURE,
  DELETE_RUNNER_NOTE_SUCCESS,
  GET_ALL_RUNNERS_NOTES,
  GET_ALL_RUNNERS_NOTES_FAILURE,
  GET_ALL_RUNNERS_NOTES_SUCCESS,
  UPDATE_RUNNER_NOTE,
  UPDATE_RUNNER_NOTE_FAILURE,
  UPDATE_RUNNER_NOTE_SUCCESS
} from '../notes/notes.actions';
import {FilterBasket} from '../../model/market/filter/filterBasket';

// create the action of markets object
export const GET_MARKETS = '[Markets] Get Markets from DB';
export const GET_MARKETS_SUCCESS = '[Markets] Get Markets from DB Success';
export const GET_MARKETS_FAILURE = '[Markets] Get Markets from DB Failure';

export const GET_MARKET_DETAIL = '[Markets] Get market ID for detail';
export const GET_MARKET_DETAIL_SUCCESS = '[Markets] Get market ID for detail Success';
export const GET_MARKET_DETAIL_FAILURE = '[Markets] Get market ID for detail Failure';

export const RESET_MARKET_DETAIL = '[Markets] Reset market detail status';

export const GET_MARKETS_OF_SAME_MATCH = '[Markets] Get same match markets';
export const GET_MARKET_OF_SAME_MATCH_SUCCESS = '[Markets] Get same match markets Success';
export const GET_MARKET_OF_SAME_MATCH_FAILURE = '[Markets] Get same match markets Failure';

// market metalist advanced
export const GET_MARKET_BASIC_METALIST = '[Market Basic] Get market meta list Basic';
export const GET_MARKET_BASIC_METALIST_SUCCESS = '[Market Basic] Get market meta list Basic Success';
export const GET_MARKET_BASIC_METALIST_FAILURE = '[Market Basic] Get market meta list Basic Failure';

// market metalist filter
export const SET_MARKET_FILTER = '[Market MetaList] Update the value of the filter';
export const RESET_MARKET_FILTER = '[Market MetaList] Reset the value of the filter';

export const SET_MARKET_IN_REMOVED = '[Market MetaList] Add market in removed list';
export const RESET_MARKET_IN_REMOVED = '[Market MetaList] Reset removed list';



// FILTER CRUDS

export const SET_SELECTED_FILTER_BASKET = '[Filter Basket] Set the id value of the filter basket saved';
export const RESET_SELECTED_FILTER_BASKET = '[Market MetaList] Reset the id value of the filter basket saved';


export const GET_ALL_FILTER_BASKET = '[Filter Basket] Get all Filter Basket Notes';
export const GET_ALL_FILTER_BASKET_SUCCESS = '[Filter Basket] Get all Filter Basket Success';
export const GET_ALL_FILTER_BASKET_FAILURE = '[Filter Basket] Get all Filter Basket Failure';

export const CREATE_FILTER_BASKET = '[Filter Basket] Create runner Note Id';
export const CREATE_FILTER_BASKET_SUCCESS = '[Filter Basket] Create Filter Basket Success';
export const CREATE_FILTER_BASKET_FAILURE = '[Filter Basket] Create  Filter Basket Failure';

export const UPDATE_FILTER_BASKET = '[Filter Basket] Update runner Note';
export const UPDATE_FILTER_BASKET_SUCCESS = '[Filter Basket] Update Filter Basket Success';
export const UPDATE_FILTER_BASKET_FAILURE = '[Filter Basket] Update Filter Basket Failure';

export const DELETE_FILTER_BASKET =  '[Filter Basket] Delete Filter Basket';
export const DELETE_FILTER_BASKET_SUCCESS = '[Filter Basket] Delete Filter Basket Success';
export const DELETE_FILTER_BASKET_FAILURE = '[Filter Basket] Delete Filter Basket Failure';

// markets actions
export const getAllMarkets = createAction(
  GET_MARKETS,
);

export const getMarketsSuccess = createAction(
  GET_MARKETS_SUCCESS,
  props<any>()
);

export const getMarketsFailure = createAction(
  GET_MARKETS_FAILURE,
  props<{ any }>()
);

// set and get selected market actions
export const getMarketDetail = createAction(
  GET_MARKET_DETAIL,
  props<{ marketId: string}>()
);

export const getMarketDetailSuccess = createAction(
  GET_MARKET_DETAIL_SUCCESS,
  props<any>()
);

export const getMarketDetailFailure = createAction(
  GET_MARKET_DETAIL_FAILURE,
  props<any>()
);

export const resetMarketDetail = createAction(
  RESET_MARKET_DETAIL,
);

// get markets of same match
export const getMarketsSameMatch = createAction(
  GET_MARKETS_OF_SAME_MATCH,
  props<any>()
);

export const getMarketsSameMatchSuccess = createAction(
  GET_MARKET_OF_SAME_MATCH_SUCCESS,
  props<any>()
);

export const getMarketsSameMatchFailure = createAction(
  GET_MARKET_OF_SAME_MATCH_FAILURE,
  props<any>()
);

// set and get market metalist
export const getMarketMetalistBasic = createAction(
  GET_MARKET_BASIC_METALIST,
);

export const getMarketMetalistBasicSuccess = createAction(
  GET_MARKET_BASIC_METALIST_SUCCESS,
  props<any>()
);

export const getMarketMetalistBasicFailure = createAction(
  GET_MARKET_BASIC_METALIST_FAILURE,
  props<any>()
);

// -- FILTER --
export const setFilter = createAction(
  SET_MARKET_FILTER,
  props<{ filters: Filter[]}>()
);

export const resetFilter = createAction(
  RESET_MARKET_FILTER,
);

export const setMarketIdInRemoved = createAction(
  SET_MARKET_IN_REMOVED,
  props<{ marketId: string}>()
);

export const resetMarketIdRemovedList = createAction(
  RESET_MARKET_IN_REMOVED,
);

// -- FILTER CRUD --


// get all runners notes
export const getAllFilterBasket = createAction(
  GET_ALL_FILTER_BASKET,
);

export const getAllFilterBasketSuccess = createAction(
  GET_ALL_FILTER_BASKET_SUCCESS,
  props<any>()
);

export const getAllFilterBasketFailure = createAction(
  GET_ALL_FILTER_BASKET_FAILURE,
  props<any>()
);


// create filter basket
export const createFilterBasket = createAction(
  CREATE_FILTER_BASKET,
  props<{filterBasket: FilterBasket}>()
);

export const createFilterBasketSuccess = createAction(
  CREATE_FILTER_BASKET_SUCCESS,
  props<any>()
);

export const createFilterBasketFailure = createAction(
  CREATE_FILTER_BASKET_FAILURE,
  props<any>()
);


// update filter basket
export const updateFilterBasket = createAction(
  UPDATE_FILTER_BASKET,
  props<{ _id: string, filterBasket:FilterBasket }>()
);

export const updateFilterBasketSuccess = createAction(
  UPDATE_FILTER_BASKET_SUCCESS,
  props<any>()
);

export const updateFilterBasketFailure = createAction(
  UPDATE_FILTER_BASKET_FAILURE,
  props<any>()
);

// delete filter basket
export const deleteFilterBasket = createAction(
  DELETE_FILTER_BASKET,
  props<{ _id: string }>()
);

export const deleteFilterBasketSuccess = createAction(
  DELETE_FILTER_BASKET_SUCCESS,
  props<any>()
);

export const deleteFilterBasketFailure = createAction(
  DELETE_FILTER_BASKET_FAILURE,
  props<any>()
);



// selected filter basket
export const setSelectedFilterBasket = createAction(
  SET_SELECTED_FILTER_BASKET,
  props<{ _id: string, filter: Filter[], removed: string[] }>()
);

export const resetSelectedFilterBasket = createAction(
  RESET_MARKET_FILTER,
);
