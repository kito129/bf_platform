import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import {BasketStates} from './basket.reducers';
import {EntryStates} from "../entry/entry.reducers";

const getBasketState = createFeatureSelector<BasketStates>(
  'basketState'
);

export const getAllBaskets = createSelector(
  getBasketState,
  (state) => state.allBaskets
);

export const isLoadingAllBaskets = createSelector(
  getBasketState,
  (state ) => state.isLoadingAllBaskets
);

export const isLoadingBasketMarket = createSelector(
  getBasketState,
  (state ) => state.isLoadingSelectedBasketMarket
);


export const getSelectedBasketId = createSelector(
  getBasketState,
  (state ) => state.selectedBasketId
);


export const getSelectedBasket = createSelector(
  getBasketState,
  (state ) => {
    if(state.selectedBasketId){
      return state.allBaskets.filter( x => x._id === state.selectedBasketId)[0]
    } else {
      return null
    }

  }
);

export const getBasketListForm = createSelector(
  getBasketState,
  (state ) => {

    return state.allBaskets.map( x => {
      return {
        name: x.basket.name,
        id: x._id
      }
    }).sort(function(a,b){
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
    })
  }
);

export const getBasketNameById = (id: string) => createSelector(
  getBasketState,
  (state) => state.allBaskets.filter( x=> x._id === id)[0].basket.name
);


export const getSelectedBasketMarketId = createSelector(
  getBasketState,
  (state ) => state.selectedBasketMarketId
);


export const getSelectedBasketMarketPrices = createSelector(
  getBasketState,
  (state ) => state.selectedBasketMarketPrices
);

export const getSelectedBasketMarkets = createSelector(
  getBasketState,
  (state ) => state.selectedBasketMarkets
);

export const isLoadingSelectedBasketMarkets = createSelector(
  getBasketState,
  (state ) => state.isLoadingBasketMarkets
);

export const getBasketFilterById = (id: string) => createSelector(
  getBasketState,
  (state) => {
    let basket = state.allBaskets.filter( x=> x._id === id)
    if(basket.length){
      return basket[0].basket.activeFilter
    } else {
      return null
    }
  }
);

export const getBasketSizeById = (id: string) => createSelector(
  getBasketState,
  (state) => {
    let basket = state.allBaskets.filter( x=> x._id === id)
    if(basket.length){
      return basket[0].basket.size
    } else {
      return null
    }
  }
);
