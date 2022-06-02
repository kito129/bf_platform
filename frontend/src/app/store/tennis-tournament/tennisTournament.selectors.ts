import {createFeatureSelector, createSelector} from '@ngrx/store';
import {TennisTournamentStates} from './tennisTournament.reducers';
import {TennisTournamentStats} from '../../model/dashboard/tennisTournamentStats';

const getTennisTournamentState = createFeatureSelector<TennisTournamentStates>(
  'tennisTournamentState'
);

export const getAllTennisTournaments = createSelector(
  getTennisTournamentState,
  (state: TennisTournamentStates) => state.allTennisTournaments
);

export const getTennisTournamentsList = createSelector(
  getTennisTournamentState,
  (state) => state.tennisTournamentList
);

export const getIsLoadingAllTennisTournament = createSelector(
  getTennisTournamentState,
  (state: TennisTournamentStates) => state.isLoadingAllTennisTournament
);

export const getTennisTournamentsById  = (id: string) => createSelector(
  getTennisTournamentState,
  (state) => state.allTennisTournaments.filter(x=>x._id === id)[0]
);

export const getTennisTournamentNameById = (id: string) => createSelector(
  getTennisTournamentState,
  (state) => {
    const selected = state.allTennisTournaments.filter(x => x._id === id)[0]
    if (selected) {
      let challenger = ' '
      if (selected.tournament.detail.type.isChallenger) {
        challenger = ' CHALLENGER '
      }
      return selected.tournament.detail.type.federation
        + challenger
        + selected.tournament.detail.name
        + ' '
        + new Date(selected.tournament.detail.openDate).getFullYear();
    } else {
      return null
    }
  }
);


export const getTennisTournamentStats = createSelector(
  getTennisTournamentState,
  (state:TennisTournamentStates) => {
    const stats: TennisTournamentStats = {
      length: state.allTennisTournaments.length,
      federationStats: {
        atp: state.allTennisTournaments.map(x => x.tournament.detail.type.federation).reduce(function(acc, val){
          return val === 'ATP'
            ? acc+=1
            : acc;
        },0),
        wta:state.allTennisTournaments.map(x => x.tournament.detail.type.federation).reduce(function(acc, val){
          return val === 'WTA'
            ? acc+=1
            : acc;
        },0),
        itf: state.allTennisTournaments.map(x => x.tournament.detail.type.federation).reduce(function(acc, val){
          return val === 'ITF'
            ? acc+=1
            : acc;
        },0),
      },
      type: {
        challenger: state.allTennisTournaments.map(x => x.tournament.detail.type.isChallenger).reduce(function(acc, val){
          return val
            ? acc+=1
            : acc;
        },0),
        slam: state.allTennisTournaments.map(x => x.tournament.detail.type.isSlam).reduce(function(acc, val){
          return val
            ? acc+=1
            : acc;
        },0),
        250: state.allTennisTournaments.map(x => x.tournament.detail.type.point).reduce(function(acc, val){
          return val === 250
            ? acc+=1
            : acc;
        },0),
        500: state.allTennisTournaments.map(x => x.tournament.detail.type.point).reduce(function(acc, val){
          return val === 500
            ? acc+=1
            : acc;
        },0),
        1000: state.allTennisTournaments.map(x => x.tournament.detail.type.point).reduce(function(acc, val){
          return val === 1000
            ? acc+=1
            : acc;
        },0),
      }
    }
    return  stats
  }
);

