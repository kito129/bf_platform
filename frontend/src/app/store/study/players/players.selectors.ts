import {createFeatureSelector, createSelector} from "@ngrx/store";
import {PlayersStates} from "./players.reducers";

const getPlayersState = createFeatureSelector<PlayersStates>(
  'playersState'
);

export const getAllPlayers = createSelector(
  getPlayersState,
  (state) => state.allPlayers
);

export const isLoadingAllPlayers = createSelector(
  getPlayersState,
  (state ) => state.isLoadingPlayers
);

export const getSelectedPlayerId = createSelector(
  getPlayersState,
  (state ) => state.selectedPlayersId
);

export const getSelectedPlayers = createSelector(
  getPlayersState,
  (state ) => {
    if(state.selectedPlayersId){
      return state.allPlayers.filter( x => x._id === state.selectedPlayersId)[0]
    } else {
      return null
    }
  }
);

export const getPlayersNameById = (id: string) => createSelector(
  getPlayersState,
  (state) => state.allPlayers.filter( x=> x._id === id)[0].players.name
);

export const getPlayersListForm = createSelector(
  getPlayersState,
  (state ) => {
    return state.allPlayers.map( x => {
      return {
        name: x.players.name,
        id: x._id
      }
    }).sort(function(a,b){
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
    })
  }
);



