import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ReportStates} from './report.reducers';
import {StrategyDatatable} from '../../model/report/strategy/strategyDatatable';
import {Utils} from '../../model/utils';
import {Trade} from '../../model/report/trade/trade';
import {Strategy} from '../../model/report/strategy/strategy';
import {SavedReport} from '../../model/report/savedReport';
import * as util from 'util';
import {Backtest, BacktestInterface} from '../../model/backtest/backtestInterface';
import {BacktestTradeInterface} from '../../model/backtest/backtestTrade';

const getReportState = createFeatureSelector<ReportStates>(
  'reportState'
);

export interface StrategyEquity{
  id: string,
  name: string
  trades: number[]
}


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

export const getSelectedStrategyName = createSelector(
  getReportState,
  (state) => {
    const check = state.allStrategy.filter(x => x._id === state.selectedStrategyId)[0]
    if(check) {
      if (check.strategy.info.name) {
        return check.strategy.info.name
      }
    } else {
      return ''
    }
  }
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


// -- STRATEGY MAIN --

// selected
export const getSelectedStrategyTrades = createSelector(
  getReportState,
  (state) => state.allNewTrades.map( y=> tradeStats(y)).filter( x=> {
    if(state.selectedStrategyId){
      return x.trade.info.strategyId === state.selectedStrategyId
    }
  }).sort((a,b) => a.trade.info.date - b.trade.info.date>0 ? 1 : a.trade.info.date - b.trade.info.date===0 ? 0 : -1)
);

// datatable support function
function filterStrategyDatatable(allStrategy, allTrades, wantStrategy, strategyIds: string[]){
  const strategy = allStrategy.filter( x => strategyIds.includes(x._id))
  const trades = allTrades.filter( x => strategyIds.includes(x.trade.info.strategyId))
  if(wantStrategy){
    return generateStrategyDatatable(strategy, trades)
  } else {
    return  trades
  }
}

function generateStrategyDatatable(allStrategy: Strategy[], allTrades: Trade[]): StrategyDatatable[]{
  const utils = new Utils()
  const temp: StrategyDatatable[] = []
  for(const strategy of allStrategy){
    const trades = allTrades.filter(x => x.trade.info.strategyId === strategy._id)
    if(trades.length){
      const tradePLValue = trades.map(x=> {
        return x.trade.results.netProfit
      })
      const pl = utils.sumOfArray(tradePLValue)
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
        maxDD: utils.maxDDOfPl(tradePLValue, false, strategy.strategy.info.bank),
        maxDDPercent: utils.maxDDOfPl(tradePLValue, true, strategy.strategy.info.bank),
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

// get strategy datatable
export const getAllStrategyDatatable = createSelector(
  getReportState,
  (state) => {
    return generateStrategyDatatable(state.allStrategy, state.allNewTrades)
  }
);

// injury
export const getInjury2022Data = (wantStrategy: boolean) => createSelector(
  getReportState,
  (state) => {
    const strategyId = ['622394c2a0074b70dc573b44','622394e7a0074b70dc573b4c','6317a92f75f1fd3184bbb8f6','622394dca0074b70dc573b48','6317a91675f1fd3184bbb8f4','622394d7a0074b70dc573b46','622394e0a0074b70dc573b4a', '632b7a86df278b8be88388e1']
    return filterStrategyDatatable(state.allStrategy, state.allNewTrades, wantStrategy, strategyId)
  }
);
export const getInjury2021Data = (wantStrategy: boolean) => createSelector(
  getReportState,
  (state) => {
    const strategyId = ['600358c13fa50522a49bea67','6145ee4a89f3901bc8348e1c','614b045c5bb6712dde14cb53','61461e8189f3901bc8348f97','61461e1989f3901bc8348f90','6145f08489f3901bc8348ec2','615ed6cedd8ad05ee3bba549','615ed6c6dd8ad05ee3bba548','60450d4e71faef3ab82ee7cd','','','']
    return filterStrategyDatatable(state.allStrategy, state.allNewTrades, wantStrategy, strategyId)

  }
);
export const getOtherData = (wantStrategy: boolean) => createSelector(
  getReportState,
  (state) => {
    const strategyId = ['622394eca0074b70dc573b4e','622394f3a0074b70dc573b50','61519183fdf51c42275e9491', '600dc02bca42b66bef436dea', '602e489d84e83e6fb6815a12', '6220e21a9344202f70a26818']
    return filterStrategyDatatable(state.allStrategy, state.allNewTrades, wantStrategy, strategyId)

  }
);
// passive
export const getPassiveLiveData = (wantStrategy: boolean) => createSelector(
  getReportState,
  (state) => {
    const strategy = state.allStrategy.filter( x => x.strategy.info.name.indexOf('AUG - ')!==-1)
    const strategyId = strategy.map(x => x._id)
    const trades = state.allNewTrades.filter( x => strategyId.includes(x.trade.info.strategyId))
    if(wantStrategy){
      return generateStrategyDatatable(strategy, trades)
    } else {
      return  trades
    }

  }
);
export const getPassiveDemoData = (wantStrategy: boolean) => createSelector(
  getReportState,
  (state) => {
    const strategy = state.allStrategy.filter( x => x.strategy.info.executor.indexOf('DEMO')!==-1)
    const strategyId = strategy.map(x => x._id)
    const trades = state.allNewTrades.filter( x => strategyId.includes(x.trade.info.strategyId))
    if(wantStrategy){
      return generateStrategyDatatable(strategy, trades)
    } else {
      return  trades
    }
  }
);
// personal
export const getActiveKevinData = (wantStrategy: boolean) => createSelector(
  getReportState,
  (state) => {
    const strategy = state.allStrategy.filter( x => x.strategy.info.executor.indexOf('KEVIN')!==-1)
    /*
    const addtional = ['6266d8cb1a800430234d7d6a','6266d8e21a800430234d7d6c', '6266d8f11a800430234d7d6e']
    strategy = strategy.concat(state.allStrategy.filter( x=> addtional.includes(x._id)))

     */
    const strategyId = strategy.map(x => x._id)
    const trades = state.allNewTrades.filter( x => strategyId.includes(x.trade.info.strategyId))
    if(wantStrategy){
      return generateStrategyDatatable(strategy, trades)
    } else {
      return  trades
    }
  }
);
export const getactiveBagnaData = (wantStrategy: boolean) => createSelector(
  getReportState,
  (state) => {
    const strategy = state.allStrategy.filter( x => x.strategy.info.executor.indexOf('BAGNA')!==-1)
    const strategyId = strategy.map(x => x._id)
    const trades = state.allNewTrades.filter( x => strategyId.includes(x.trade.info.strategyId))
    if(wantStrategy){
      return generateStrategyDatatable(strategy, trades)
    } else {
      return  trades
    }
  }
);
export const getActiveKitoData = (wantStrategy: boolean) => createSelector(
  getReportState,
  (state) => {
    const strategy = state.allStrategy.filter( x => x.strategy.info.executor.indexOf('KITO')!==-1)
    const strategyId = strategy.map(x => x._id)
    const trades = state.allNewTrades.filter( x => strategyId.includes(x.trade.info.strategyId))
    if(wantStrategy){
      return generateStrategyDatatable(strategy, trades)
    } else {
      return trades
    }
  }
);

// -- NEW TRADE --
export const getAllNewTrade = createSelector(
  getReportState,
  (state) => {
    return state.allNewTrades.map( y=> tradeStats(y)).sort((a, b) => b.trade.info.date - a.trade.info.date)
  })

export const isLoadingAllNewTrade = createSelector(
  getReportState,
  (state) => {
    return state.isLoadingAllNewTrades
  })

// Compare strategy
export const getCompareList = createSelector(
  getReportState,
  (state ) => state.compareListStrategy
);

export const getComparedData = createSelector(
  getReportState,
  (state ) => {
    const compare = []
    for (const st of state.compareListStrategy){
      compare.push({
        strategy: state.allStrategy.filter(x=> x._id === st)[0],
        trades: state.allNewTrades.map( y=> tradeStats(y)).filter( x=> x.trade.info.strategyId === st)
      })
    }
    return compare
  }
);

export const getLastTradeUploadedDate = createSelector(
  getReportState,
  (state ) => {
    return state.allNewTrades.length ?
      JSON.parse(JSON.stringify(state.allNewTrades.map(x => x.trade.info.date)))
      .sort((a,b) => b - a)[0] : 0
  }
);

export const getCompareStatus = createSelector(
  getReportState,
  (state ) => state.compareStatus
);

// compare saved Report
export const getCompareSavedReportList = createSelector(
  getReportState,
  (state ) => state.compareListSavedReport
);

export const getComparedSavedReportData = createSelector(
  getReportState,
  (state ) => {
    const utils = new Utils()
    const compare = []
    for (const st of state.compareListSavedReport){
      const temp = state.savedReports.filter(x=> x._id === st)[0]
      compare.push({
        strategy: utils.generateStrategy(temp.savedReport.name,1000,temp._id),
        trades: state.allNewTrades.map( y=> tradeStats(y)).filter( x=> temp.savedReport.tradesIds.includes(x._id))
      })
    }
    return compare
  }
);

export const getCompareSavedReportStatus = createSelector(
  getReportState,
  (state ) => state.compareSavedReportStatus
);


// SAVED REPORT
export const isLoadingSavedReport = createSelector(
  getReportState,
  (state ) => state.isLoadingSavedReport
);

export const getAllSavedReports = createSelector(
  getReportState,
  (state ) => JSON.parse(JSON.stringify(state.savedReports)).sort((a,b) => a.updated-b.updated)
);

export const getSelectedSavedReport = createSelector(
  getReportState,
  (state ) => state.selectedSavedReport
);

export const getSelectedSavedReportName = createSelector(
  getReportState,
  (state ) => {
    if (state.selectedSavedReport) return state.selectedSavedReport.savedReport.name
    else return ''
  }
);
export const getSelectedSavedReportId = createSelector(
  getReportState,
  (state ) => {
    if(state.selectedSavedReport){
      return state.selectedSavedReport._id
    } else return null
  }
);
export const getSavedReportDatatable = createSelector(
  getReportState,
  (state ) =>{
    return generateSavedReportDatatable(state.savedReports, state.allNewTrades)
  }
);
export const getSelectedSavedReportTrades = createSelector(
  getReportState,
  (state ) =>{
    if(state.savedReports.length){
      const find = state.savedReports.filter(x => x._id === state.selectedSavedReportId)
      const tradesId = find.length ? find[0].savedReport.tradesIds : []
      return state.allNewTrades.filter( x => tradesId.includes(x._id))
    } else return []

  }
);

function generateSavedReportDatatable(savedReports: SavedReport[], allTrades: Trade[]){
  const utils = new Utils()
  const temp: StrategyDatatable[] = []
  for(const sr of savedReports){
    const bank  = 1000
    const trades = allTrades.filter(x => sr.savedReport.tradesIds.includes(x._id))
    const tempStrategy = utils.generateStrategy(sr.savedReport.name,bank, sr._id)
    if(trades.length){
      // check pl
      const tradePLValue = trades.map(x=> {
        return x.trade.results.netProfit
      })
      const pl = utils.sumOfArray(tradePLValue)
      // save row
      temp.push({
        bank: 0, currentBank: 0, executor: '', moneyManagement: '', sport: '', stake: 0, typeOfStake: '', year: 0,
        _id: sr._id,
        name: sr.savedReport.name,
        numberOfTrade: trades.length,
        pl,
        plPercent: pl/bank,
        maxDD: utils.maxDDOfPl(tradePLValue, false, bank),
        maxDDPercent: utils.maxDDOfPl(tradePLValue, true, bank),
        winRatio: utils.getWinRatioTrades(trades),
        strategy: tempStrategy,
        savedReport: sr,
      })
    } else {
      temp.push({
        bank: 0, currentBank: 0, executor: '', moneyManagement: '', sport: '', stake: 0, typeOfStake: '', year: 0,
        _id: sr._id,
        name: sr.savedReport.name,
        numberOfTrade: trades.length,
        pl: 0,
        plPercent: 0,
        maxDD: 0,
        maxDDPercent:0,
        winRatio:0,
        strategy: tempStrategy,
        savedReport: sr,
      })
    }
  }
  return temp
}

function tradeStats(trade: Trade): Trade{
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

/*
**  BACKTEST
 */
export const getBacktestModeState = createSelector(
  getReportState,
  (state ) => state.backtestModeOn
);

export const getBacktestCurrentTradesCount = createSelector(
  getReportState,
  (state ) => state.backtestCurrentTrades.length
);

// get all backtest trade
export const getBacktestCurrentTrades = createSelector(
  getReportState,
  (state ) => state.backtestCurrentTrades
);

// get all backtest
export const getAllBacktest = createSelector(
  getReportState,
  (state ) => state.backtests
);

export const getBacktestIsLoading = createSelector(
  getReportState,
  (state ) => state.isLoadingBacktests
);

// selected backtest
export const getSelectedBacktest = createSelector(
  getReportState,
  (state ) => state.selectedBacktest
);

export const getSelectedBacktestId = createSelector(
  getReportState,
  (state ) => {
    if(state.selectedBacktest){
      return state.selectedBacktest._id
    } else {
      return null
    }
  }
);

export const getSelectedBacktestTrade = createSelector(
  getReportState,
  (state ) => {
    if(state.selectedBacktest !==null){
      return state.allBacktestTrades.filter( x => x.trade.info.strategyId === state.selectedBacktest.backtest.strategyId)
    } else {
      return []
    }
  }
);

// backtest trade
export const getAllBacktestTrade = createSelector(
  getReportState,
  (state ) => state.allBacktestTrades
);

export const getIsLoadingAllBacktestTrade = createSelector(
  getReportState,
  (state ) => state.isLoadingAllBacktestTrades
);

export const getAllBacktestAsStrategyDatatable = createSelector(
  getReportState,
  (state ) => {
    return generateBacktestReportDatatable(state.backtests, state.allBacktestTrades)
  }
);

export const getBacktestTradesToRemove = createSelector(
  getReportState,
  (state ) => {
    return state.backtestTradesToRemove
  }
);


function generateBacktestReportDatatable(backtests: BacktestInterface[], allTrades: Trade[]): StrategyDatatable[]{
  const utils = new Utils()
  const temp: StrategyDatatable[] = []
  if(backtests.length){
    for(const bt of backtests){
      console.log(bt)
      const bank  = bt.backtest.bank
      const trades = allTrades.filter(x => bt.backtest.tradesIds.includes(x._id))
      const tempStrategy = utils.generateStrategy(bt.backtest.name,bank, bt._id)
      if(trades.length){
        // check pl
        const tradePLValue = trades.map(x=> {
          return x.trade.results.netProfit
        })
        const pl = utils.sumOfArray(tradePLValue)
        // save row
        temp.push({
          bank: bt.backtest.bank,
          currentBank: bt.backtest.bank,
          executor: 'BACKTEST',
          moneyManagement: '',
          sport: '',
          stake: 0,
          typeOfStake: '',
          year: 0,
          _id: bt._id,
          name: bt.backtest.name,
          numberOfTrade: trades.length,
          pl,
          plPercent: pl/bank,
          maxDD: utils.maxDDOfPl(tradePLValue, false, bank),
          maxDDPercent: utils.maxDDOfPl(tradePLValue, true, bank),
          winRatio: utils.getWinRatioTrades(trades),
          strategy: tempStrategy,
          backtest: bt,
        })
      } else {
        temp.push({
          bank: 0, currentBank: 0, executor: '', moneyManagement: '', sport: '', stake: 0, typeOfStake: '', year: 0,
          _id: bt._id,
          name: bt.backtest.name,
          numberOfTrade: trades.length,
          pl: 0,
          plPercent: 0,
          maxDD: 0,
          maxDDPercent:0,
          winRatio:0,
          strategy: tempStrategy,
          backtest: bt,
        })
      }
    }
  } else {
    return []
  }

  return temp
}





