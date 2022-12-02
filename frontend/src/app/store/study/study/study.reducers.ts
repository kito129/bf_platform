import {IsLoading} from '../../../model/isLoading';
import {Study} from '../../../model/study/study/study';
import {Action, createReducer, on} from '@ngrx/store';
import * as studyActions from '../study/study.actions';
import {
  addElement, deleteElement, reset,
  setterLoading,
  setterLoadingFailure,
  setterLoadingSuccess,
  updateElement,
  addStudyCompare,
  removeStudyCompare, addMultipleStudyCompare
} from '../../supportFunction';
import {MarketSinglePrices} from '../../../model/market/marketSinglePrices';
import {CompareStudy} from '../../../model/report/compareStudy';
import {Trade} from '../../../model/report/trade/trade';

export interface StudyStates {
  allStudy: Study[]
  selectedStudyId: string
  compareList: string[]
  compareStudies: CompareStudy[]
  selectedStudyTrades: Trade[]
  selectedStudyMarket: MarketSinglePrices
  selectedStudyMarketId: string
  selectedStudyMarketTrade: Trade
  studyError: string,
  isLoadingAllStudy: IsLoading,
  isLoadingSelectedStudyTrades: IsLoading,
  isLoadingSelectedStudyMarket: IsLoading,
  isLoadingCompare: IsLoading,
}

export const studyInitialState: StudyStates = {
  allStudy: [],
  studyError: '',
  compareList: [],
  compareStudies: null,
  selectedStudyId: '',
  selectedStudyTrades: [],
  selectedStudyMarketTrade: null,
  selectedStudyMarket: null,
  selectedStudyMarketId: null,
  isLoadingAllStudy: {
    isLoading: false,
    isLoadingSuccess: false,
    isLoadingError: false,
  },
  isLoadingSelectedStudyTrades: {
    isLoading: false,
    isLoadingSuccess: false,
    isLoadingError: false,
  },
  isLoadingSelectedStudyMarket: {
    isLoading: false,
    isLoadingSuccess: false,
    isLoadingError: false,
  },
  isLoadingCompare: {
    isLoading: false,
    isLoadingSuccess: false,
    isLoadingError: false,
  },
}

// reducer that catch the studyActions
const studyReducer = createReducer(
  studyInitialState,

  /*
  **  SELECTED STUDY
   */

  // set selected study
  on(studyActions.setSelectedStudy, (state, result) => (
    {...state, selectedStudyId: result.id,
      isLoadingSelectedStudyTrades: setterLoading(),
      // market
      selectedStudyMarketTrade: null,
      selectedStudyMarket: null,
      selectedStudyMarketId: null,
      isLoadingSelectedStudyMarket: reset(),
      // compare
      compareList: [],
      compareStudies: null,
      isLoadingCompare: reset()
    })
  ),

  on(studyActions.setSelectedStudySuccess, (state, result) => (
    {...state, selectedStudyTrades: result.response, isLoadingSelectedStudyTrades: setterLoadingSuccess()
    })
  ),

  on(studyActions.setSelectedStudyFailure, (state, result) => (
    {...state , selectedStudyMarketTrade: null,
      isLoadingSelectedStudyTrades: setterLoadingFailure()
    })
  ),
  // unset selected study
  on(studyActions.unsetSelectedStudy, (state, result) => (
    {...state, selectedStudyId: null,
      isLoadingSelectedStudyTrades: reset(),
      // market
      selectedStudyMarketTrade: null,
      selectedStudyMarket: null,
      selectedStudyMarketId: null,
      isLoadingSelectedStudyMarket: reset(),
      // compare
      compareList: [],
      compareStudies: null,
      isLoadingCompare: reset()
    })
  ),


  /*
  **  SELECTED STUDY MARKET DATA
 */

  // set selected study market
  on(studyActions.setSelectedStudyMarket, (state, result) => (
    {...state, selectedStudyMarketId: result.marketId, selectedStudyMarketTrade: result.marketTrade,
      isLoadingSelectedStudyMarket: setterLoading()
    })
  ),
  on(studyActions.setSelectedStudyMarketSuccess, (state, result) => (
    {...state, selectedStudyMarket: result.response, isLoadingSelectedStudyMarket: setterLoadingSuccess()
    })
  ),
  on(studyActions.setSelectedStudyMarketFailure, (state, result) => (
    {...state, studyError: 'API error', selectedStudyMarketId: null, isLoadingSelectedStudyMarket: setterLoadingFailure()
    })
  ),
  // unset selected study market
  on(studyActions.unsetSelectedStudyMarket, (state, result) => (
    {...state,
      // market
      selectedStudyMarketTrade: null,
      selectedStudyMarket: null,
      selectedStudyMarketId: null,
      isLoadingSelectedStudyMarket: reset(),
    })
  ),

  /*
  **  CRUD STUDY
 */

  // GET all study
  on(studyActions.getAllStudies, (state) => (
    {...state, isLoadingAllStudy: setterLoading(),
      selectedStudyId: null, selectedStudyMarketId: null , selectedStudyMarketTrade: null,
    })
  ),
  on(studyActions.getAllStudiesSuccess, (state, result) =>
    ({...state, allStudy: result.response, isLoadingAllStudy: setterLoadingSuccess()
    })
  ),
  on(studyActions.getAllStudiesFailure, (state, result) => (
    {...state, studyError: 'API error', isLoadingAllStudy: setterLoadingFailure()
    })
  ),

  // CREATE study
  on(studyActions.createStudy, (state) => (
    {...state, isLoadingAllStudy: setterLoading(),
      // market
      selectedStudyMarketTrade: null,
      selectedStudyMarket: null,
      selectedStudyMarketId: null,
      isLoadingSelectedStudyMarket: reset(),
      // compare
      compareList: [],
      compareStudies: null,
      isLoadingCompare: reset()
      ,
      // selected study
      selectedStudyId: null,
    })
  ),
  on(studyActions.createStudySuccess, (state, result) =>
    ({...state, allStudy: addElement(state.allStudy,result.response) , isLoadingAllStudy: setterLoadingSuccess()
    })
  ),
  on(studyActions.createStudyFailure, (state, result) => (
    {...state, studyError: 'API error', isLoadingAllStudy: setterLoadingFailure()
    })
  ),

  // UPDATE study
  on(studyActions.updateStudy, (state, result) => (
    {...state, isLoadingAllStudy: setterLoading(),
      // market
      selectedStudyMarketTrade: null,
      selectedStudyMarket: null,
      selectedStudyMarketId: null,
      isLoadingSelectedStudyMarket: reset(),
      // compare
      compareList: [],
      compareStudies: null,
      isLoadingCompare: reset()
      ,
      // selected study
      selectedStudyId: null,
    })
  ),
  on(studyActions.updateStudySuccess, (state, result) =>
    ({...state, allStudy: updateElement(state.allStudy,result.response) , isLoadingAllStudy: setterLoadingSuccess()
    })
  ),
  on(studyActions.updateStudyFailure, (state, result) => (
    {...state, studyError: 'API error', isLoadingAllStudy: setterLoadingFailure()
    })
  ),

  // DELETE study
  on(studyActions.deleteStudy, (state, result) => (
    {...state, isLoadingAllStudy: setterLoading(),
      // market
      selectedStudyMarketTrade: null,
      selectedStudyMarket: null,
      selectedStudyMarketId: null,
      isLoadingSelectedStudyMarket: reset(),
      // compare
      compareList: [],
      compareStudies: null,
      isLoadingCompare: reset(),
      // selected study
      selectedStudyId: null,
    })
  ),
  on(studyActions.deleteStudySuccess, (state, result) =>
    ({...state, allStudy: deleteElement(state.allStudy,result.response),
      isLoadingAllStudy: setterLoadingSuccess(),
      selectedStudyId: null,
      isLoadingSelectedStudyMarket: reset(),
    })
  ),
  on(studyActions.deleteStudyFailure, (state, result) => (
    {...state, studyError: 'API error', isLoadingAllStudy: setterLoadingFailure()
    })
  ),

  /*
  **  COMPARE
  */
  on(studyActions.addStudyInCompare, (state, result) => (
    {...state, compareList: addStudyCompare(state.compareList, result.studyId, result.first)
    })
  ),

  on(studyActions.addStudiesInCompare, (state, result) => (
    {...state, compareList: addMultipleStudyCompare(state.compareList, result.studyIds)
    })
  ),

  on(studyActions.removeStudyInCompare, (state, result) => (
    {...state, compareList: removeStudyCompare(state.compareList, result.studyId)
    })
  ),

  on(studyActions.resetStudyCompare, (state, result) => (
    {...state, compareList: [], compareStudies: [],
      // market
      selectedStudyMarketTrade: null,
      selectedStudyMarket: null,
      selectedStudyMarketId: null,
      isLoadingSelectedStudyMarket: reset(),
      // compare
      isLoadingCompare: reset()
    })
  ),

  on(studyActions.compareStudy, (state, result) => (
    {...state, isLoadingCompare: setterLoading(),
      // market
      selectedStudyMarketTrade: null,
      selectedStudyMarket: null,
      selectedStudyMarketId: null,
      isLoadingSelectedStudyMarket: reset(),
      // selected study
      selectedStudyId: null,
    })
  ),
  on(studyActions.compareStudySuccess, (state, result) =>
    ({...state, compareStudies: result.response , isLoadingCompare: setterLoadingSuccess(),
    })
  ),
  on(studyActions.compareStudyFailure, (state, result) => (
    {...state, studyError: 'API error', isLoadingCompare: setterLoadingFailure()
    })
  ),

)

// create the reducer
export function reducer(state: StudyStates | undefined, action: Action): any {
  return studyReducer(state, action);
}

