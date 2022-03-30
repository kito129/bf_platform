import {Note} from '../../model/note/note';
import {Action, createReducer, on} from '@ngrx/store';
import * as notesActions from './notes.actions';
import {
  addElement,
  deleteElement,
  setterLoading,
  setterLoadingFailure,
  setterLoadingSuccess,
  updateElement
} from '../supportFunction';


export interface NotesStates {
  allRunnersNotes: Note[]
  notesError: string,
  isLoadingNotes:{
    isLoading: boolean,
    isLoadingSuccess: boolean,
    isLoadingError: boolean,
  },
}

export const notesInitialState: NotesStates = {
  allRunnersNotes: [],
  notesError: '',
  isLoadingNotes:{
    isLoading: false,
    isLoadingSuccess: false,
    isLoadingError: false,
  },
}


// reducer that catch the notesActions
const notesReducer = createReducer(
  notesInitialState,

  // get all runners notes
  on(notesActions.getAllRunnersNotes, (state,result) => (
    {...state, isLoadingNotes: setterLoading()
    })
  ),
  on(notesActions.getAllRunnersNotesSuccess, (state, result) =>
    ({...state, allRunnersNotes: result.response, isLoadingNotes: setterLoadingSuccess()
    })
  ),
  on(notesActions.getAllRunnersNotesFailure, (state, result) => (
    {...state, notesError: 'API error', isLoadingNotes: setterLoadingFailure()
    })
  ),

  // create runner notes
  on(notesActions.createRunnerNote, (state, result) => (
    {...state, isLoadingNotes: setterLoading()
    })
  ),
  on(notesActions.createRunnerNoteSuccess, (state, result) =>
    ({...state, allRunnersNotes: addElement(state.allRunnersNotes,result.response) , isLoadingNotes: setterLoadingSuccess()
    })
  ),
  on(notesActions.createRunnerNoteFailure, (state, result) => (
    {...state, notesError: 'API error', isLoadingNotes: setterLoadingFailure()
    })
  ),

  // update runner notes
  on(notesActions.updateRunnerNote, (state,result) => (
    {...state, isLoadingNotes: setterLoading()
    })
  ),
  on(notesActions.updateRunnerNoteSuccess, (state, result) =>
    ({...state, allRunnersNotes: updateElement(state.allRunnersNotes,result.response), isLoadingNotes: setterLoadingSuccess()
    })
  ),
  on(notesActions.updateRunnerNoteFailure, (state, result) => (
    {...state, notesError: 'API error',isLoadingNotes: setterLoadingFailure()
    })
  ),

  // delete runner notes
  on(notesActions.deleteRunnerNote, (state,result) => (
    {...state, isLoadingNotes: setterLoading()
    })
  ),
  on(notesActions.deleteRunnerNoteSuccess, (state, result) =>
    ({...state, allRunnersNotes: deleteElement(state.allRunnersNotes,result.response), isLoadingNotes: setterLoadingSuccess()
    })
  ),
  on(notesActions.deleteRunnerNoteFailure, (state, result) => (
    {...state, notesError: 'API error', isLoadingNotes: setterLoadingFailure()
    })
  ),

)


// create the reducer
export function reducer(state: NotesStates | undefined, action: Action): any {
  return notesReducer(state, action);
}


