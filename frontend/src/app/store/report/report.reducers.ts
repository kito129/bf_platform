import {Trade} from '../../model/report/trade';
import {Action, createReducer, on} from '@ngrx/store';
import * as reportActions from './report.actions';
import {Strategy} from '../../model/report/strategy';
import {
  addElement,
  deleteElement,
  setterLoading,
  setterLoadingFailure,
  setterLoadingSuccess,
  updateElement
} from '../supportFunction';
import {StrategyList} from '../../model/report/strategyList';
import {NewTrade} from '../../model/report/new/newTrade';


export interface ReportStates {
  allTrades: Trade[],
  allNewTrades: NewTrade[],
  allStrategy: Strategy[],
  strategyList: StrategyList[],
  selectedStrategyId: string,
  selectedStrategyTradeId: string,
  tradeError: string,
  strategyError: string,
  isLoadingAllTrades:{
    isLoading: boolean,
    isLoadingSuccess: boolean,
    isLoadingError: boolean,
  },
  isLoadingAllNewTrades:{
    isLoading: boolean,
    isLoadingSuccess: boolean,
    isLoadingError: boolean,
  },
  isLoadingAllStrategy:{
    isLoading: boolean,
    isLoadingSuccess: boolean,
    isLoadingError: boolean,
  },
}

// this is the initial state of the app, before all HTTP call,
export const reportInitialState: ReportStates = {
  allTrades: [],
  allNewTrades: [],
  allStrategy: [],
  selectedStrategyId: '',
  strategyList: [],
  selectedStrategyTradeId: '',
  tradeError: '',
  strategyError: '',
  isLoadingAllTrades:{
    isLoading: false,
    isLoadingSuccess: false,
    isLoadingError: false,
  },
  isLoadingAllNewTrades:{
    isLoading: false,
    isLoadingSuccess: false,
    isLoadingError: false,
  },
  isLoadingAllStrategy:{
    isLoading: false,
    isLoadingSuccess: false,
    isLoadingError: false,
  },
}

// reducer that catch the reportActions
const reportReducers = createReducer(
  reportInitialState,

  // TRADE

  // get all trades
  on(reportActions.getAllTrades, (state,result) => (
    {...state, isLoadingAllTrades: setterLoading()
    })
  ),
  on(reportActions.getAllTradesSuccess, (state, result) =>

    ({...state, allTrades: result.response, isLoadingAllTrades: setterLoadingSuccess()
    })
  ),
  on(reportActions.getAllTradesFailure, (state, result) => (
    {...state, tradeError: 'API error', isLoadingAllTrades: setterLoadingFailure()
    })
  ),

  // create trade
  on(reportActions.createTrade, (state, result) => (
    {...state, isLoadingAllTrades: setterLoading()
    })
  ),
  on(reportActions.createTradeSuccess, (state, result) =>
    ({...state, allTrades: addElement(state.allTrades,result.response), isLoadingAllTrades: setterLoadingSuccess()
    })
  ),
  on(reportActions.createTradeFailure, (state, result) => (
    {...state, tradeError: 'API error', isLoadingAllTrades: setterLoadingFailure()
    })
  ),


  // update trade
  on(reportActions.updateTrade, (state,result) => (
    {...state, isLoadingAllTrades: setterLoading()
    })
  ),
  on(reportActions.updateTradeSuccess, (state, result) =>
    ({...state, allTrades: updateElement(state.allTrades,result.response), isLoadingAllTrades: setterLoadingSuccess()
    })
  ),
  on(reportActions.updateTradeFailure, (state, result) => (
    {...state, tradeError: 'API error', isLoadingAllTrades: setterLoadingFailure()
    })
  ),

  // delete trade
  on(reportActions.deleteTrade, (state,result) => (
    {...state, isLoadingAllTrades: setterLoading()
    })
  ),
  on(reportActions.deleteTradeSuccess, (state, result) =>
    ({...state, allTrades: deleteElement(state.allTrades,result.response), isLoadingAllTrades: setterLoadingSuccess()
    })
  ),
  on(reportActions.deleteTradeFailure, (state, result) => (
    {...state, tradeError: 'API error', isLoadingAllTrades: setterLoadingFailure()
    })
  ),

  // -- NEW TRADE --

  // get all new trades
  on(reportActions.getAllNewTrades, (state,result) => (
    {...state, isLoadingAllNewTrades: setterLoading()
    })
  ),
  on(reportActions.getAllNewTradesSuccess, (state, result) =>

    ({...state, allNewTrades: result.response, isLoadingAllNewTrades: setterLoadingSuccess()
    })
  ),
  on(reportActions.getAllNewTradesFailure, (state, result) => (
    {...state, tradeError: 'API error', isLoadingAllNewTrades: setterLoadingFailure()
    })
  ),


  // STRATEGY
  // get all strategy
  on(reportActions.getAllStrategies, (state, result) => (
    {...state, isLoadingAllStrategy: setterLoading()
    })
  ),
  on(reportActions.getAllStrategySuccess, (state, result) =>

    ({...state, allStrategy: result.response, isLoadingAllStrategy: setterLoadingSuccess(),
      strategyList: loadStrategyList(result.response)
    })
  ),
  on(reportActions.getAllStrategyFailure, (state, result) => (
    {...state, strategyError: 'API error', isLoadingAllStrategy: setterLoadingFailure()
    })
  ),

  // create strategy
  on(reportActions.createStrategy, (state, result) => (
    {...state, isLoadingAllStrategy: setterLoading()
    })
  ),
  on(reportActions.createStrategySuccess, (state, result) =>
    ({...state, allStrategy: addElement(state.allStrategy,result.response), isLoadingAllStrategy: setterLoadingSuccess(),
      strategyList: createStrategyList(state.strategyList,result.response)
    })
  ),
  on(reportActions.createStrategyFailure, (state, result) => (
    {...state, strategyError: 'API error', isLoadingAllStrategy: setterLoadingFailure()
    })
  ),

  // update strategy
  on(reportActions.updateStrategy, (state,result) => (
    {...state, isLoadingAllStrategy: setterLoading()
    })
  ),
  on(reportActions.updateStrategySuccess, (state, result) =>
    ({...state, allStrategy: updateElement(state.allStrategy,result.response), isLoadingAllStrategy: setterLoadingSuccess(),
      strategyList: updateStrategyList(state.strategyList,result.response)
    })
  ),
  on(reportActions.updateStrategyFailure, (state, result) => (
    {...state, strategyError: 'API error', isLoadingAllStrategy: setterLoadingFailure()
    })
  ),

  // delete strategy
  on(reportActions.deleteStrategy, (state,result) => (
    {...state, isLoadingAllStrategy: setterLoading()
    })
  ),
  on(reportActions.deleteStrategySuccess, (state, result) =>
    ({...state, allStrategy: deleteElement(state.allStrategy,result.response), isLoadingAllStrategy: setterLoadingSuccess(),
      strategyList: deleteStrategyList(state.strategyList,result.response)
    })
  ),
  on(reportActions.deleteStrategyFailure, (state, result) => (
    {...state, strategyError: 'API error', isLoadingAllStrategy: setterLoadingFailure()
    })
  ),

  // SELECT STRATEGY AND STRATEGY TRADES

  on(reportActions.setSelectedStrategy, (state,result) => (
    {...state, selectedStrategyId: result._id})
  ),


)

// create the reducer
export function reducer(state: ReportStates | undefined, action: Action): any {
  return reportReducers(state, action);
}

// return the report state
export const getRunnersState = (state: ReportStates) => {
  return {
    allTrades: state.allTrades,
    allStrategy: state.allStrategy,
    tradeError: state.tradeError,
    strategyError: state.strategyError,
    isLoadingAllTrades: state.isLoadingAllTrades,
    isLoadingAllStrategy: state.isLoadingAllStrategy,
  };
};

function loadStrategyList(strategy: Strategy[]):StrategyList[]{
  return strategy.map(x=> {
    return {
      name: x.strategy.info.name,
      id: x._id,
      sport: x.strategy.info.sport
    }
  })
}

function createStrategyList(state: StrategyList[], strategy: Strategy):StrategyList[]{
  const newState = state.map( x => x)
   newState.push({
    name: strategy.strategy.info.name,
    id: strategy._id,
   sport: strategy.strategy.info.sport
  })
  return newState
}

function updateStrategyList(state: StrategyList[],strategy: Strategy):StrategyList[]{
  return state.map(x => {
    if (x.id === strategy._id) {
      return {
        name: strategy.strategy.info.name,
        id: strategy._id,
        sport: strategy.strategy.info.sport
      }
    } else return x
  })
}

function deleteStrategyList(state: StrategyList[], strategy: Strategy):StrategyList[]{
  return state.filter(x => x.id !== strategy._id)
}
