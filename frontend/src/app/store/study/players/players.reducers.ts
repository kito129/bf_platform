import {IsLoading} from "../../../model/isLoading";
import {Players} from "../../../model/study/players/players";
import {Action, createReducer, on} from "@ngrx/store";
import * as playersActions from "./players.actions";
import {
  addElement, deleteElement,
  setterLoading,
  setterLoadingFailure,
  setterLoadingSuccess,
  updateElement
} from "../../supportFunction";

export interface PlayersStates {
  allPlayers: Players[]
  playersError: string,
  selectedPlayersId: string
  isLoadingPlayers: IsLoading,
}

export const playersInitialState: PlayersStates = {
  allPlayers: [],
  playersError: '',
  selectedPlayersId: null,
  isLoadingPlayers: {
    isLoading: false,
    isLoadingSuccess: false,
    isLoadingError: false,
  },
}

// reducer that catch the playersActions
const playersReducer = createReducer(
  playersInitialState,

  // set selected players
  on(playersActions.setSelectedPlayers, (state, result) => (
    {...state, selectedPlayersId: result.id,
    })
  ),
  // unset selected players
  on(playersActions.unsetSelectedPlayers, (state, result) => (
    {...state, selectedPlayersId: null,
    })
  ),

  // get all players
  on(playersActions.getAllPlayers, (state) => (
    {...state, isLoadingPlayers: setterLoading()
    })
  ),
  on(playersActions.getAllPlayersSuccess, (state, result) =>
    ({...state, allPlayers: result.response, isLoadingPlayers: setterLoadingSuccess()
    })
  ),
  on(playersActions.getAllPlayersFailure, (state, result) => (
    {...state, playersError: 'API error', isLoadingPlayers: setterLoadingFailure()
    })
  ),

  // create players
  on(playersActions.createPlayers, (state) => (
    {...state, isLoadingPlayers: setterLoading()
    })
  ),
  on(playersActions.createPlayersSuccess, (state, result) =>
    ({...state, allPlayers: addElement(state.allPlayers,result.response) , isLoadingPlayers: setterLoadingSuccess()
    })
  ),
  on(playersActions.createPlayersFailure, (state, result) => (
    {...state, playersError: 'API error', isLoadingPlayers: setterLoadingFailure()
    })
  ),

  // update players
  on(playersActions.updatePlayers, (state, result) => (
    {...state, isLoadingPlayers: setterLoading()
    })
  ),
  on(playersActions.updatePlayersSuccess, (state, result) =>
    ({...state, allPlayers: updateElement(state.allPlayers,result.response) , isLoadingPlayers: setterLoadingSuccess()
    })
  ),
  on(playersActions.updatePlayersFailure, (state, result) => (
    {...state, playersError: 'API error', isLoadingPlayers: setterLoadingFailure()
    })
  ),

  // delete players
  on(playersActions.deletePlayers, (state, result) => (
    {...state, isLoadingPlayers: setterLoading()
    })
  ),
  on(playersActions.deletePlayersSuccess, (state, result) =>
    ({...state, allPlayers: deleteElement(state.allPlayers,result.response) , isLoadingPlayers: setterLoadingSuccess()
    })
  ),
  on(playersActions.deletePlayersFailure, (state, result) => (
    {...state, playersError: 'API error', isLoadingPlayers: setterLoadingFailure()
    })
  ),
)

// create the reducer
export function reducer(state: PlayersStates | undefined, action: Action): any {
  return playersReducer(state, action);
}
