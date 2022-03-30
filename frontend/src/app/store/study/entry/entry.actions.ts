/*
**  ENTRY ACTIONS
 */
import {createAction, props} from "@ngrx/store";
import {Entry} from "../../../model/study/entry/entry";

export const GET_ALL_ENTRIES = '[Entry] Get all Entries';
export const GET_ALL_ENTRIES_SUCCESS = '[Entry] Get all Entries Success';
export const GET_ALL_ENTRIES_FAILURE = '[Entry] Get all Entries Failure';

export const CREATE_ENTRY = '[Entry] Create Entry';
export const CREATE_ENTRY_SUCCESS = '[Entry] Create Entry Success';
export const CREATE_ENTRY_FAILURE = '[Entry] Create Entry Failure';

export const UPDATE_ENTRY = '[Entry] Update Entry';
export const UPDATE_ENTRY_SUCCESS = '[Entry] Update Entry Success';
export const UPDATE_ENTRY_FAILURE = '[Entry] Update Entry Failure';

export const DELETE_ENTRY = '[Entry] Delete Entry';
export const DELETE_ENTRY_SUCCESS = '[Entry] Delete Entry Success';
export const DELETE_ENTRY_FAILURE = '[Entry] Delete Entry Failure';

export const SET_SELECTED_ENTRY_ID = '[Entry] Set Selected Entry Id';
export const UNSET_SELECTED_ENTRY_ID = '[Entry] Unset Selected Entry Id';

/*
**  CRUD ENTRY ACTIONS
 */

// get all entry
export const getAllEntries = createAction(
  GET_ALL_ENTRIES,
);

export const getAllEntriesSuccess = createAction(
  GET_ALL_ENTRIES_SUCCESS,
  props<any>()
);

export const getAllEntriesFailure = createAction(
  GET_ALL_ENTRIES_FAILURE,
  props<any>()
);

// create entry
export const createEntry = createAction(
  CREATE_ENTRY,
  props<{entry: Entry}>()
);

export const createEntrySuccess = createAction(
  CREATE_ENTRY_SUCCESS,
  props<any>()
);

export const createEntryFailure = createAction(
  CREATE_ENTRY_FAILURE,
  props<any>()
);

// update entry
export const updateEntry = createAction(
  UPDATE_ENTRY,
  props<{ _id: string, entry: Entry }>()
);

export const updateEntrySuccess = createAction(
  UPDATE_ENTRY_SUCCESS,
  props<any>()
);

export const updateEntryFailure = createAction(
  UPDATE_ENTRY_FAILURE,
  props<any>()
);

// delete entry
export const deleteEntry = createAction(
  DELETE_ENTRY,
  props<{ _id: string }>()
);

export const deleteEntrySuccess = createAction(
  DELETE_ENTRY_SUCCESS,
  props<any>()
);

export const deleteEntryFailure = createAction(
  DELETE_ENTRY_FAILURE,
  props<any>()
);

/*
**  SELECTED ENTRY
 */

// set selected entry id
export const setSelectedEntry = createAction(
  SET_SELECTED_ENTRY_ID,
  props<{id: string }>()
);

// unset selected entry id
export const unsetSelectedEntry = createAction(
  UNSET_SELECTED_ENTRY_ID,
);
