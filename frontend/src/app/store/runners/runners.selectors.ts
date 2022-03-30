import {createFeatureSelector, createSelector} from '@ngrx/store';
import {RunnersState} from './runners.reducer';
import {BySportStats} from '../../model/dashboard/bySportStats';

const getRunnersState = createFeatureSelector<RunnersState>(
  'runnersState'
);

export const getAllRunners = createSelector(
  getRunnersState,
  (state: RunnersState) => state.allRunners
);

export const isLoadingAllRunners = createSelector(
  getRunnersState,
  (state: RunnersState) => state.isLoadingAllRunners
);

export const getSelectedRunnerId = createSelector(
  getRunnersState,
  (state: RunnersState) => state.selectedRunnerID
);

export const isLoadingSelectedRunner = createSelector(
  getRunnersState,
  (state: RunnersState) => state.isLoadingRunnerById
);

export const getSelectedRunnerInfo = createSelector(
  getRunnersState,
  (state: RunnersState) => {
    return{
      name: state.selectedRunner.name,
      sport: state.selectedRunner.sport,
      match: state.selectedRunnerMarkets.filter( x => x.marketType.indexOf('MATCH_ODDS')!==-1).length
    }
  }
);

export const getDetailRunnerMarkets = createSelector(
  getRunnersState,
  (state: RunnersState) => state.selectedRunnerMarkets.filter( x => x.marketType.indexOf('MATCH_ODDS')!==-1)
);

export const isLoadingRunnerMarkets = createSelector(
  getRunnersState,
  (state: RunnersState) => state.isLoadingSelectedRunnerMarkets
);

export const getRunnerStats = createSelector(
  getRunnersState,
  (state:RunnersState) => {
    const stats: BySportStats = {
      length: state.allRunners.length,
      sport: {
        countTennis: state.allRunners.map(x => x.sport).reduce((acc, val)=>{
          return val === 'TENNIS'
            ? acc+=1
            : acc;
        },0),
        countFootball: state.allRunners.map(x => x.sport).reduce((acc, val) =>{
          return val === 'FOOTBALL'
            ? acc+=1
            : acc;
        },0),
        countHorse: state.allRunners.map(x => x.sport).reduce((acc, val) =>{
          return val === 'HORSE RACING'
            ? acc+=1
            : acc;
        },0),
      }
    }
    return  stats
  }
);

export const getRunnersListForm = createSelector(
  getRunnersState,
  (state:RunnersState) => {
    return state.runnersListForm
  }
);

export const getRunnerNameById = (id: number) => createSelector(
  getRunnersState,
  (state:RunnersState) => {
    return state.runnersListForm.filter( x => {
      if(x.id === id){
        return x.name
      }
    })[0]
  }
);


