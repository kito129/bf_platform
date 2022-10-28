import {createFeatureSelector, createSelector} from '@ngrx/store';
import {NotesStates} from './notes.reducers';
import {NoteStats} from '../../model/dashboard/noteStats';
import {Utils} from '../../model/utils';
import {utils} from 'protractor';
import {MonthTrade} from '../../model/study/study/comparatorTableRow';
import {Note} from "../../model/note/note";

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
    const util = new Utils()
    const stats: NoteStats = util.getNotesStats(state.allRunnersNotes)
    return  stats
  }
);

export const getNotesStatistics = createSelector(
  getNotesState,
  (state:NotesStates) => {

    const util = new Utils()

    const month = util.getMonthFromDate(1577833200000)
    const monthList = util.getMonthList()
    const recap: {
      month: string,
      notes: Note[],
      noteStats: NoteStats
    }[] = []

    month.forEach( x=> {
      recap.push({
        month: x,
        notes: [],
        noteStats: null
      })
    })

    recap.forEach(r => {
      const _month = r.month.split(' ')[0]
      const _year = +r.month.split(' ')[1]
      state.allRunnersNotes.map( x => {
        const value = monthList[new Date(x.created).getMonth()]
        const year = new Date(x.created).getFullYear()
        if (value === _month && year === _year) {
          r.notes.push(x)
        }
      })
    });

    recap.forEach(r => {
      r.noteStats = util.getNotesStats(r.notes)
      r.notes = []
    })

    return recap
  })

