import {MarketBasic} from '../../model/market/basic/marketBasic';
import {MarketInfoBasic} from '../../model/market/basic/marketInfoBasic';
import {Action, createReducer, on} from '@ngrx/store';

import * as marketActions from './markets.actions';
import {
  addElement, addElements,
  addMarketRemoved, deleteElement,
  newBasketFilters,
  resetBasketFilters, setterAllFalseLoading,
  setterLoading,
  setterLoadingFailure,
  setterLoadingSuccess, updateElement
} from '../supportFunction';
import {MarketMetaListBasic} from '../../model/market/metalist/marketMetaListBasic';
import {BasketFilters, Filter} from '../../model/market/filter/basketFilter';
import {resetMarketIdRemovedList} from './markets.actions';
import {MarketMetaListV2} from '../../model/market/metalist/metalistV2/marketMetaListV2';
import {FilterBasket} from '../../model/market/filter/filterBasket';
import * as notesActions from '../notes/notes.actions';

export interface MarketsState{
  allMarkets: MarketInfoBasic[],
  selectedMarket: MarketBasic,
  selectedMarketID: string,
  sameMatchMarkets: MarketInfoBasic[],
  marketsError: string,
  marketMetalist: MarketMetaListBasic[],
  isLoadingAllMarkets:{
    isLoading: boolean,
    isLoadingSuccess: boolean,
    isLoadingError: boolean,
  },
  isLoadingSelectedMarket:{
    isLoading: boolean,
    isLoadingSuccess: boolean,
    isLoadingError: boolean,
  },
  isLoadingSameMatchMarkets: {
    isLoading: boolean,
    isLoadingSuccess: boolean,
    isLoadingError: boolean,
  },
  isLoadingMetalist: {
    isLoading: boolean,
    isLoadingSuccess: boolean,
    isLoadingError: boolean,
  },
  filterState: Filter[],
  filterMarketRemoved: string[]
  filterBasketList: FilterBasket[]
  isLoadingFilterBasket:{
    isLoading: boolean,
    isLoadingSuccess: boolean,
    isLoadingError: boolean,
  },
  selectedFilterBasket: string,
}


// this is the initial state of the app, before all HTTP call,
export const marketsInitialState: MarketsState = {
  allMarkets: [],
  selectedMarket: null,
  selectedMarketID: '',
  sameMatchMarkets: [],
  marketsError: '',
  marketMetalist: [],
  isLoadingAllMarkets:{
    isLoading: false,
    isLoadingSuccess: false,
    isLoadingError: false,
  },
  isLoadingMetalist:{
    isLoading: false,
    isLoadingSuccess: false,
    isLoadingError: false,
  },
  isLoadingSelectedMarket:{
    isLoading: false,
    isLoadingSuccess: false,
    isLoadingError: false,
  },
  isLoadingSameMatchMarkets:{
    isLoading: false,
    isLoadingSuccess: false,
    isLoadingError: false,
  },
  isLoadingFilterBasket:{
    isLoading: false,
    isLoadingSuccess: false,
    isLoadingError: false,
  },
  filterState: new BasketFilters().filters,
  filterMarketRemoved: [],
  filterBasketList: [],
  selectedFilterBasket: null,
};


// reducer that catch the marketsActions
const marketsReducer = createReducer(
  marketsInitialState,

  // Get Markets
  on(marketActions.getAllMarkets, (state) => (
      {...state, isLoadingAllMarkets: setterLoading()}
    )
  ),
  on(marketActions.getMarketsSuccess, (state, result) =>
    ({...state, allMarkets: result.response[0], isLoadingAllMarkets: setterLoadingSuccess()}
    )
  ),
  on(marketActions.getMarketsFailure, (state, result) => (
      {...state, marketsError: 'API error', isLoadingAllMarkets: setterLoadingFailure()}
    )
  ),

  // Select market ID
  on(marketActions.getMarketDetail, (state, result) => (
      {...state, selectedMarketID: result.marketId, isLoadingSelectedMarket: setterLoading()}
    )
  ),
  on(marketActions.getMarketDetailSuccess, (state, result) =>
    ({...state, selectedMarket: result.response, isLoadingSelectedMarket: setterLoadingSuccess()})
  ),
  on(marketActions.getMarketDetailFailure, (state, result) =>
    ({...state, marketsError: 'API error', isLoadingSelectedMarket: setterLoadingFailure()})
  ),

  // Select market ID
  on(marketActions.resetMarketDetail, (state, result) => (
      {...state, selectedMarketID: null, selectedMarket: null, isLoadingSelectedMarket: setterAllFalseLoading()}
    )
  ),

  // get markets of same match
  on(marketActions.getMarketsSameMatch, (state,result) => (
      {...state, isLoadingSameMatchMarkets: setterLoading()}
    )
  ),
  on(marketActions.getMarketsSameMatchSuccess, (state, result) =>
    ({...state, sameMatchMarkets: result.response, isLoadingSameMatchMarkets: setterLoadingSuccess()})
  ),
  on(marketActions.getMarketsSameMatchFailure, (state, result) => (
    {...state, marketsError: 'API error', isLoadingSameMatchMarkets: setterLoadingFailure()})
  ),

  // get market meta list basic TENNIS
  on(marketActions.getMarketMetalistBasicTennis, (state, result) => ({...state, isLoadingMetalist: setterLoading()})),
  on(marketActions.getMarketMetalistBasicTennisSuccess, (state, result) =>
    ({...state, marketMetalist: addElements(state.marketMetalist,result.response), isLoadingMetalist: setterLoadingSuccess()})
  ),
  on(marketActions.getMarketMetalistBasicTennisFailure, (state, result) => (
    {...state, marketsError: 'API error', isLoadingMetalist: setterLoadingFailure()})
  ),

  // get market meta list basic SOCCER
  on(marketActions.getMarketMetalistBasicSoccer, (state, result) => ({...state, isLoadingMetalist: setterLoading()})),
  on(marketActions.getMarketMetalistBasicSoccerSuccess, (state, result) =>
    ({...state, marketMetalist: addElements(state.marketMetalist,result.response), isLoadingMetalist: setterLoadingSuccess()})
  ),
  on(marketActions.getMarketMetalistBasicSoccerFailure, (state, result) => (
    {...state, marketsError: 'API error', isLoadingMetalist: setterLoadingFailure()})
  ),

  // -- FILTER --
  on(marketActions.setFilter, (state, result) => (
    {...state, filterState: newBasketFilters(result.filters)})
  ),

  on(marketActions.resetFilter, (state, result) => (
    {...state, filterState: resetBasketFilters()})
  ),

  // -- MARKET REMOVED --
  on(marketActions.setMarketIdInRemoved, (state, result) => (
    {...state, filterMarketRemoved: addMarketRemoved(state.filterMarketRemoved, result.marketId)})
  ),

  on(marketActions.resetMarketIdRemovedList, (state, result) => (
    {...state, filterMarketRemoved: []})
  ),

  // SET AND RESET SELECTED FILTER BASKET
  on(marketActions.setSelectedFilterBasket, (state, result) => (
    {...state, filterState: newBasketFilters(result.filter), filterMarketRemoved: result.removed, selectedFilterBasket: result._id,
    })
  ),

  on(marketActions.resetSelectedFilterBasket, (state, result) => (
    {...state, filterState: resetBasketFilters(), filterMarketRemoved: [], selectedFilterBasket: null,
    })
  ),

  // -- FILTER CRUD --

  // get
  on(marketActions.getAllFilterBasket, (state, result) => (
    {...state, isLoadingFilterBasket: setterLoading()
    })
  ),
  on(marketActions.getAllFilterBasketSuccess, (state, result) =>
    ({...state, filterBasketList: result.response , isLoadingFilterBasket: setterLoadingSuccess()
    })
  ),
  on(marketActions.getAllFilterBasketFailure, (state, result) => (
    {...state, marketsError: 'API error', isLoadingFilterBasket: setterLoadingFailure()
    })
  ),

  // create
  on(marketActions.createFilterBasket, (state, result) => (
    {...state, isLoadingFilterBasket: setterLoading()
    })
  ),
  on(marketActions.createFilterBasketSuccess, (state, result) =>
    ({...state,
      selectedFilterBasket: result.response._id,
      filterMarketRemoved: result.response.filterBasket.removed,
      filterBasketList: addElement(state.filterBasketList,result.response) ,
      isLoadingFilterBasket: setterLoadingSuccess()
    })
  ),
  on(marketActions.createFilterBasketFailure, (state, result) => (
    {...state, notesError: 'API error', isLoadingFilterBasket: setterLoadingFailure()
    })
  ),

  // update
  on(marketActions.updateFilterBasket, (state,result) => (
    {...state, isLoadingFilterBasket: setterLoading()
    })
  ),
  on(marketActions.updateFilterBasketSuccess, (state, result) =>
    ({...state, filterBasketList: updateElement(state.filterBasketList,result.response), isLoadingFilterBasket: setterLoadingSuccess()
    })
  ),
  on(marketActions.updateFilterBasketFailure, (state, result) => (
    {...state, notesError: 'API error',isLoadingFilterBasket: setterLoadingFailure()
    })
  ),

  // delete
  on(marketActions.deleteFilterBasket, (state,result) => (
    {...state, isLoadingFilterBasket: setterLoading()
    })
  ),
  on(marketActions.deleteFilterBasketSuccess, (state, result) =>
    ({...state, filterBasketList: deleteElement(state.filterBasketList,result.response), isLoadingFilterBasket: setterLoadingSuccess()
    })
  ),
  on(marketActions.deleteFilterBasketFailure, (state, result) => (
    {...state, notesError: 'API error', isLoadingFilterBasket: setterLoadingFailure()
    })
  ),


);


// create the reducer
export function reducer(state: MarketsState | undefined, action: Action): any {
  return marketsReducer(state, action);
}

// return the markets state
export const getMarketsState = (state: MarketsState) => {
  return {
    allMarkets: state.allMarkets,
    selectedMarket: state.selectedMarket,
    selectedMarketID: state.selectedMarketID,
    sameMatchMarkets: state.sameMatchMarkets,
    marketMetalist: state.marketMetalist,
    marketsError: state.marketsError,
    isLoadingAllMarkets: state.isLoadingAllMarkets,
    isLoadingSelectedMarket: state.isLoadingSelectedMarket,
    isLoadingSameMatch: state.isLoadingSameMatchMarkets,
    filterState: state.filterState,
    isLoadingMetalist: state.isLoadingMetalist
  };
};





