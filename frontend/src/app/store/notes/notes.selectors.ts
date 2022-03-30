import {createFeatureSelector, createSelector} from '@ngrx/store';
import {NotesStates} from './notes.reducers';
import {NoteStats} from '../../model/dashboard/noteStats';

const getNotesState = createFeatureSelector<NotesStates>(
  'notesState'
);

export const getAllNotes = createSelector(
  getNotesState,
  (state: NotesStates) => state.allRunnersNotes
);

export const getNotesLoading = createSelector(
  getNotesState,
  (state:NotesStates) => state.isLoadingNotes
);

export const getNotesByRunnerId = (id: number) => createSelector(
  getNotesState,
  ( state:NotesStates) => {
    const myId = +id as number
    let notes = []
    if(myId){
      state.allRunnersNotes.map(x => {
        const compareId = +x.note.selection.injuredId as number
        if(myId === compareId){
          notes.push(x)
        }
      })
      if(notes.length>1){
        notes = notes.sort((a, b) => b.created - a.created)
      }

      return notes
    } else {
      return []
    }
  }
);

export const checkRunnersHaveNotes = (id: number) => createSelector(
  getNotesState,
  ( state:NotesStates) => {
    const myId = +id as number
    let notes = []
    if(myId){
      notes =  state.allRunnersNotes.filter(x => {
        const compareId = +x.note.selection.injuredId as number
        return myId === compareId
      })
      return notes.length>0
    } else {
      return []
    }
  }
);


export const getNotesStats = createSelector(
  getNotesState,
  (state:NotesStates) => {
    const stats: NoteStats = {
      length: state.allRunnersNotes.length,
      stats: {
        medical: state.allRunnersNotes.map(x => x.note.type).reduce((acc, val) =>{
          return val === 'Medical'
            ? acc+=1
            : acc;
        },0),
        note: state.allRunnersNotes.map(x => x.note.type).reduce((acc, val) =>{
          return val === 'Note'
            ? acc+=1
            : acc;
        },0),
        walkover: state.allRunnersNotes.map(x => x.note.type).reduce((acc, val) =>{
          return val === 'Walkover'
            ? acc+=1
            : acc;
        },0),
        nmRetires: state.allRunnersNotes.map(x => x.note.type).reduce((acc, val) =>{
          return val === 'No Medical Retired'
            ? acc+=1
            : acc;
        },0),
        validated: state.allRunnersNotes.map(x => x.note.validation.isValidated).reduce((acc, val) =>{
          return val
            ? acc+=1
            : acc;
        },0)
      },
      medical: {
        winner: state.allRunnersNotes.map(x => x.note.validation.detailValidation.win).reduce((acc, val) =>{
          return val
            ? acc+=1
            : acc;
        },0),
        looser: state.allRunnersNotes.map(x => x.note.validation.detailValidation.lose).reduce((acc, val) =>{
          return val
            ? acc+=1
            : acc;
        },0),
        retired: state.allRunnersNotes.map(x => x.note.validation.detailValidation.retired).reduce((acc, val) =>{
          return val
            ? acc+=1
            : acc;
        },0),
        fsRetired: state.allRunnersNotes.map(x => x.note.validation.detailValidation.retired &&
          (x.note.validation.tennisPoints.set2.runnerA ===0
          && x.note.validation.tennisPoints.set2.runnerB ===0
            && x.note.validation.tennisPoints.set3.runnerA ===0
            && x.note.validation.tennisPoints.set3.runnerB ===0
            && x.note.validation.tennisPoints.set4.runnerA ===0
            && x.note.validation.tennisPoints.set4.runnerB ===0
            && x.note.validation.tennisPoints.set5.runnerA ===0
            && x.note.validation.tennisPoints.set5.runnerB ===0)).reduce((acc, val) =>{
          return val
            ? acc+=1
            : acc;
        },0),
      }
    }
    return  stats
  }
);

