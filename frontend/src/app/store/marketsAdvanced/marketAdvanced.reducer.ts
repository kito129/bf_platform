import {MarketDetailAdvanced} from '../../model/market/advanced/marketDetailAdvanced';
import {Action, createReducer, on} from '@ngrx/store';
import * as marketAdvancedActions from './marketAdvanced.actions';
import {setterLoading, setterLoadingFailure, setterLoadingSuccess} from '../supportFunction';
import {MarketInfoAdvanced} from '../../model/market/advanced/marketInfoAdvanced';
import {MarketMetaListAdvanced} from '../../model/market/metalist/marketMetaListAdvanced';

export interface MarketAdvancedState{
  selectedMarket: MarketDetailAdvanced,
  marketsList: MarketInfoAdvanced[],
  marketMetalist: MarketMetaListAdvanced[],
  selectedMarketID: string,
  marketsError: string,
  isLoadingMarketsList:{
    isLoading: boolean,
    isLoadingSuccess: boolean,
    isLoadingError: boolean,
  }
  isLoadingMarketDetail:{
    isLoading: boolean,
    isLoadingSuccess: boolean,
    isLoadingError: boolean,
  }
  isLoadingMetalist:{
    isLoading: boolean,
    isLoadingSuccess: boolean,
    isLoadingError: boolean,
  }
}

// this is the initial state of the app, before all HTTP call,
export const marketAdvancedInitialState: MarketAdvancedState = {
  selectedMarket: null,
  selectedMarketID: null,
  marketsError: '',
  marketsList: [],
  marketMetalist: [],
  isLoadingMarketsList: {
    isLoading: false,
    isLoadingSuccess: false,
    isLoadingError: false,
  },
  isLoadingMarketDetail: {
    isLoading: false,
    isLoadingSuccess: false,
    isLoadingError: false,
  },
  isLoadingMetalist: {
    isLoading: false,
    isLoadingSuccess: false,
    isLoadingError: false,
  },
}

// reducer that catch the marketsActions
const marketAdvancedReducer = createReducer(
  marketAdvancedInitialState,

  // Select market ID
  on(marketAdvancedActions.getMarketsAdvancedList, (state, result) => (
      {...state, isLoadingMarketsList: setterLoading()}
    )
  ),
  on(marketAdvancedActions.getMarketsAdvancedListSuccess, (state, result) =>
    ({...state, marketsList: result.response, isLoadingMarketsList: setterLoadingSuccess()})
  ),
  on(marketAdvancedActions.getMarketsAdvancedListFailure, (state, result) =>
    ({...state, marketsError: 'API error', isLoadingMarketsList: setterLoadingFailure()})
  ),

  // Select market ID
  on(marketAdvancedActions.getMarketAdvancedDetail, (state, result) => (
      {...state, selectedMarketID: result.marketId, isLoadingMarketDetail: setterLoading()}
    )
  ),
  on(marketAdvancedActions.getMarketAdvancedDetailSuccess, (state, result) =>
    ({...state, selectedMarket: result.response, isLoadingMarketDetail: setterLoadingSuccess()})
  ),
  on(marketAdvancedActions.getMarketAdvancedDetailFailure, (state, result) =>
    ({...state, marketsError: 'API error', isLoadingMarketDetail: setterLoadingFailure()})
  ),

  // get marketMetaList
  on(marketAdvancedActions.getMarketMetalistAdvanced, (state, result) => (
      {...state, isLoadingMetalist: setterLoading()}
    )
  ),
  on(marketAdvancedActions.getMarketMetalistAdvancedSuccess, (state, result) =>
    ({...state, marketMetalist: result.response, isLoadingMetalist: setterLoadingSuccess()})
  ),
  on(marketAdvancedActions.getMarketMetalistAdvancedFailure, (state, result) =>
    ({...state, marketsError: 'API error', isLoadingMetalist: setterLoadingFailure()})
  ),

)

// create the reducer
export function reducer(state: MarketAdvancedState | undefined, action: Action): any {
  return marketAdvancedReducer(state, action);
}

// return the marketAdvanced state
export const getMarketAdvancedState = (state: MarketAdvancedState) => {
  return {
    marketsList: state.marketsList,
    isLoadingMarketsList: state.isLoadingMarketsList,
    selectedMarket: state.selectedMarket,
    selectedMarketID: state.selectedMarketID,
    marketsError: state.marketsError,
    isLoadingMarketDetail: state.isLoadingMarketDetail,
  };
};



