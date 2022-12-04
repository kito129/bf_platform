import {Action, createReducer, on} from '@ngrx/store';
import * as reportActions from './report.actions';
import {Strategy} from '../../model/report/strategy/strategy';
import {
  addElement, addElements,
  addStudyCompare,
  backtestChangeMode,
  deleteElement,
  deleteElements,
  removeStudyCompare,
  setterLoading,
  setterLoadingFailure,
  setterLoadingSuccess,
  updateElement
} from '../supportFunction';
import {StrategyList} from '../../model/report/strategy/strategyList';
import {Trade} from '../../model/report/trade/trade';
import {SavedReport} from '../../model/report/savedReport';
import {BacktestInterface} from '../../model/backtest/backtestInterface';


export interface ReportStates {
  allNewTrades: Trade[],
  allStrategy: Strategy[],
  savedReports: SavedReport[],
  selectedSavedReportId: string,
  selectedSavedReport: SavedReport,
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
  compareListStrategy: string[]
  compareStatus: boolean
  compareListSavedReport: string[]
  compareSavedReportStatus: boolean
  // backtest
  backtestModeOn: boolean
  backtestCurrentTrades: Trade[]
  backtests: BacktestInterface[]
  isLoadingBacktests:{
    isLoading: boolean,
    isLoadingSuccess: boolean,
    isLoadingError: boolean,
  },
}

// this is the initial state of the app, before all HTTP call,
export const reportInitialState: ReportStates = {
  allNewTrades: [],
  allStrategy: [],
  savedReports: [],
  selectedSavedReportId: null,
  selectedSavedReport: null,
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
  compareListStrategy: [],
  compareStatus: false,
  compareListSavedReport: [],
  compareSavedReportStatus: false,
  // backtest
  backtestModeOn: true,
  backtestCurrentTrades: [],
  backtests: [],
  isLoadingBacktests:{
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

  // get all trade trades
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

  // -- SAVED REPORT --
  // get all
  on(reportActions.getAllSavedReport, (state, result) => (
    {...state, isLoadingSavedReport: setterLoading()
    })
  ),
  on(reportActions.getAllSavedReportSuccess, (state, result) =>

    ({...state, savedReports: result.response, isLoadingSavedReport: setterLoadingSuccess(),
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
    ({...state, savedReports: addElement(state.savedReports,result.response), isLoadingSavedReport: setterLoadingSuccess(),
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
    ({...state, savedReports: updateElement(state.savedReports,result.response), isLoadingSavedReport: setterLoadingSuccess(),
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
    ({...state, savedReports: deleteElement(state.savedReports,result.response), isLoadingSavedReport: setterLoadingSuccess(),
    })
  ),
  on(reportActions.deleteSavedReportFailure, (state, result) => (
    {...state, strategyError: 'API error', isLoadingSavedReport: setterLoadingFailure()
    })
  ),

  on(reportActions.setSelectedSavedReport, (state,result) => (
    {...state, selectedSavedReportId: result._id, selectedSavedReport: state.savedReports.filter( x => x._id === result._id)[0]})
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
    {...state, compareListStrategy: addStudyCompare(state.compareListStrategy, result.strategyId, result.first)
    })
  ),

  on(reportActions.removeStrategyInCompare, (state, result) => (
    {...state, compareListStrategy: removeStudyCompare(state.compareListStrategy, result.strategyId)
    })
  ),

  on(reportActions.resetStrategyCompare, (state, result) => (
    {...state, compareListStrategy: [], compareStudies: [], compareStatus: false
    })
  ),

  on(reportActions.compareStrategy, (state, result) => (
    {...state, compareStatus: !state.compareStatus
    })
  ),

  /*
  **  COMPARE SAVED REPORT
  */
  on(reportActions.addSavedReportInCompare, (state, result) => (
    {...state, compareListSavedReport: addStudyCompare(state.compareListSavedReport, result.savedReportId, result.first)
    })
  ),

  on(reportActions.removeSavedReportInCompare, (state, result) => (
    {...state, compareListSavedReport: removeStudyCompare(state.compareListSavedReport, result.savedReportId)
    })
  ),

  on(reportActions.compareSavedReport, (state, result) => (
    {...state, compareSavedReportStatus: !state.compareSavedReportStatus
    })
  ),

  on(reportActions.resetSavedReportCompare, (state, result) => (
    {...state, compareListSavedReport: [], compareSavedReportStatus: false
    })
  ),


  // BACKTEST
  on(reportActions.backtestChangeMode, (state, result) => (
    {...state, backtestModeOn: backtestChangeMode(state.backtestModeOn)
    })
  ),

  // trade CRUD for backtest, local
  on(reportActions.backtestAddTrade, (state, result) => (
    {...state, backtestCurrentTrades: addElement(state.backtestCurrentTrades, result.trade)
    })
  ),

  on(reportActions.backtestRemoveTrade, (state, result) => (
    {...state, backtestCurrentTrades: deleteElement(state.backtestCurrentTrades, result._id)
    })
  ),

  // backtest CRUD

  // getAll backtest
  on(reportActions.backtestGetAll, (state, result) => (
    {...state, isLoadingBacktests: setterLoading()
    })
  ),
  on(reportActions.backtestGetAllSuccess, (state, result) =>
    ({...state, backtests: result.response,
      isLoadingBacktests: setterLoadingSuccess()
    })
  ),
  on(reportActions.backtestGetAllFailure, (state, result) => (
    {...state, strategyError: 'API error',
      isLoadingBacktests: setterLoadingFailure()
    })
  ),

  // create backtest
  on(reportActions.backtestCreate, (state, result) => (
    {...state, isLoadingBacktests: setterLoading()
    })
  ),
  on(reportActions.backtestCreateSuccess, (state, result) =>
    ({...state, backtests: addElement(state.backtests,result.backtest),
      isLoadingBacktests: setterLoadingSuccess()
    })
  ),
  on(reportActions.backtestCreateFailure, (state, result) => (
    {...state, strategyError: 'API error',
      isLoadingBacktests: setterLoadingFailure()
    })
  ),

  // update backtest
  on(reportActions.backtestUpdate, (state, result) => (
    {...state, isLoadingBacktests: setterLoading()
    })
  ),
  on(reportActions.backtestUpdateSuccess, (state, result) =>
    ({...state, backtests: updateElement(state.backtests,result.backtest),
      isLoadingBacktests: setterLoadingSuccess()
    })
  ),
  on(reportActions.backtestUpdateFailure, (state, result) => (
    {...state, strategyError: 'API error',
      isLoadingBacktests: setterLoadingFailure()
    })
  ),

  // delete backtest
  on(reportActions.backtestDelete, (state, result) => (
    {...state, isLoadingBacktests: setterLoading()
    })
  ),
  on(reportActions.backtestDeleteSuccess, (state, result) =>
    ({...state, backtests: deleteElement(state.backtests,result.backtest),
      isLoadingBacktests: setterLoadingSuccess()
    })
  ),
  on(reportActions.backtestDeleteFailure, (state, result) => (
    {...state, strategyError: 'API error',
      isLoadingBacktests: setterLoadingFailure()
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
