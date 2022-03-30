import { createAction, props } from '@ngrx/store';
import {Note} from "../../model/note/note";

// create the action of markets object
export const GET_ALL_RUNNERS = '[Runners] Get all runners from DB';
export const GET_ALL_RUNNERS_SUCCESS = '[Runners] Get all runners from DB Success';
export const GET_ALL_RUNNERS_FAILURE = '[Runners] Get all runners from DB Failure';

export const GET_RUNNER_BY_ID = '[Runners] Get runner by id';
export const GET_RUNNER_BY_ID_SUCCESS = '[Runners] Get runner by id Success';
export const GET_RUNNER_BY_ID_FAILURE = '[Runners] Get runner by id Failure';

export const GET_MARKETS_BY_RUNNER_ID = '[Runners Markets] Get markets by runner Id';
export const GET_MARKETS_BY_RUNNER_ID_SUCCESS = '[Runners Markets] Get markets by runner Id Success';
export const GET_MARKETS_BY_RUNNER_ID_FAILURE = '[Runners Markets] Get markets by runner Id Failure';

// get all runner actions
export const getAllRunners = createAction(
  GET_ALL_RUNNERS,
);

export const getAllRunnersSuccess = createAction(
  GET_ALL_RUNNERS_SUCCESS,
  props<any>()
);

export const getAllRunnersFailure = createAction(
  GET_ALL_RUNNERS_FAILURE,
  props<{ any }>()
);

// get runner by id actions
export const getRunnerById = createAction(
  GET_RUNNER_BY_ID,
  props<{ runnerId: number}>()
);

export const getRunnerByIdSuccess = createAction(
  GET_RUNNER_BY_ID_SUCCESS,
  props<any>()
);

export const getRunnerByIdFailure = createAction(
  GET_RUNNER_BY_ID_FAILURE,
  props<any>()
);

// get markets by runner id
export const getMarketsByRunnerId = createAction(
  GET_MARKETS_BY_RUNNER_ID,
  props<{ runnerId: number}>()
);

export const getMarketsByRunnerIdSuccess = createAction(
  GET_MARKETS_BY_RUNNER_ID_SUCCESS,
  props<any>()
);

export const getMarketsByRunnerIdFailure = createAction(
  GET_MARKETS_BY_RUNNER_ID_FAILURE,
  props<any>()
);

