import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ReportStates} from './report.reducers';
import {StrategyDatatable} from '../../model/report/strategyDatatable';
import {Utils} from '../../model/calculator/utils';
import {CompareStrategy} from '../../model/report/new/compareStrategy';
import {NewTrade} from '../../model/report/new/newTrade';

const getReportState = createFeatureSelector<ReportStates>(
  'reportState'
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
      temp.trades = state.allNewTrades.filter( x => x.trade.info.strategyId === id).map(y=> y.trade.results.netProfit)
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

export const getSelectedStrategyTrades = createSelector(
  getReportState,
  (state) => state.allNewTrades.map( y=> newTradeStats(y)).filter( x=> {
    if(state.selectedStrategyId){
      return x.trade.info.strategyId === state.selectedStrategyId
    }
  }).sort((a,b) => a.trade.info.date - b.trade.info.date>0 ? 1 : a.trade.info.date - b.trade.info.date===0 ? 0 : -1)
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
        const pl = utils.getSumOfArrayNumber(tradePLValue)
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
    return state.allNewTrades.map( y=> newTradeStats(y)).sort((a, b) => b.trade.info.date - a.trade.info.date)
  })

export const isLoadingAllNewTrade = createSelector(
  getReportState,
  (state) => {
    return state.isLoadingAllNewTrades
  })

export const getAllNewTrade2021 = createSelector(
  getReportState,
  (state) => {
    return state.allNewTrades.map( y=> newTradeStats(y)).filter(x => x.trade.info.date<1640991600000)
      .sort((a, b) => b.trade.info.date - a.trade.info.date)
  })

export const getAllNewTrade2022 = createSelector(
  getReportState,
  (state) => {
    return state.allNewTrades.map( y=> newTradeStats(y)).filter(x => x.trade.info.date>1640991600000 && !x.trade.info.executor.includes('DEMO'))
      .sort((a, b) => b.trade.info.date - a.trade.info.date)
  })

export const getAllNewTrade2022Demo = createSelector(
  getReportState,
  (state) => {
    return state.allNewTrades.map( y=> newTradeStats(y)).filter(x => x.trade.info.date>1640991600000 && x.trade.info.executor.includes('DEMO'))
      .sort((a, b) => b.trade.info.date - a.trade.info.date)
  })

export const getAllNewTradeKevin = createSelector(
  getReportState,
  (state) => {
    return state.allNewTrades.map( y=> newTradeStats(y)).filter(x => x.trade.info.date>1640991600000 && x.trade.info.executor.includes('KEVIN'))
      .sort((a, b) => b.trade.info.date - a.trade.info.date)
  })

export const getAllNewTradeBagna = createSelector(
  getReportState,
  (state) => {
    return state.allNewTrades.map( y=> newTradeStats(y)).filter(x => x.trade.info.date>1640991600000 && x.trade.info.executor.includes('BAGNA'))
      .sort((a, b) => b.trade.info.date - a.trade.info.date)
  })

export const getAllNewTradeKito = createSelector(
  getReportState,
  (state) => {
    return state.allNewTrades.map( y=> newTradeStats(y)).filter(x => x.trade.info.date>1640991600000 && x.trade.info.executor.includes('KITO'))
      .sort((a, b) => b.trade.info.date - a.trade.info.date)
  })

export const getAllNewTradeInjury = createSelector(
  getReportState,
  (state) => {
    // to complete
    return state.allNewTrades.map( y=> newTradeStats(y)).filter(x => x.trade.info.date>1640991600000).sort((a, b) => b.trade.info.date - a.trade.info.date)
  })


// compare
export const getCompareList = createSelector(
  getReportState,
  (state ) => state.compareList
);

export const getComparedData = createSelector(
  getReportState,
  (state ) => {
    const compare = []
    for (const st of state.compareList){
      compare.push({
        strategy: state.allStrategy.filter(x=> x._id === st)[0],
        trades: state.allNewTrades.map( y=> newTradeStats(y)).filter( x=> x.trade.info.strategyId === st)
      })
    }
    return compare
  }
);

export const getCompareStatus = createSelector(
  getReportState,
  (state ) => state.compareStatus
);

function newTradeStats(trade: NewTrade): NewTrade{
  const t =  {
    _id: trade._id,
    created: trade.created,
    updated: trade.updated,
    trade: {
      info: trade.trade.info,
      selections: trade.trade.selections,
      trades: trade.trade.trades,
      results: trade.trade.results,
      stats: trade.trade.stats,
      params: trade.trade.params,
      statistic: {
        runnerA: {
          stats1: trade.trade.stats[0].stats1,
          stats2: trade.trade.stats[0].stats2,
          stats3: trade.trade.stats[0].stats3,
          stats4: trade.trade.stats[0].stats4,
          stats5: trade.trade.stats[0].stats5,
          stats6: trade.trade.stats[0].stats6,
          stats7: trade.trade.stats[0].stats7,
          stats8: trade.trade.stats[0].stats8,
          stats9: trade.trade.stats[0].stats9,
          stats10: trade.trade.stats[0].stats10,
        },
        runnerB: {
          // @ts-ignore
          stats1: trade.trade.stats[1].stats1,
          // @ts-ignore
          stats2: trade.trade.stats[1].stats2,
          // @ts-ignore
          stats3: trade.trade.stats[1].stats3,
          // @ts-ignore
          stats4: trade.trade.stats[1].stats4,
          // @ts-ignore
          stats5: trade.trade.stats[1].stats5,
          // @ts-ignore
          stats6: trade.trade.stats[1].stats6,
          // @ts-ignore
          stats7: trade.trade.stats[1].stats7,
          // @ts-ignore
          stats8: trade.trade.stats[1].stats8,
          // @ts-ignore
          stats9: trade.trade.stats[1].stats9,
          // @ts-ignore
          stats10: trade.trade.stats[1].stats10,
        }
      }
    }
  }
  return t
}





