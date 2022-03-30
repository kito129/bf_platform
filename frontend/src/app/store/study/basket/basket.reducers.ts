import {
  addElement,
  deleteElement, reset,
  setterLoading,
  setterLoadingFailure,
  setterLoadingSuccess,
  updateElement
} from '../../supportFunction';
import {Basket} from '../../../model/study/basket/basket';
import {Action, createReducer, on} from '@ngrx/store';
import * as basketActions from './basket.actions';
import {IsLoading} from '../../../model/isLoading';
import {MarketSinglePrices} from "../../../model/market/marketSinglePrices";
import {MarketBasket} from "../../../model/market/marketBasket";

export interface BasketStates {
  allBaskets: Basket[]
  basketsError: string,
  selectedBasketId: string
  selectedBasketMarkets: MarketBasket[]
  selectedBasketMarketId: string
  selectedBasketMarketPrices: MarketSinglePrices,
  selectedBasketMarketsSelectionId: number,
  isLoadingAllBaskets:IsLoading,
  isLoadingBasketMarkets:IsLoading,
  isLoadingSelectedBasketMarket:IsLoading,
}

export const basketInitialState: BasketStates = {
  allBaskets: [],
  basketsError: '',
  selectedBasketId: null,
  selectedBasketMarkets: null,
  selectedBasketMarketId: null,
  selectedBasketMarketsSelectionId: null,
  selectedBasketMarketPrices: null,
  isLoadingAllBaskets:{
    isLoading: false,
    isLoadingSuccess: false,
    isLoadingError: false,
  },
  isLoadingBasketMarkets:{
    isLoading: false,
    isLoadingSuccess: false,
    isLoadingError: false,
  },
  isLoadingSelectedBasketMarket:{
    isLoading: false,
    isLoadingSuccess: false,
    isLoadingError: false,
  },
}

// reducer that catch the basketActions
const basketReducer = createReducer(
  basketInitialState,

  // set selected basket
  on(basketActions.setSelectedBasket, (state, result) => (
    {...state, selectedBasketId: result.id, isLoadingBasketMarkets: setterLoading()
    })
  ),
  on(basketActions.setSelectedBasketSuccess, (state, result) => (
    {...state, selectedBasketMarkets: result.response, isLoadingBasketMarkets: setterLoadingSuccess()
    })
  ),
  on(basketActions.setSelectedBasketFailure, (state, result) => (
    {...state, selectedBasketId: null, selectedBasketMarkets: [], isLoadingBasketMarkets: setterLoadingFailure()
    })
  ),
  // unset selected basket
  on(basketActions.unsetSelectedBasket, (state, result) => (
    {...state, selectedBasketId: null, selectedBasketMarketsId: null, selectedBasketMarketsSelectionId: null, selectedBasketMarkets: null, selectedBasketMarketPrices: null,
      isLoadingBasketMarkets: reset()
    })
  ),

  // set selected basket market
  on(basketActions.setSelectedBasketMarket, (state, result) => (
    {...state, selectedBasketMarketId: result.marketId, selectedBasketMarketsSelectionId: result.selectionId, isLoadingSelectedBasketMarket: setterLoading()
    })
  ),
  on(basketActions.setSelectedBasketMarketSuccess, (state, result) => (
    {...state, selectedBasketMarketPrices: result.response, isLoadingSelectedBasketMarket: setterLoadingSuccess()
    })
  ),
  on(basketActions.setSelectedBasketMarketFailure, (state, result) => (
    {...state, selectedBasketMarketId: null, selectedBasketMarketsSelectionId: null, selectedBasketMarketPrices: null ,basketsError: 'API error',
      isLoadingSelectedBasketMarket: setterLoadingFailure()
    })
  ),

  // unset selected basket
  on(basketActions.unsetSelectedBasketMarket, (state, result) => (
    {...state, selectedBasketMarketId: null, selectedBasketMarketsSelectionId: null, selectedBasketMarketPrices: null
    })
  ),

  /*
      CRUD FOR BASKET
   */

  // get all baskets
  on(basketActions.getAllBaskets, (state) => (
    {...state, isLoadingAllBaskets: setterLoading(),
    })
  ),
  on(basketActions.getAllBasketsSuccess, (state, result) =>
    ({...state, allBaskets: result.response, isLoadingAllBaskets: setterLoadingSuccess()
    })
  ),
  on(basketActions.getAllBasketsFailure, (state, result) => (
    {...state, basketsError: 'API error', isLoadingAllBaskets: setterLoadingFailure()
    })
  ),


  // create basket
  on(basketActions.createBasket, (state) => (
    {...state, isLoadingAllBaskets: setterLoading(),  selectedBasketId: null, isLoadingBasketMarkets: reset()
    })
  ),
  on(basketActions.createBasketSuccess, (state, result) =>
    ({...state, allBaskets: addElement(state.allBaskets,result.response) , isLoadingAllBaskets: setterLoadingSuccess()
    })
  ),
  on(basketActions.createBasketFailure, (state, result) => (
    {...state, basketsError: 'API error', isLoadingAllBaskets: setterLoadingFailure()
    })
  ),

  // update basket
  on(basketActions.updateBasket, (state, result) => (
    {...state, isLoadingAllBaskets: setterLoading(), selectedBasketId: null, isLoadingBasketMarkets: reset()
    })
  ),
  on(basketActions.updateBasketSuccess, (state, result) =>
    ({...state, allBaskets: updateElement(state.allBaskets,result.response) , isLoadingAllBaskets: setterLoadingSuccess()
    })
  ),
  on(basketActions.updateBasketFailure, (state, result) => (
    {...state, basketsError: 'API error', isLoadingAllBaskets: setterLoadingFailure()
    })
  ),

  // delete basket
  on(basketActions.deleteBasket, (state, result) => (
    {...state, isLoadingAllBaskets: setterLoading(), selectedBasketId: null, isLoadingBasketMarkets: reset()
    })
  ),
  on(basketActions.deleteBasketSuccess, (state, result) =>
    ({...state, allBaskets: deleteElement(state.allBaskets,result.response) , isLoadingAllBaskets: setterLoadingSuccess()
    })
  ),
  on(basketActions.deleteBasketFailure, (state, result) => (
    {...state, basketsError: 'API error', isLoadingAllBaskets: setterLoadingFailure()
    })
  ),
)

// create the reducer
export function reducer(state: BasketStates | undefined, action: Action): any {
  return basketReducer(state, action);
}

