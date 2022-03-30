import {createFeatureSelector, createSelector} from '@ngrx/store';
import {MarketAdvancedState} from './marketAdvanced.reducer';
import {MarketMetaListV2Adv} from '../../model/market/metalist/metalistV2/marketMetaListV2Adv';

const getMarketAdvancedState = createFeatureSelector<MarketAdvancedState>(
  'marketAdvancedState'
);

export const getMarketDetail = createSelector(
  getMarketAdvancedState,
  (state: MarketAdvancedState) => state.selectedMarket);

export const getMarketInfoAdvanced = createSelector(
  getMarketAdvancedState,
  (state: MarketAdvancedState) => state.selectedMarket.marketInfo
);

export const getMarketRunnersAdvanced = createSelector(
  getMarketAdvancedState,
  (state: MarketAdvancedState) => state.selectedMarket.marketRunners
);

export const getMarketUpdatesAdvanced = createSelector(
  getMarketAdvancedState,
  (state: MarketAdvancedState) => state.selectedMarket.marketUpdates
);

export const getMarketMarketOddsAdvanced = createSelector(
  getMarketAdvancedState,
  (state: MarketAdvancedState) => state.selectedMarket.marketOdds
);

export const  getSelectedMarketAdditionalInfo = createSelector(
  getMarketAdvancedState,
  (state: MarketAdvancedState) => state.selectedMarket.marketAdditionalInfo
);


export const  getMarketMetalistAdvanced = createSelector(
  getMarketAdvancedState,
  (state: MarketAdvancedState) => state.marketMetalist
);


function removeDuplicates(originalArray, prop) {
  const newArray = [];
  const lookupObject  = {};

  // tslint:disable-next-line:forin
  for(const i in originalArray) {
    lookupObject[originalArray[i][prop]] = originalArray[i];
  }

  // tslint:disable-next-line:forin
  for(const j in lookupObject) {
    newArray.push(lookupObject[j]);
  }
  return newArray;
}

export const  isLoadingMarketMetalistAdvanced = createSelector(
  getMarketAdvancedState,
  (state: MarketAdvancedState) => state.isLoadingMetalist
);

export const  getRandomMarketId = createSelector(
  getMarketAdvancedState,
  (state: MarketAdvancedState) => state.marketsList[getRandomNumberBetween(0, state.marketsList.length-1)].marketId
);

export const getMetalistAdv = createSelector(
  getMarketAdvancedState,
  (state: MarketAdvancedState):MarketMetaListV2Adv[] => state.marketMetalist.filter(x => x.marketInfo.marketInfo.sport === 'TENNIS').map(x =>{
    return {
      marketInfo: x.marketInfo,
      marketUpdates: x.marketUpdates,
      marketRunners: {
        _id: x.marketRunners._id,
        marketId: x.marketRunners.marketId,
        marketType: x.marketRunners.marketType,
        runnerWinner:  x.marketRunners.marketRunners[0].status=== 'WINNER' ? x.marketRunners.marketRunners[0] : x.marketRunners.marketRunners[1],
        runnerLoser: x.marketRunners.marketRunners[1].status=== 'LOSER' ? x.marketRunners.marketRunners[1] : x.marketRunners.marketRunners[0],
      },
      marketAdditionalInfo: x.marketAdditionalInfo
    }
  })
);



export const  getMarketsVolumeStats = createSelector(
  getMarketAdvancedState,
  (state: MarketAdvancedState) => {
    console.log('scatta')
    console.log(state.marketsList[0])
    return [
      [
        state.marketsList.filter(x => x.marketInfo.volume.total < 1000).length,
        state.marketsList.filter(x => x.marketInfo.volume.total < 2000).length,
        state.marketsList.filter(x => x.marketInfo.volume.total < 3000).length,
        state.marketsList.filter(x => x.marketInfo.volume.total < 4000).length,
        state.marketsList.filter(x => x.marketInfo.volume.total < 5000).length,
        state.marketsList.filter(x => x.marketInfo.volume.total < 6000).length,
        state.marketsList.filter(x => x.marketInfo.volume.total < 7000).length,
        state.marketsList.filter(x => x.marketInfo.volume.total < 8000).length,
        state.marketsList.filter(x => x.marketInfo.volume.total < 9000).length,
        state.marketsList.filter(x => x.marketInfo.volume.total < 10000).length,
        state.marketsList.filter(x => x.marketInfo.volume.total > 10000 && x.marketInfo.volume.total < 20000).length,
        state.marketsList.filter(x => x.marketInfo.volume.total > 20000 && x.marketInfo.volume.total < 30000).length,
        state.marketsList.filter(x => x.marketInfo.volume.total > 30000 && x.marketInfo.volume.total < 50000).length,
        state.marketsList.filter(x => x.marketInfo.volume.total > 40000 && x.marketInfo.volume.total < 100000).length,
        state.marketsList.filter(x => x.marketInfo.volume.total > 100000 && x.marketInfo.volume.total < 200000).length,
        state.marketsList.filter(x => x.marketInfo.volume.total > 200000 && x.marketInfo.volume.total < 500000).length,
        state.marketsList.filter(x => x.marketInfo.volume.total > 500000 && x.marketInfo.volume.total < 1000000).length,
        state.marketsList.filter(x => x.marketInfo.volume.total > 1000000 && x.marketInfo.volume.total < 2000000).length,
        state.marketsList.filter(x => x.marketInfo.volume.total > 2000000 && x.marketInfo.volume.total < 5000000).length,
        state.marketsList.filter(x => x.marketInfo.volume.total > 5000000).length
      ],
      []
    ]
  }
);

export const checkIfHaveAdvanced = (id: string) => createSelector(
  getMarketAdvancedState,
  (state: MarketAdvancedState) => {
    console.log(id)
    const market =  state.marketsList.filter(x => x.marketId.indexOf(id)!==-1).length
    console.log(market)
    return market >= 1
  }
);

function getRandomNumberBetween(min,max){
  return Math.floor(Math.random()*(max-min+1)+min).toFixed(0);
}



export const getSelectedMarketId = createSelector(
  getMarketAdvancedState,
  (state: MarketAdvancedState) => state.selectedMarketID
);




export const isLoadingMarketDetail = createSelector(
  getMarketAdvancedState,
  (state: MarketAdvancedState) => state.isLoadingMarketDetail
);


// list
export const getMarketsList = createSelector(
  getMarketAdvancedState,
  (state: MarketAdvancedState) => state.marketsList
);


export const isLoadingMarketsList = createSelector(
  getMarketAdvancedState,
  (state: MarketAdvancedState) => state.isLoadingMarketsList
);

