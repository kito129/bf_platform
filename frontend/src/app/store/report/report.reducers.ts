import {Trade} from '../../model/report/trade';
import {Action, createReducer, on} from '@ngrx/store';
import * as reportActions from './report.actions';
import {Strategy} from '../../model/report/strategy';
import {
  addElement, addStudyCompare,
  deleteElement, deleteElements, removeStudyCompare,
  setterLoading,
  setterLoadingFailure,
  setterLoadingSuccess,
  updateElement
} from '../supportFunction';
import {StrategyList} from '../../model/report/strategyList';
import {NewTrade} from '../../model/report/new/newTrade';
import {SavedReport} from '../../model/report/new/savedReport';


export interface ReportStates {
  allNewTrades: NewTrade[],
  allStrategy: Strategy[],
  savedReport: SavedReport[],
  strategyList: StrategyList[],
  selectedStrategyId: string,
  selectedStrategyTradeId: string,
  tradeError: string,
  strategyError: string,
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
  isLoadingSavedReport:{
    isLoading: boolean,
    isLoadingSuccess: boolean,
    isLoadingError: boolean,
  },
  // compare
  compareList: string[]
  compareStatus: boolean
}

// this is the initial state of the app, before all HTTP call,
export const reportInitialState: ReportStates = {
  allNewTrades: [],
  allStrategy: [],
  savedReport: [],
  selectedStrategyId: '',
  strategyList: [],
  selectedStrategyTradeId: '',
  tradeError: '',
  strategyError: '',
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
  isLoadingSavedReport:{
    isLoading: false,
    isLoadingSuccess: false,
    isLoadingError: false,
  },
  compareList: [],
  compareStatus: false
}

// reducer that catch the reportActions
const reportReducers = createReducer(
  reportInitialState,

  // TRADE

  // get all trades
  on(reportActions.getAllTrades, (state,result) => (
    {...state, isLoadingAllNewTrades: setterLoading()
    })
  ),
  on(reportActions.getAllTradesSuccess, (state, result) =>

    ({...state, allNewTrades: result.response, isLoadingAllNewTrades: setterLoadingSuccess()
    })
  ),
  on(reportActions.getAllTradesFailure, (state, result) => (
    {...state, tradeError: 'API error', isLoadingAllNewTrades: setterLoadingFailure()
    })
  ),

  // create trade
  on(reportActions.createTrade, (state, result) => (
    {...state, isLoadingAllNewTrades: setterLoading()
    })
  ),
  on(reportActions.createTradeSuccess, (state, result) =>
    ({...state, allNewTrades: addElement(state.allNewTrades,result.response), isLoadingAllNewTrades: setterLoadingSuccess()
    })
  ),
  on(reportActions.createTradeFailure, (state, result) => (
    {...state, tradeError: 'API error', isLoadingAllNewTrades: setterLoadingFailure()
    })
  ),


  // update trade
  on(reportActions.updateTrade, (state,result) => (
    {...state, isLoadingAllNewTrades: setterLoading()
    })
  ),
  on(reportActions.updateTradeSuccess, (state, result) =>
    ({...state, allNewTrades: updateElement(state.allNewTrades,result.response), isLoadingAllNewTrades: setterLoadingSuccess()
    })
  ),
  on(reportActions.updateTradeFailure, (state, result) => (
    {...state, tradeError: 'API error', isLoadingAllNewTrades: setterLoadingFailure()
    })
  ),

  // delete trade
  on(reportActions.deleteTrade, (state,result) => (
    {...state, isLoadingAllNewTrades: setterLoading()
    })
  ),
  on(reportActions.deleteTradeSuccess, (state, result) =>
    ({...state, allNewTrades: deleteElement(state.allNewTrades,result.response), isLoadingAllNewTrades: setterLoadingSuccess()
    })
  ),
  on(reportActions.deleteTradeFailure, (state, result) => (
    {...state, tradeError: 'API error', isLoadingAllNewTrades: setterLoadingFailure()
    })
  ),

  // delete many trades
  on(reportActions.deleteManyTrades, (state,result) => (
    {...state, isLoadingAllNewTrades: setterLoading()
    })
  ),
  on(reportActions.deleteManyTradesSuccess, (state, result) =>
    ({...state, allNewTrades: deleteElements(state.allNewTrades,result.response), isLoadingAllNewTrades: setterLoadingSuccess()
    })
  ),
  on(reportActions.deleteManyTradesFailure, (state, result) => (
    {...state, tradeError: 'API error', isLoadingAllNewTrades: setterLoadingFailure()
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

  // -- SAVED REPORT --
  // get all
  on(reportActions.getAllSavedReport, (state, result) => (
    {...state, isLoadingSavedReport: setterLoading()
    })
  ),
  on(reportActions.getAllSavedReportSuccess, (state, result) =>

    ({...state, savedReport: result.response, isLoadingSavedReport: setterLoadingSuccess(),
      // strategyList: loadStrategyList(result.response)
    })
  ),
  on(reportActions.getAllSavedReportFailure, (state, result) => (
    {...state, strategyError: 'API error', isLoadingSavedReport: setterLoadingFailure()
    })
  ),
  // create
  on(reportActions.createSavedReport, (state, result) => (
    {...state, isLoadingSavedReport: setterLoading()
    })
  ),
  on(reportActions.createSavedReportSuccess, (state, result) =>
    ({...state, savedReport: addElement(state.savedReport,result.response), isLoadingSavedReport: setterLoadingSuccess(),
    })
  ),
  on(reportActions.createSavedReportFailure, (state, result) => (
    {...state, strategyError: 'API error', isLoadingSavedReport: setterLoadingFailure()
    })
  ),
  // update
  on(reportActions.updateSavedReport, (state, result) => (
    {...state, isLoadingSavedReport: setterLoading()
    })
  ),
  on(reportActions.updateSavedReportSuccess, (state, result) =>
    ({...state, savedReport: updateElement(state.savedReport,result.response), isLoadingSavedReport: setterLoadingSuccess(),
    })
  ),
  on(reportActions.updateSavedReportFailure, (state, result) => (
    {...state, strategyError: 'API error', isLoadingSavedReport: setterLoadingFailure()
    })
  ),
  // delete
  on(reportActions.deleteSavedReport, (state, result) => (
    {...state, isLoadingSavedReport: setterLoading()
    })
  ),
  on(reportActions.deleteSavedReportSuccess, (state, result) =>
    ({...state, savedReport: deleteElement(state.savedReport,result.response), isLoadingSavedReport: setterLoadingSuccess(),
    })
  ),
  on(reportActions.deleteSavedReportFailure, (state, result) => (
    {...state, strategyError: 'API error', isLoadingSavedReport: setterLoadingFailure()
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

  /*
  **  COMPARE
  */
  on(reportActions.addStrategyInCompare, (state, result) => (
    {...state, compareList: addStudyCompare(state.compareList, result.strategyId, result.first)
    })
  ),

  on(reportActions.removeStrategyInCompare, (state, result) => (
    {...state, compareList: removeStudyCompare(state.compareList, result.strategyId)
    })
  ),

  on(reportActions.resetStrategyCompare, (state, result) => (
    {...state, compareList: [], compareStudies: [], compareStatus: false
    })
  ),

  on(reportActions.compareStrategy, (state, result) => (
    {...state, compareStatus: !state.compareStatus
    })
  ),


)

// create the reducer
export function reducer(state: ReportStates | undefined, action: Action): any {
  return reportReducers(state, action);
}

// return the report state
export const getRunnersState = (state: ReportStates) => {
  return state
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
