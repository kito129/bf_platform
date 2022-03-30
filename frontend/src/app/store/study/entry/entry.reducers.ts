import {IsLoading} from "../../../model/isLoading";
import {Entry} from "../../../model/study/entry/entry";
import {Action, createReducer, on} from "@ngrx/store";
import * as entryActions from "../entry/entry.actions";
import {
  addElement, deleteElement,
  setterLoading,
  setterLoadingFailure,
  setterLoadingSuccess,
  updateElement
} from "../../supportFunction";

export interface EntryStates {
  allEntry: Entry[]
  entryError: string,
  selectedEntryId: string
  isLoadingEntry: IsLoading,
}

export const entryInitialState: EntryStates = {
  allEntry: [],
  entryError: '',
  selectedEntryId: '',
  isLoadingEntry: {
    isLoading: false,
    isLoadingSuccess: false,
    isLoadingError: false,
  },
}

// reducer that catch the entryActions
const entryReducer = createReducer(
  entryInitialState,

  // set selected entry
  on(entryActions.setSelectedEntry, (state, result) => (
    {...state, selectedEntryId: result.id,
    })
  ),

  // unset selected entry
  on(entryActions.unsetSelectedEntry, (state, result) => (
    {...state, selectedEntryId: null,
    })
  ),

  // get all entry
  on(entryActions.getAllEntries, (state) => (
    {...state, isLoadingEntry: setterLoading()
    })
  ),
  on(entryActions.getAllEntriesSuccess, (state, result) =>
    ({...state, allEntry: result.response, isLoadingEntry: setterLoadingSuccess()
    })
  ),
  on(entryActions.getAllEntriesFailure, (state, result) => (
    {...state, entryError: 'API error', isLoadingEntry: setterLoadingFailure()
    })
  ),

  // create entry
  on(entryActions.createEntry, (state) => (
    {...state, isLoadingEntry: setterLoading()
    })
  ),
  on(entryActions.createEntrySuccess, (state, result) =>
    ({...state, allEntry: addElement(state.allEntry,result.response) , isLoadingEntry: setterLoadingSuccess()
    })
  ),
  on(entryActions.createEntryFailure, (state, result) => (
    {...state, entryError: 'API error', isLoadingEntry: setterLoadingFailure()
    })
  ),

  // update entry
  on(entryActions.updateEntry, (state, result) => (
    {...state, isLoadingEntry: setterLoading()
    })
  ),
  on(entryActions.updateEntrySuccess, (state, result) =>
    ({...state, allEntry: updateElement(state.allEntry,result.response) , isLoadingEntry: setterLoadingSuccess()
    })
  ),
  on(entryActions.updateEntryFailure, (state, result) => (
    {...state, entryError: 'API error', isLoadingEntry: setterLoadingFailure()
    })
  ),

  // delete entry
  on(entryActions.deleteEntry, (state, result) => (
    {...state, isLoadingEntry: setterLoading()
    })
  ),
  on(entryActions.deleteEntrySuccess, (state, result) =>
    ({...state, allEntry: deleteElement(state.allEntry,result.response) , isLoadingEntry: setterLoadingSuccess()
    })
  ),
  on(entryActions.deleteEntryFailure, (state, result) => (
    {...state, entryError: 'API error', isLoadingEntry: setterLoadingFailure()
    })
  ),
)

// create the reducer
export function reducer(state: EntryStates | undefined, action: Action): any {
  return entryReducer(state, action);
}

