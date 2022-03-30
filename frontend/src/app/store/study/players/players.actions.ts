import {createAction, props} from "@ngrx/store";
import {Players} from "../../../model/study/players/players";

export const GET_ALL_PLAYERS = '[Players] Get all Players';
export const GET_ALL_PLAYERS_SUCCESS = '[Players] Get all Players Success';
export const GET_ALL_PLAYERS_FAILURE = '[Players] Get all Players Failure';

export const CREATE_PLAYERS = '[Players] Create Players';
export const CREATE_PLAYERS_SUCCESS = '[Players] Create Players Success';
export const CREATE_PLAYERS_FAILURE = '[Players] Create Players Failure';

export const UPDATE_PLAYERS = '[Players] Update Players';
export const UPDATE_PLAYERS_SUCCESS = '[Players] Update Players Success';
export const UPDATE_PLAYERS_FAILURE = '[Players] Update Players Failure';

export const DELETE_PLAYERS = '[Players] Delete Players';
export const DELETE_PLAYERS_SUCCESS = '[Players] Delete Players Success';
export const DELETE_PLAYERS_FAILURE = '[Players] Delete Players Failure';

export const SET_SELECTED_PLAYERS_ID = '[Players] Set Selected Players Id';
export const UNSET_SELECTED_PLAYERS_ID = '[Players] Unset Selected Players Id';


/*
**  CRUD players ACTIONS
 */

// get all players
export const getAllPlayers = createAction(
  GET_ALL_PLAYERS,
);

export const getAllPlayersSuccess = createAction(
  GET_ALL_PLAYERS_SUCCESS,
  props<any>()
);

export const getAllPlayersFailure = createAction(
  GET_ALL_PLAYERS_FAILURE,
  props<any>()
);

// create players
export const createPlayers = createAction(
  CREATE_PLAYERS,
  props<{players: Players}>()
);

export const createPlayersSuccess = createAction(
  CREATE_PLAYERS_SUCCESS,
  props<any>()
);

export const createPlayersFailure = createAction(
  CREATE_PLAYERS_FAILURE,
  props<any>()
);

// update players
export const updatePlayers = createAction(
  UPDATE_PLAYERS,
  props<{ _id: string, players: Players }>()
);

export const updatePlayersSuccess = createAction(
  UPDATE_PLAYERS_SUCCESS,
  props<any>()
);

export const updatePlayersFailure = createAction(
  UPDATE_PLAYERS_FAILURE,
  props<any>()
);

// delete players
export const deletePlayers = createAction(
  DELETE_PLAYERS,
  props<{ _id: string }>()
);

export const deletePlayersSuccess = createAction(
  DELETE_PLAYERS_SUCCESS,
  props<any>()
);

export const deletePlayersFailure = createAction(
  DELETE_PLAYERS_FAILURE,
  props<any>()
);

/*
**  SELECTED players
 */

// set selected entry id
export const setSelectedPlayers = createAction(
  SET_SELECTED_PLAYERS_ID,
  props<{id: string }>()
);

// unset selected entry id
export const unsetSelectedPlayers = createAction(
  UNSET_SELECTED_PLAYERS_ID,
);
