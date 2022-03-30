import {Action, createReducer, on} from '@ngrx/store';

import * as dbManagerActions from './dbManager.actions';
import {setterLoading, setterLoadingFailure, setterLoadingSuccess} from "../supportFunction";


export interface DbState {
  readonly updateUnderOverResponse?: string;
  readonly updateRunnerStatsResponse?: string;
  readonly updateRunnerSportResponse?: string;
  readonly isLoadingUpdateUnderOver: {
    readonly isLoading?: boolean,
    readonly isLoadingSuccess?: boolean,
    readonly isLoadingError?: boolean
  }
  readonly isLoadingSportStats: {
    readonly isLoading?: boolean,
    readonly isLoadingSuccess?: boolean,
    readonly isLoadingError?: boolean
  }
  readonly isLoadingRunnersStats: {
    readonly isLoading?: boolean,
    readonly isLoadingSuccess?: boolean,
    readonly isLoadingError?: boolean
  }
  readonly isLoadingRunnersSport: {
    readonly isLoading?: boolean,
    readonly isLoadingSuccess?: boolean,
    readonly isLoadingError?: boolean
  }
}

// this is the initial state of the app, before all HTTP call,
export const dbManagerInitialState: DbState = {
  updateUnderOverResponse: '',
  updateRunnerStatsResponse: '',
  updateRunnerSportResponse: '',
  isLoadingUpdateUnderOver:{
    isLoading: false,
    isLoadingSuccess: false,
    isLoadingError: false,
  },
  isLoadingSportStats:{
    isLoading: false,
    isLoadingSuccess: false,
    isLoadingError: false,
  },
  isLoadingRunnersStats:{
    isLoading: false,
    isLoadingSuccess: false,
    isLoadingError: false,
  },
  isLoadingRunnersSport:{
    isLoading: false,
    isLoadingSuccess: false,
    isLoadingError: false,
  },
};


// reducer that catch the marketsActions
const marketsReducer = createReducer(
  dbManagerInitialState,

  // Update Under Over in db
  on(dbManagerActions.updateUnderOver, (state) => (
      {...state, isLoadingUpdateUnderOver: setterLoading()}
    )
  ),
  on(dbManagerActions.updateSportsSuccess, (state, result) => (
    {...state, updateResponse: result.response, isLoadingUpdateUnderOver: setterLoadingSuccess()}
    )
  ),
  on(dbManagerActions.updateSportsFailure, (state, result) => (
      {...state, updateResponse: result.status + ' - ' +  result.statusText, isLoadingUpdateUnderOver: setterLoadingFailure()}
    )
  ),

  // Get sports stats
  on(dbManagerActions.getSportStatsAction, (state) => (
      {...state,isLoadingSportStats: setterLoading()}
    )
  ),
  on(dbManagerActions.getSportStatsActionSuccess, (state, result) =>
    ({...state, sportStats: result.response, isLoadingSportStats: setterLoadingSuccess()}
    )
  ),
  on(dbManagerActions.getSportStatsActionFailure, (state, result) =>
    ({...state ,sportStats: result.response, isLoadingSportStats: setterLoadingFailure()}
      )
  ),

// Update runners Stats
on(dbManagerActions.updateRunnersStatsAction, (state) => (
    {...state,isLoadingRunnersStats: setterLoading()}
  )
),
  on(dbManagerActions.updateRunnersStatsActionSuccess, (state, result) =>
    ({...state, updateRunnerStatsResponse: result.response, isLoadingRunnersStats: setterLoadingSuccess()}
    )
  ),
  on(dbManagerActions.updateRunnersStatsActionFailure, (state, result) =>
    ({...state ,updateRunnerStatsResponse: result.response, isLoadingRunnersSport: setterLoadingFailure()}
    )
  ),

  // Update runners Stats
  on(dbManagerActions.updateRunnersSportAction, (state) => (
      {...state,isLoadingRunnersSport:setterLoading()}
    )
  ),
    on(dbManagerActions.updateRunnersSportActionSuccess, (state, result) =>
      ({...state, updateRunnerSportResponse: result.response, isLoadingRunnersSport: setterLoadingSuccess()}
      )
    ),
    on(dbManagerActions.updateRunnersSportActionFailure, (state, result) =>
      ({...state ,updateRunnerSportResponse: result.response, isLoadingRunnersSport: setterLoadingFailure()}
      )
    )

);


// create the reducer
export function reducer(state: DbState | undefined, action: Action): any {
  return marketsReducer(state, action);
}

// return the markets state
export const getDbState = (state: DbState) => {
  return {
    updateResponse: state.updateUnderOverResponse,
    updateRunnerStatsResponse: state.updateRunnerStatsResponse,
    isLoadingRunnersStats: state.isLoadingRunnersStats,
    isLoadingSportStats: state.isLoadingSportStats,
    isLoadingUpdateUnderOver: state.isLoadingUpdateUnderOver,
    isLoadingRunnersSport: state.isLoadingRunnersSport,
  };
};


