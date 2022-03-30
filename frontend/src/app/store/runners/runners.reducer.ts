import {Runner} from '../../model/runner/runner';
import {Action, createReducer, on} from '@ngrx/store';
import * as runnersActions from './runners.action';
import {setterLoading, setterLoadingFailure, setterLoadingSuccess} from '../supportFunction';
import {RunnersList} from '../../model/runner/runnersList';
import {MarketSelectionInfo} from '../../model/market/marketSelectionInfo';

export interface RunnersState {
  readonly allRunners: Runner[],
  readonly selectedRunner: Runner,
  readonly selectedRunnerMarkets: MarketSelectionInfo[],
  readonly selectedRunnerID: number,
  readonly runnersError: string,
  readonly runnersListForm: RunnersList[]
  readonly isLoadingAllRunners:{
    readonly isLoading: boolean,
    readonly isLoadingSuccess: boolean,
    readonly isLoadingError: boolean,
  },
  readonly isLoadingSelectedRunnerMarkets:{
    readonly isLoading: boolean,
    readonly isLoadingSuccess: boolean,
    readonly isLoadingError: boolean,
  },
  readonly isLoadingRunnerById:{
    readonly isLoading: boolean,
    readonly isLoadingSuccess: boolean,
    readonly isLoadingError: boolean,
  }
}

// this is the initial state of the app, before all HTTP call,
export const runnersInitialState: RunnersState = {
  allRunners: [],
  selectedRunner: null,
  selectedRunnerID: 0,
  selectedRunnerMarkets: [],
  runnersError: '',
  runnersListForm: [],
  isLoadingAllRunners:{
    isLoading: false,
    isLoadingSuccess: false,
    isLoadingError: false,
  },
  isLoadingSelectedRunnerMarkets:{
    isLoading: false,
    isLoadingSuccess: false,
    isLoadingError: false,
  },
  isLoadingRunnerById:{
    isLoading: false,
    isLoadingSuccess: false,
    isLoadingError: false,
  }
};

// reducer that catch the marketsActions
const runnersReducer = createReducer(
  runnersInitialState,

  // Get all runners form DB
  on(runnersActions.getAllRunners, (state,result) => (
      {...state, isLoadingAllRunners: setterLoading()
      })
  ),
  on(runnersActions.getAllRunnersSuccess, (state, result) =>
    ({...state, allRunners: result.response, runnersListForm: createRunnersList(result.response), isLoadingAllRunners: setterLoadingSuccess()
    })
  ),
  on(runnersActions.getAllRunnersFailure, (state, result) => (
      {...state, runnersError: 'API error', isLoadingAllRunners: setterLoadingFailure()
      })
  ),

  // get Runner by ID
  on(runnersActions.getRunnerById, (state,result) => (
      {...state, selectedRunnerID: result.runnerId, isLoadingRunnerById: setterLoading()
      })
  ),
  on(runnersActions.getRunnerByIdSuccess, (state, result) =>
    ({...state, selectedRunner: result.response[0], isLoadingRunnerById: setterLoadingSuccess()
    })
  ),
  on(runnersActions.getRunnerByIdFailure, (state, result) => (
      {...state, runnersError: 'API error', isLoadingRunnerById: setterLoadingFailure()
      })
  ),

  // get Markets by runner Id
  on(runnersActions.getMarketsByRunnerId, (state,result) => (
    {...state, isLoadingSelectedRunnerMarkets: setterLoading()
    })
  ),
  on(runnersActions.getMarketsByRunnerIdSuccess, (state, result) =>
    ({...state, selectedRunnerMarkets: result.response, isLoadingSelectedRunnerMarkets: setterLoadingSuccess()
    })
  ),
  on(runnersActions.getMarketsByRunnerIdFailure, (state, result) => (
    {...state, runnersError: 'API error', isLoadingSelectedRunnerMarkets: setterLoadingFailure()
    })
  ),
);


// create the reducer
export function reducer(state: RunnersState | undefined, action: Action): any {
  return runnersReducer(state, action);
}

// return the runners state
export const getRunnersState = (state: RunnersState) => {
  return {
    allRunners: state.allRunners,
    selectedRunner: state.selectedRunner,
    selectedRunnerID: state.selectedRunnerID,
    selectedRunnerMarkets: state.selectedRunnerID,
    runnersError: state.runnersError,
    isLoadingSelectedRunnerMarkets: state.isLoadingSelectedRunnerMarkets,
    isLoadingAllRunners: state.isLoadingAllRunners,
    isLoadingRunnerById:state.isLoadingRunnerById,
  };
};

function createRunnersList(runners: Runner[]):RunnersList[]{
  return runners.map( x=> {
    return {
      name: x.name,
      id: x.id
    }
  })
}


