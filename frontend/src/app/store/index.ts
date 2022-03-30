import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { environment } from '../../environments/environment';

import * as fromMarkets from './markets/markets.reducer';
import * as fromRunners from './runners/runners.reducer';
import * as fromDbManager from './dbManager/dbManager.reducer';
import * as fromNotes from './notes/notes.reducers'
import * as fromReport from './report/report.reducers'
import * as fromTennisTournament from './tennis-tournament/tennisTournament.reducers'
import * as fromBasket from './study/basket/basket.reducers'
import * as fromEntry from './study/entry/entry.reducers'
import * as fromStudy from './study/study/study.reducers'
import * as fromPlayers from './study/players/players.reducers'
import * as fromMarketAdvanced from './marketsAdvanced/marketAdvanced.reducer'


export interface AppState {
  marketsState: fromMarkets.MarketsState,
  runnersState: fromRunners.RunnersState,
  notesState: fromNotes.NotesStates,
  reportState: fromReport.ReportStates,
  tennisTournamentState: fromTennisTournament.TennisTournamentStates,
  dbState: fromDbManager.DbState,
  basketState: fromBasket.BasketStates,
  entryState: fromEntry.EntryStates,
  studyState: fromStudy.StudyStates,
  playersState: fromPlayers.PlayersStates,
  marketAdvancedState: fromMarketAdvanced.MarketAdvancedState,
}

export const reducers: ActionReducerMap<AppState> = {
  marketsState: fromMarkets.reducer,
  runnersState: fromRunners.reducer,
  notesState: fromNotes.reducer,
  reportState: fromReport.reducer,
  tennisTournamentState: fromTennisTournament.reducer,
  dbState: fromDbManager.reducer,
  basketState: fromBasket.reducer,
  entryState: fromEntry.reducer,
  studyState: fromStudy.reducer,
  playersState: fromPlayers.reducer,
  marketAdvancedState: fromMarketAdvanced.reducer,
};

const reducerKeys = ['markets', 'runners' ,'notes', 'tennisTournament', 'report' ,'dbState', 'basket', 'entry', 'study', 'players', 'marketAdvanced'];

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: reducerKeys})(reducer);
}

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  // tslint:disable-next-line:only-arrow-functions
  return function(state, action) {
    // console.log('state', state);
    // console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [debug, localStorageSyncReducer] : [localStorageSyncReducer];


