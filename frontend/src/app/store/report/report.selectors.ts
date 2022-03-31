import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ReportStates} from './report.reducers';
import {StrategyDatatable} from '../../model/report/strategyDatatable';
import {Utils} from '../../model/calculator/utils';

const getReportState = createFeatureSelector<ReportStates>(
  'reportState'
);

export const getAllTrade = createSelector(
  getReportState,
  (state) => state.allTrades
);

export const getAllTradeLoading = createSelector(
  getReportState,
  (state) => state.isLoadingAllTrades
);

export const getAllStrategy = createSelector(
  getReportState,
  (state) => state.allStrategy
);

export interface StrategyEquity{
  id: string,
  name: string
  trades: number[]
}

export const getAllEquity = createSelector(
  getReportState,
  (state) => {
    const response:StrategyEquity[] = []
    // tslint:disable-next-line:prefer-for-of
    for(let i=0;i<state.allStrategy.length;i++){
      const id = state.allStrategy[i]._id
      const temp:StrategyEquity  = {
        id,
        name: state.allStrategy[i].strategy.info.name,
        trades: []
      }
      temp.trades = state.allTrades.filter( x => x.trade.info.strategyId === id).map(y=> y.trade.result.netProfit)
      response.push(temp)
    }
    return response
  }
);

export const getAllStrategyLoading = createSelector(
  getReportState,
  (state) => state.isLoadingAllStrategy
);

export const getStrategyList = createSelector(
  getReportState,
  (state) => state.strategyList
);

export const getSelectedStrategy = createSelector(
  getReportState,
  (state) => state.allStrategy.filter( x=> x._id === state.selectedStrategyId)[0]
);

export const getNofTradeByStrategyId  = (id: string) => createSelector(
  getReportState,
  (state) => state.allTrades.filter( x=> x.trade.info.strategyId === id).reduce((acc, val) =>{
    return val
      ? acc+=1
      : acc;
  },0),
);

export const getStrategyPlById  = (id: string) => createSelector(
  getReportState,
  (state) => state.allTrades.filter( x=> x.trade.info.strategyId === id).reduce((acc, val) =>{
    return val
      ? acc+=val.trade.result.netProfit
      : acc;
  },0),
);


export const getSelectedStrategyId = createSelector(
  getReportState,
  (state) => state.selectedStrategyId
);

export const getStrategyNameById  = (id: string) => createSelector(
  getReportState,
  (state) => state.allStrategy.filter( x=> x._id === id)[0].strategy.info.name
);

export const getStrategyById  = (id: string) => createSelector(
  getReportState,
  (state) => state.allStrategy.filter( x=> x._id === id)[0]
);

export const getStrategySportById  = (id: string) => createSelector(
  getReportState,
  (state) => state.allStrategy.filter( x=> x._id === id)[0].strategy.info.sport
);


export const getSelectedStrategyTrades = createSelector(
  getReportState,
  (state) => state.allNewTrades.filter( x=> {
    if(state.selectedStrategyId){
      return x.trade.info.strategyId === state.selectedStrategyId
    }
  })
);

export const getStrategyDatatable = createSelector(
  getReportState,
  (state) => {

    const utils = new Utils()
    const temp: StrategyDatatable[] = []

    for(const strategy of state.allStrategy){
      const trades = state.allNewTrades.filter(x => x.trade.info.strategyId === strategy._id)
      if(trades.length){
        const tradePLValue = trades.map(x=> {
          return x.trade.results.netProfit
        })
        const pl = utils.getPlTrades(tradePLValue)
        temp.push({
          _id: strategy._id,
          name: strategy.strategy.info.name,
          sport: strategy.strategy.info.sport,
          year: strategy.strategy.info.year,
          numberOfTrade: trades.length,
          currentBank: strategy.strategy.info.bank + pl,
          stake: strategy.strategy.info.stake,
          typeOfStake: strategy.strategy.info.typeOfStake,
          executor: strategy.strategy.info.executor,
          moneyManagement: strategy.strategy.info.moneyManagement,
          bank: strategy.strategy.info.bank,
          pl,
          plPercent: pl/strategy.strategy.info.bank,
          maxDD: utils.maxDDOfTrades(tradePLValue, false, strategy.strategy.info.bank),
          maxDDPercent: utils.maxDDOfTrades(tradePLValue, true, strategy.strategy.info.bank),
          winRatio: utils.getWinRatioTrades(trades),
          strategy
        })
      } else {
        temp.push({
          _id: strategy._id,
          name: strategy.strategy.info.name,
          sport: strategy.strategy.info.sport,
          year: strategy.strategy.info.year,
          numberOfTrade: trades.length,
          currentBank: 0,
          stake: strategy.strategy.info.stake,
          typeOfStake: strategy.strategy.info.typeOfStake,
          executor: strategy.strategy.info.executor,
          moneyManagement: strategy.strategy.info.moneyManagement,
          bank: 0,
          pl: 0,
          plPercent: 0,
          maxDD: 0,
          maxDDPercent: 0,
          winRatio: 0,
          strategy
        })
      }
    }
    return temp
  }
);

// -- NEW TRADE --
export const getAllNewTrade = createSelector(
  getReportState,
  (state) => {
    return state.allNewTrades.sort((a, b) => b.trade.info.date - a.trade.info.date > 0 ? 1 : b.trade.info.date - a.trade.info.date === 0 ? 0 : -1)
  })

export const isLoadingAllNewTrade = createSelector(
  getReportState,
  (state) => {
    return state.isLoadingAllNewTrades
  })





