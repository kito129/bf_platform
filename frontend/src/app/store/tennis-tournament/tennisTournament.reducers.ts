import {TennisTournament} from '../../model/tennisTournament/tennisTournament';
import {MarketInfoBasic} from '../../model/market/basic/marketInfoBasic';
import {Action, createReducer, on} from '@ngrx/store';
import * as tennisTournamentsActions from './tennisTournament.actions';
import {
  addElement,
  deleteElement,
  setterLoading,
  setterLoadingFailure,
  setterLoadingSuccess,
  updateElement
} from '../supportFunction';
import {TennisTournamentList} from '../../model/tennisTournament/tennisTournamentList';

export interface TennisTournamentStates {
  readonly allTennisTournaments: TennisTournament[],
  readonly selectedTennisTournament: TennisTournament,
  readonly selectedTennisTournamentMarkets: MarketInfoBasic[],
  readonly tennisTournamentList: TennisTournamentList[]
  readonly selectedTennisTournamentID: string,
  readonly tennisTournamentError: string,
  readonly isLoadingAllTennisTournament:{
    readonly isLoading: boolean,
    readonly isLoadingSuccess: boolean,
    readonly isLoadingError: boolean,
  },
}

// this is the initial state of the app, before all HTTP call,
export const tennisTournamentInitialState: TennisTournamentStates = {
  allTennisTournaments: [],
  selectedTennisTournament: {},
  selectedTennisTournamentID: '',
  tennisTournamentList: [],
  selectedTennisTournamentMarkets: [],
  tennisTournamentError: '',
  isLoadingAllTennisTournament: {
    isLoading: false,
    isLoadingSuccess: false,
    isLoadingError: false,
  },
};


// reducer that catch the TennisTournamentsActions
const tennisReduces = createReducer(
  tennisTournamentInitialState,
  // get all tennis tournaments
  on(tennisTournamentsActions.getAllTennisTournament, (state, result) => (
    {...state, isLoadingAllTennisTournament: setterLoading()
    })
  ),
  on(tennisTournamentsActions.getAllTennisTournamentSuccess, (state, result) =>
    ({...state, allTennisTournaments: result.response, isLoadingAllTennisTournament: setterLoadingSuccess(),
      tennisTournamentList: loadTennisTournamentListForm(result.response)
    })
  ),
  on(tennisTournamentsActions.getAllTennisTournamentFailure, (state, result) => (
    {...state, tennisTournamentError: 'API error', isLoadingAllTennisTournament: setterLoadingFailure()
    })
  ),

  // create tennis tournaments
  on(tennisTournamentsActions.createTennisTournament, (state, result) => (
    {...state, isLoadingAllTennisTournament: setterLoading()
    })
  ),
  on(tennisTournamentsActions.createTennisTournamentSuccess, (state, result) =>
    ({...state, allTennisTournaments: addElement(state.allTennisTournaments, result.response), isLoadingAllTennisTournament: setterLoadingSuccess(),
      tennisTournamentList: createTennisTournamentListForm(state.tennisTournamentList,result.response)
    })
  ),
  on(tennisTournamentsActions.createTennisTournamentFailure, (state, result) => (
    {...state, tennisTournamentError: 'API error', isLoadingAllTennisTournament: setterLoadingFailure()
    })
  ),

  // update tennis tournament
  on(tennisTournamentsActions.updateTennisTournament, (state, result) => (
    {...state, isLoadingAllTennisTournament: setterLoading()
    })
  ),
  on(tennisTournamentsActions.updateTennisTournamentSuccess, (state, result) =>
    ({...state, allTennisTournaments: updateElement(state.allTennisTournaments, result.response), isLoadingAllTennisTournament: setterLoadingSuccess(),
      tennisTournamentList: updateTennisTournamentListForm(state.tennisTournamentList,result.response)
    })
  ),
  on(tennisTournamentsActions.updateTennisTournamentFailure, (state, result) => (
    {...state, tennisTournamentError: 'API error', isLoadingAllTennisTournament: setterLoadingFailure()
    })
  ),

  // delete tennis tournament
  on(tennisTournamentsActions.deleteTennisTournament, (state, result) => (
    {...state, isLoadingAllTennisTournament: setterLoading()
    })
  ),
  on(tennisTournamentsActions.deleteTennisTournamentSuccess, (state, result) =>
    ({...state, allTennisTournaments: deleteElement(state.allTennisTournaments, result.response), isLoadingAllTennisTournament: setterLoadingSuccess(),
      tennisTournamentList: deleteTennisTournamentListForm(state.tennisTournamentList,result.response)
    })
  ),
  on(tennisTournamentsActions.deleteTennisTournamentFailure, (state, result) => (
    {...state, tennisTournamentError: 'API error', isLoadingAllTennisTournament: setterLoadingFailure()
    })
  ),

)

// create the reducer
export function reducer(state: TennisTournamentStates | undefined, action: Action): any {
  return tennisReduces(state, action);
}

// return the tennis tournaments state
export const getRunnersState = (state: TennisTournamentStates) => {
  return {
    allTennisTournaments: state.allTennisTournaments,
    selectedTennisTournament: state.selectedTennisTournament,
    selectedTennisTournamentID: state.selectedTennisTournamentID,
    selectedTennisTournamentMarkets: state.selectedTennisTournamentMarkets,
    tennisTournamentError: state.tennisTournamentError,
    tennisTournamentList: state.tennisTournamentList,
  };
};

function loadTennisTournamentListForm(tennisTournament: TennisTournament[]):TennisTournamentList[]{
  return tennisTournament.map( x=> {
    let challenger = ' '
    if (x.tournament.detail.type.isChallenger) {
      challenger = ' CHALLENGER '
    }
    return {
      name: x.tournament.detail.type.federation + challenger + x.tournament.detail.name + ' ' + new Date(x.tournament.detail.openDate).getFullYear(),
      id: x._id
    }
  })
}

function createTennisTournamentListForm(state: TennisTournamentList[], tennisTournament: TennisTournament):TennisTournamentList[]{
  let challenger = ' '
  if (tennisTournament.tournament.detail.type.isChallenger) {
    challenger = ' CHALLENGER '
  }
  const temp =  {
    name: tennisTournament.tournament.detail.type.federation
      + challenger
      + tennisTournament.tournament.detail.name
      + ' '
      + new Date(tennisTournament.tournament.detail.openDate).getFullYear(),
    id: tennisTournament._id
  }
  const newState =  state.map(x => x)
  newState.push(temp)
  return newState
}


function updateTennisTournamentListForm(state: TennisTournamentList[], tennisTournament: TennisTournament):TennisTournamentList[]{
  let challenger = ' '
  if (tennisTournament.tournament.detail.type.isChallenger) {
    challenger = ' CHALLENGER '
  }
  const temp =  {
    name: tennisTournament.tournament.detail.type.federation
      + challenger
      + tennisTournament.tournament.detail.name
      + ' '
      + new Date(tennisTournament.tournament.detail.openDate).getFullYear(),
    id: tennisTournament._id
  }
  return state.map(x => {
    if (x.id === tennisTournament._id) {
      return temp
    } else return x
  })
}

function deleteTennisTournamentListForm(state: TennisTournamentList[], tennisTournament: TennisTournament):TennisTournamentList[]{
  return state.filter(x => x.id !== tennisTournament._id)
}
