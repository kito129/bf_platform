import { createAction, props } from '@ngrx/store';

// create the action of markets object
export const UPDATE_SPORTS = '[DB Manager] Update sports for all markets in DB';
export const UPDATE_SPORTS_SUCCESS = '[DB Manager] Update sports for all markets in DB Success';
export const UPDATE_SPORTS_FAILURE = '[DB Manager] Update sports for all markets in DB Failure';

export const GET_SPORTS_STATS = '[DB Manager] Get sport starts form DB';
export const GET_SPORTS_STATS_SUCCESS = '[DB Manager] Get sport starts form DB Success';
export const GET_SPORTS_STATS_FAILURE = '[DB Manager] Get sport starts form DB Failure';

export const UPDATE_RUNNERS_STATS = '[DB Manager] Update runners stats';
export const UPDATE_RUNNERS_STATS_SUCCESS = '[DB Manager] Update runners stats Success';
export const UPDATE_RUNNERS_STATS_FAILURE = '[DB Manager] Update runners stats Failure';


export const UPDATE_RUNNERS_SPORT = '[DB Manager] Update runners sport';
export const UPDATE_RUNNERS_SPORT_SUCCESS = '[DB Manager] Update runners sport Success';
export const UPDATE_RUNNERS_SPORT_FAILURE = '[DB Manager] Update runners sport Failure';


// updates sports actions
export const updateUnderOver = createAction(
  UPDATE_SPORTS
);

export const updateSportsSuccess = createAction(
  UPDATE_SPORTS_SUCCESS,
  props<any>()
);

export const updateSportsFailure = createAction(
  UPDATE_SPORTS_FAILURE,
  props<any>()
);

// sport start action
export const getSportStatsAction = createAction(
  GET_SPORTS_STATS
);

export const getSportStatsActionSuccess = createAction(
  GET_SPORTS_STATS_SUCCESS,
  props<any>()
);

export const getSportStatsActionFailure = createAction(
  GET_SPORTS_STATS_FAILURE,
  props<any>()
);

// update runners stats
export const updateRunnersStatsAction = createAction(
  UPDATE_RUNNERS_STATS
);

export const updateRunnersStatsActionSuccess = createAction(
  UPDATE_RUNNERS_STATS_SUCCESS,
  props<any>()
);

export const updateRunnersStatsActionFailure = createAction(
  UPDATE_RUNNERS_STATS_FAILURE,
  props<any>()
);

// update runners stats
export const updateRunnersSportAction = createAction(
  UPDATE_RUNNERS_SPORT
);

export const updateRunnersSportActionSuccess = createAction(
  UPDATE_RUNNERS_SPORT_SUCCESS,
  props<any>()
);

export const updateRunnersSportActionFailure = createAction(
  UPDATE_RUNNERS_SPORT_FAILURE,
  props<any>()
);


