import {createFeatureSelector, createSelector} from "@ngrx/store";
import {EntryStates} from "./entry.reducers";

const getEntryState = createFeatureSelector<EntryStates>(
  'entryState'
);

export const getAllEntries = createSelector(
  getEntryState,
  (state) => state.allEntry
);

export const isLoadingAllEntries = createSelector(
  getEntryState,
  (state ) => state.isLoadingEntry
);

export const getSelectedEntryId = createSelector(
  getEntryState,
  (state ) => state.selectedEntryId
);

export const getSelectedEntry = createSelector(
  getEntryState,
  (state ) => {
    if(state.selectedEntryId){
      return state.allEntry.filter( x => x._id === state.selectedEntryId)[0]
    } else {
      return null
    }
  }
);

export const getEntryListForm = createSelector(
  getEntryState,
  (state ) => {

    return state.allEntry.map( x => {
      return {
        name: x.entry.name,
        id: x._id
      }
    }).sort(function(a,b){
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
    })
  }
);

export const getEntryNameById = (id: string) => createSelector(
  getEntryState,
  (state) => state.allEntry.filter( x=> x._id === id)[0].entry.name
);

export const getEntryBetsById = (id: string) => createSelector(
  getEntryState,
  (state) => {
    let entry = state.allEntry.filter( x=> x._id === id)
    if(entry.length){
      return entry[0].entry.bets
    } else {
      return null
    }
  }
);

