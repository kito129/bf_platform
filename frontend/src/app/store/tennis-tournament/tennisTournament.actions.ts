import { createAction, props } from '@ngrx/store';
import {TennisTournament} from "../../model/tennisTournament/tennisTournament";

export const GET_TENNIS_TOURNAMENT = '[Tennis Tournament] Get Tennis Tournament';
export const GET_TENNIS_TOURNAMENT_SUCCESS = '[Notes] Get Tennis Tournament Success';
export const GET_TENNIS_TOURNAMENT_FAILURE = '[Notes] Get Tennis Tournament Failure';

export const CREATE_TENNIS_TOURNAMENT = '[Tennis Tournament] Create Tennis Tournament';
export const CREATE_TENNIS_TOURNAMENT_SUCCESS = '[Notes] Create Tennis Tournament Success';
export const CREATE_TENNIS_TOURNAMENT_FAILURE = '[Notes] Create Tennis Tournament Failure';

export const UPDATE_TENNIS_TOURNAMENT = '[Tennis Tournament] Update Tennis Tournament';
export const UPDATE_TENNIS_TOURNAMENT_SUCCESS = '[Notes] Update Tennis Tournament Success';
export const UPDATE_TENNIS_TOURNAMENT_FAILURE = '[Notes] Update Tennis Tournament Failure';

export const DELETE_TENNIS_TOURNAMENT = '[Tennis Tournament] Delete Tennis Tournament';
export const DELETE_TENNIS_TOURNAMENT_SUCCESS = '[Notes] Create Delete Tournament Success';
export const DELETE_TENNIS_TOURNAMENT_FAILURE = '[Notes] Create Delete Tournament Failure';

export const SET_SELECTED_TENNIS_TOURNAMENT = '[Tennis Tournament] Set Selected Tennis Tournament';




// CRUD TENNIS TOURNAMENT NOTE

// get all runners notes
export const getAllTennisTournament = createAction(
  GET_TENNIS_TOURNAMENT,
);

export const getAllTennisTournamentSuccess = createAction(
  GET_TENNIS_TOURNAMENT_SUCCESS,
  props<any>()
);

export const getAllTennisTournamentFailure = createAction(
  GET_TENNIS_TOURNAMENT_FAILURE,
  props<any>()
);


// create tennis tournament
export const createTennisTournament = createAction(
  CREATE_TENNIS_TOURNAMENT,
  props<{tennisTournament: TennisTournament}>()
);

export const createTennisTournamentSuccess = createAction(
  CREATE_TENNIS_TOURNAMENT_SUCCESS,
  props<any>()
);

export const createTennisTournamentFailure = createAction(
  CREATE_TENNIS_TOURNAMENT_FAILURE,
  props<any>()
);


// update tennis tournament
export const updateTennisTournament = createAction(
  UPDATE_TENNIS_TOURNAMENT,
  props<{ _id: string,tennisTournament:TennisTournament }>()
);

export const updateTennisTournamentSuccess = createAction(
  UPDATE_TENNIS_TOURNAMENT_SUCCESS,
  props<any>()
);

export const updateTennisTournamentFailure = createAction(
  UPDATE_TENNIS_TOURNAMENT_FAILURE,
  props<any>()
);

// delete tennis tournament
export const deleteTennisTournament = createAction(
  DELETE_TENNIS_TOURNAMENT,
  props<{ _id: string }>()
);

export const deleteTennisTournamentSuccess = createAction(
  DELETE_TENNIS_TOURNAMENT_SUCCESS,
  props<any>()
);

export const deleteTennisTournamentFailure = createAction(
  DELETE_TENNIS_TOURNAMENT_FAILURE,
  props<any>()
);

// SELECTED TENNIS TOURNAMENT

// set selected tennis tournament
export const setSelectedTennisTournament = createAction(
  SET_SELECTED_TENNIS_TOURNAMENT,
  props<{ _id: string }>()
);
