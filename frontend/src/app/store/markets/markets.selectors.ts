import {createFeatureSelector, createSelector} from '@ngrx/store';
import {MarketsState} from './markets.reducer';
import {BySportStats} from '../../model/dashboard/bySportStats';
import {MarketsWinner} from '../../model/market/marketsWinner';
import {Filter} from '../../model/market/filter/basketFilter';
import {filterBasicMarkets} from '../filterFunctions';
import {MarketFilterBasket} from '../../model/market/filter/marketFilterBasket';
import {FilterBasket} from '../../model/market/filter/filterBasket';

const getMarketState = createFeatureSelector<MarketsState>(
  'marketsState'
);

export const getAllMarkets = createSelector(
  getMarketState,
  (state: MarketsState) => state.allMarkets
);

export const isLoadingAllMarkets = createSelector(
  getMarketState,
  (state: MarketsState) => state.isLoadingAllMarkets
);

export const getSelectedMarket = createSelector(
  getMarketState,
  (state: MarketsState) => state.selectedMarket
);

export const getSelectedMarketId = createSelector(
  getMarketState,
  (state: MarketsState) => state.selectedMarketID
);

export const getSelectedMarketInfo = createSelector(
  getMarketState,
  (state: MarketsState) => state.selectedMarket.marketInfo
);
export const getSelectedMarketUpdates = createSelector(
  getMarketState,
  (state: MarketsState) => state.selectedMarket.marketUpdates
);
export const getSelectedMarketPrices = createSelector(
  getMarketState,
  (state: MarketsState) => state.selectedMarket.marketOdds
);
export const getSelectedMarketSelections = createSelector(
  getMarketState,
  (state: MarketsState) => state.selectedMarket.marketRunners
);
export const getSelectedMarketAdditionalInfo = createSelector(
  getMarketState,
  (state: MarketsState) => state.selectedMarket.marketAdditionalInfo
);

export const isLoadingSelectedMarket = createSelector(
  getMarketState,
  (state: MarketsState) => state.isLoadingSelectedMarket
);

export const getSameMatchMarkets = createSelector(
  getMarketState,
  (state: MarketsState) => state.sameMatchMarkets
);

export const isLoadingSameMatchMarkets = createSelector(
  getMarketState,
  (state: MarketsState) => state.isLoadingSameMatchMarkets
);

export const getRandomMarketId = createSelector(
  getMarketState,
  (state: MarketsState) => state.allMarkets[getRandomNumberBetween(0,state.allMarkets.length)].marketInfo.id
);

export const getMetalistBasicBasket = createSelector(
  getMarketState,
  (state: MarketsState):MarketFilterBasket => {
    const list = state.marketMetalist.filter(x => x.marketInfo.marketInfo.sport === 'TENNIS').map(x => {
      return {
        marketInfo: x.marketInfo,
        marketUpdates: x.marketUpdates,
        marketRunners: {
          _id: x.marketRunners._id,
          marketId: x.marketRunners.marketId,
          marketType: x.marketRunners.marketType,
          runnerWinner: x.marketRunners.marketRunners[0].status === 'WINNER' ? x.marketRunners.marketRunners[0] : x.marketRunners.marketRunners[1],
          runnerLoser: x.marketRunners.marketRunners[1].status === 'LOSER' ? x.marketRunners.marketRunners[1] : x.marketRunners.marketRunners[0],
        },
        marketAdditionalInfo: x.marketAdditionalInfo
      }
    })

    let filtered =  filterBasicMarkets(list,state.filterState)
    filtered = filtered.filter(x => !state.filterMarketRemoved.includes(x.marketInfo.marketInfo.id))
    return {
      market: filtered,
      basket: filtered.map(x => x.marketInfo.marketId),
      removed: state.filterMarketRemoved,
      activeFilter: state.filterState.filter( x => x.active).length
    }
  }
);

export const getMarketFilterList = createSelector(
  getMarketState,
  (state: MarketsState) => state.filterBasketList
);

export const isLoadingMarketFilter = createSelector(
  getMarketState,
  (state: MarketsState) => state.isLoadingFilterBasket
);



export const getMarketRemoved = createSelector(
  getMarketState,
  (state: MarketsState) => {
    return state.marketMetalist.filter( x=> state.filterMarketRemoved.includes(x.marketInfo.marketId)).map( x => {
      return {
        marketId: x.marketInfo.marketInfo.id,
        marketName: x.marketInfo.marketInfo.eventName,
        marketDate:x.marketInfo.marketInfo.openDate
      }
    })
  }
);


export const isLoadingMarketMetalistBasic = createSelector(
  getMarketState,
  (state: MarketsState) => state.isLoadingMetalist
);



export const checkIfHaveAdvanced = (id: string) => createSelector(
  getMarketState,
  (state: MarketsState) => {
    const market =  state.allMarkets.filter(x => x.marketId.indexOf(id)!==-1).length
    return market >= 1
  }
);



export const getMarketStats = createSelector(
  getMarketState,
  (state:MarketsState) => {
    const stats: BySportStats = {
      length: state.allMarkets.length,
      sport: {
        countTennis: state.allMarkets.map(x => x.marketInfo.sport).reduce((acc, val) =>{
          return val === 'TENNIS'
            ? acc+=1
            : acc;
        },0),
        countFootball: state.allMarkets.map(x => x.marketInfo.sport).reduce( (acc, val) =>{
          return val === 'FOOTBALL'
            ? acc+=1
            : acc;
        },0),
        countHorse: state.allMarkets.map(x => x.marketInfo.sport).reduce((acc, val) =>{
          return val === 'HORSE RACING'
            ? acc+=1
            : acc;
        },0),
      }
    }
    return  stats
  }
);

export const getMarketNameById = (marketId: string) => createSelector(
  getMarketState,
  ( state) => {
    for(const market of state.allMarkets){
      if(market.marketId.indexOf(marketId)!==-1){
        return market.marketInfo.eventName
      }
    }
    return ' - '
  }
);

export const getMarketDateById = (marketId: string) => createSelector(
  getMarketState,
  ( state) => {
    for(const market of state.allMarkets){
      if(market.marketId.indexOf(marketId)!==-1){
        return market.marketInfo.openDate
      }
    }
    return 0
  }
);

export const getMarketIsWinnerById = (marketId: string,runnerId: number) => createSelector(
  getMarketState,
  ( state) => {
    for(const market of state.allMarkets){
      if(marketId === market.marketId && market.marketInfo.winner.id === runnerId ){
        return true
      }
    }
    return false
  }
);

export const getMarketIsWinnerByIdArray = (marketWinner: MarketsWinner[]) => createSelector(
  getMarketState,
  ( state) => {
    let winner = 0
    let loser =0
    for(const market of marketWinner){
      const _market = state.allMarkets.filter( x => x.marketId === market.marketId)[0]
      if(_market.marketInfo.winner.id === market.runnerId){
        winner++
      } else  {
        loser++
      }
    }
    return [winner,loser]
  }
);


function getRandomNumberBetween(min,max){
  return Math.floor(Math.random()*(max-min+1)+min).toFixed(0);
}


export const getMarketsFilter = createSelector(
  getMarketState,
  ( state): Filter[] => {
    return state.filterState
  }
);

export const getSelectedFilterBasketId = createSelector(
  getMarketState,
  ( state): string => {
    return state.selectedFilterBasket
  }
);

export const getSelectedFilterBasket = createSelector(
  getMarketState,
  ( state): FilterBasket => {
    const resp = state.filterBasketList.filter( x => x._id === state.selectedFilterBasket)
    if(resp.length){
      return resp[0]
    } else {
      return null
    }
  }
);
