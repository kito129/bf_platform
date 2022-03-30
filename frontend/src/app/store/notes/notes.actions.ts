import { createAction, props } from '@ngrx/store';
import {Note} from "../../model/note/note";

export const GET_ALL_RUNNERS_NOTES = '[Notes] Get all runners Notes';
export const GET_ALL_RUNNERS_NOTES_SUCCESS = '[Notes] Get all Notes Success';
export const GET_ALL_RUNNERS_NOTES_FAILURE = '[Notes] Get all Notes Failure';

export const CREATE_RUNNER_NOTE = '[Notes] Create runner Note Id';
export const CREATE_RUNNER_NOTE_SUCCESS = '[Notes] Create runner Note Success';
export const CREATE_RUNNER_NOTE_FAILURE = '[Notes] Create runner Note Failure';

export const UPDATE_RUNNER_NOTE = '[Notes] Update runner Note';
export const UPDATE_RUNNER_NOTE_SUCCESS = '[Notes] Update runner Note Success';
export const UPDATE_RUNNER_NOTE_FAILURE = '[Notes] Update runner Note Failure';

export const DELETE_RUNNER_NOTE = '[Notes] Delete Note';
export const DELETE_RUNNER_NOTE_SUCCESS = '[Notes] Delete Note Success';
export const DELETE_RUNNER_NOTE_FAILURE = '[Notes] Delete Note Failure';


// CRUD NOTE

// get all runners notes
export const getAllRunnersNotes = createAction(
  GET_ALL_RUNNERS_NOTES,
);

export const getAllRunnersNotesSuccess = createAction(
  GET_ALL_RUNNERS_NOTES_SUCCESS,
  props<any>()
);

export const getAllRunnersNotesFailure = createAction(
  GET_ALL_RUNNERS_NOTES_FAILURE,
  props<any>()
);


// create runner note
export const createRunnerNote = createAction(
  CREATE_RUNNER_NOTE,
  props<{runnerNote: Note}>()
);

export const createRunnerNoteSuccess = createAction(
  CREATE_RUNNER_NOTE_SUCCESS,
  props<any>()
);

export const createRunnerNoteFailure = createAction(
  CREATE_RUNNER_NOTE_FAILURE,
  props<any>()
);


// update runner note
export const updateRunnerNote = createAction(
  UPDATE_RUNNER_NOTE,
  props<{ _id: string,runnerNote:Note }>()
);

export const updateRunnerNoteSuccess = createAction(
  UPDATE_RUNNER_NOTE_SUCCESS,
  props<any>()
);

export const updateRunnerNoteFailure = createAction(
  UPDATE_RUNNER_NOTE_FAILURE,
  props<any>()
);

// delete runner note
export const deleteRunnerNote = createAction(
  DELETE_RUNNER_NOTE,
  props<{ _id: string }>()
);

export const deleteRunnerNoteSuccess = createAction(
  DELETE_RUNNER_NOTE_SUCCESS,
  props<any>()
);

export const deleteRunnerNoteFailure = createAction(
  DELETE_RUNNER_NOTE_FAILURE,
  props<any>()
);
