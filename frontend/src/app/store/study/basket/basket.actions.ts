import {createAction, props} from '@ngrx/store';
import {Basket} from '../../../model/study/basket/basket';

/*
**  BASKET ACTIONS
 */
export const GET_ALL_BASKETS = '[Basket] Get all Baskets';
export const GET_ALL_BASKETS_SUCCESS = '[Basket] Get all Baskets Success';
export const GET_ALL_BASKETS_FAILURE = '[Basket] Get all Baskets Failure';

export const CREATE_BASKET = '[Basket] Create basket';
export const CREATE_BASKET_SUCCESS = '[Basket] Create Basket Success';
export const CREATE_BASKET_FAILURE = '[Basket] Create Basket Failure';

export const UPDATE_BASKET = '[Basket] Update basket';
export const UPDATE_BASKET_SUCCESS = '[Basket] Update Basket Success';
export const UPDATE_BASKET_FAILURE = '[Basket] Update Basket Failure';

export const DELETE_BASKET = '[Basket] Delete Basket';
export const DELETE_BASKET_SUCCESS = '[Basket] Delete Basket Success';
export const DELETE_BASKET_FAILURE = '[Basket] Delete Basket Failure';

export const SET_SELECTED_BASKET = '[Basket] Set Selected Basket';
export const SET_SELECTED_BASKET_SUCCESS = '[Basket] Set Selected Basket Success';
export const SET_SELECTED_BASKET_FAILURE = '[Basket] Set Selected Basket Failure';

export const UNSET_SELECTED_BASKET_ID = '[Basket] Unset Selected Basket Id';

export const SET_SELECTED_BASKET_MARKET = '[Basket Market] Set Selected Market of basket';
export const SET_SELECTED_BASKET_MARKET_SUCCESS = '[Basket Market] Set Selected Market of basket success';
export const SET_SELECTED_BASKET_MARKET_FAILURE = '[Basket Market] Set Selected Market of basket failure';
export const UNSET_BASKET_MARKET = '[Basket Market] Unset Market of basket';

/*
**  CRUD BASKET ACTIONS
 */

// get all baskets
export const getAllBaskets = createAction(
  GET_ALL_BASKETS,
);

export const getAllBasketsSuccess = createAction(
  GET_ALL_BASKETS_SUCCESS,
  props<any>()
);

export const getAllBasketsFailure = createAction(
  GET_ALL_BASKETS_FAILURE,
  props<any>()
);

// create basket
export const createBasket = createAction(
  CREATE_BASKET,
  props<{basket: Basket}>()
);

export const createBasketSuccess = createAction(
  CREATE_BASKET_SUCCESS,
  props<any>()
);

export const createBasketFailure = createAction(
  CREATE_BASKET_FAILURE,
  props<any>()
);

// update basket
export const updateBasket = createAction(
  UPDATE_BASKET,
  props<{ _id: string, basket: Basket }>()
);

export const updateBasketSuccess = createAction(
  UPDATE_BASKET_SUCCESS,
  props<any>()
);

export const updateBasketFailure = createAction(
  UPDATE_BASKET_FAILURE,
  props<any>()
);

// delete basket
export const deleteBasket = createAction(
  DELETE_BASKET,
  props<{ _id: string }>()
);

export const deleteBasketSuccess = createAction(
  DELETE_BASKET_SUCCESS,
  props<any>()
);

export const deleteBasketFailure = createAction(
  DELETE_BASKET_FAILURE,
  props<any>()
);

/*
**  SELECTED BASKET
 */

// set selected basket id
export const setSelectedBasket = createAction(
  SET_SELECTED_BASKET,
  props<{id: string }>()
);
export const setSelectedBasketSuccess = createAction(
  SET_SELECTED_BASKET_SUCCESS,
  props<any>()
);
export const setSelectedBasketFailure = createAction(
  SET_SELECTED_BASKET_FAILURE,
  props<any>()
);

// unset selected basket id
export const unsetSelectedBasket = createAction(
  UNSET_SELECTED_BASKET_ID,
);


/*
**  SELECTED BASKET MARKET
 */

// retrieve market information
export const setSelectedBasketMarket = createAction(
  SET_SELECTED_BASKET_MARKET,
  props<{marketId: string, selectionId: number }>()
);

export const setSelectedBasketMarketSuccess = createAction(
  SET_SELECTED_BASKET_MARKET_SUCCESS,
  props<any>()
);

export const setSelectedBasketMarketFailure = createAction(
  SET_SELECTED_BASKET_MARKET_FAILURE,
  props<any>()
);


// deselect basket market
export const unsetSelectedBasketMarket = createAction(
  UNSET_BASKET_MARKET,
);


