import {createFeatureSelector, createSelector} from "@ngrx/store";
import {StudyStates} from "./study.reducers";

const getStudyState = createFeatureSelector<StudyStates>(
  'studyState'
);

export const getAllStudies = createSelector(
  getStudyState,
  (state) => state.allStudy
);

export const isLoadingAllStudies = createSelector(
  getStudyState,
  (state ) => state.isLoadingAllStudy
);

export const getSelectedStudyId = createSelector(
  getStudyState,
  (state ) => state.selectedStudyId
);

export const getSelectedStudy = createSelector(
  getStudyState,
  (state ) => {
    if(state.selectedStudyId){
      return state.allStudy.filter( x => x._id === state.selectedStudyId)[0]
    } else {
      return null
    }

  }
);
export const isLoadingSelectedStudyTrades = createSelector(
  getStudyState,
  (state ) => state.isLoadingSelectedStudyTrades
);

export const getSelectedStudyTrades = createSelector(
  getStudyState,
  (state ) => state.selectedStudyTrades
);

export const getSelectedStudyMarketId = createSelector(
  getStudyState,
  (state ) => state.selectedStudyMarketId
);


export const isLoadingStudyMarketId = createSelector(
  getStudyState,
  (state ) => state.isLoadingSelectedStudyMarket
);

export const getSelectedStudyMarket = createSelector(
  getStudyState,
  (state ) => state.selectedStudyMarket
);

export const getSelectedStudyMarketTrade = createSelector(
  getStudyState,
  (state ) => state.selectedStudyMarketTrade
);

// compare
export const isLoadingCompare = createSelector(
  getStudyState,
  (state ) => state.isLoadingCompare
);

export const getCompareList = createSelector(
  getStudyState,
  (state ) => state.compareList
);

export const getComparedData = createSelector(
  getStudyState,
  (state ) => state.compareStudies
);


export const getTradeById = (id: string) => createSelector(
  getStudyState,
  (state) => {
    let response = state.compareStudies.map(x => x.trades.filter( x => x._id === id)[0])
    return response.filter( x => x!==undefined)[0]
  }
);


