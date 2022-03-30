/*
**  STUDY ACTIONS
 */
import {createAction, props} from "@ngrx/store";
import {Study} from "../../../model/study/study/study";
import {Trade} from "../../../model/report/trade";
import {NewTrade} from '../../../model/report/new/newTrade';

export const GET_ALL_STUDIES = '[Study] Get all Studies';
export const GET_ALL_STUDIES_SUCCESS = '[Study] Get all Studies Success';
export const GET_ALL_STUDIES_FAILURE = '[Study] Get all Studies Failure';

export const CREATE_STUDY = '[Study] Create study';
export const CREATE_STUDY_SUCCESS = '[Study] Create Study Success';
export const CREATE_STUDY_FAILURE = '[Study] Create Study Failure';

export const UPDATE_STUDY = '[Study] Update study';
export const UPDATE_STUDY_SUCCESS = '[Study] Update Study Success';
export const UPDATE_STUDY_FAILURE = '[Study] Update Study Failure';

export const DELETE_STUDY = '[Study] Delete Study';
export const DELETE_STUDY_SUCCESS = '[Study] Delete Study Success';
export const DELETE_STUDY_FAILURE = '[Study] Delete Study Failure';

export const SET_SELECTED_STUDY = '[Study] Set Selected Study Id';
export const SET_SELECTED_STUDY_SUCCESS = '[Study] Set Selected Study Id Success';
export const SET_SELECTED_STUDY_FAILURE = '[Study] Set Selected Study Id Failure';
export const UNSET_SELECTED_STUDY_ID = '[Study] Unset Selected Study Id';

export const SET_SELECTED_STUDY_MARKET_ID = '[Study Market] Set Selected Study Market Id';
export const SET_SELECTED_STUDY_MARKET_ID_SUCCESS = '[Study Market] Set Selected Study Market Id Success';
export const SET_SELECTED_STUDY_MARKET_ID_FAILURE = '[Study Market] Set Selected Study Market Id Failure';
export const UNSET_SELECTED_STUDY_MARKET_ID = '[Study Market] Unset Selected Study Market Id';

export const ADD_STUDY_IN_COMPARE = '[Study] Add Study in compare list';
export const ADD_STUDIES_IN_COMPARE = '[Study] Add Studies in compare list';
export const REMOVE_STUDY_IN_COMPARE = '[Study] Remove Study in compare list';
export const RESET_STUDY_COMPARE = '[Study] Reset Study compare list';

export const COMPARE_STUDY = '[Study] Compare study';
export const COMPARE_STUDY_SUCCESS = '[Study] Compare Study Success';
export const COMPARE_STUDY_FAILURE = '[Study] Compare Study Failure';

/*
**  CRUD STUDY ACTIONS
 */

// get all baskets
export const getAllStudies = createAction(
  GET_ALL_STUDIES,
);

export const getAllStudiesSuccess = createAction(
  GET_ALL_STUDIES_SUCCESS,
  props<any>()
);

export const getAllStudiesFailure = createAction(
  GET_ALL_STUDIES_FAILURE,
  props<any>()
);

// create study
export const createStudy = createAction(
  CREATE_STUDY,
  props<{study: Study}>()
);

export const createStudySuccess = createAction(
  CREATE_STUDY_SUCCESS,
  props<any>()
);

export const createStudyFailure = createAction(
  CREATE_STUDY_FAILURE,
  props<any>()
);

// update study
export const updateStudy = createAction(
  UPDATE_STUDY,
  props<{ _id: string, study: Study }>()
);

export const updateStudySuccess = createAction(
  UPDATE_STUDY_SUCCESS,
  props<any>()
);

export const updateStudyFailure = createAction(
  UPDATE_STUDY_FAILURE,
  props<any>()
);

// delete study
export const deleteStudy = createAction(
  DELETE_STUDY,
  props<{ _id: string }>()
);

export const deleteStudySuccess = createAction(
  DELETE_STUDY_SUCCESS,
  props<any>()
);

export const deleteStudyFailure = createAction(
  DELETE_STUDY_FAILURE,
  props<any>()
);

/*
**  SELECTED STUDY
 */

// set selected study id
export const setSelectedStudy = createAction(
  SET_SELECTED_STUDY,
  props<{id: string }>()
);
// set selected study id
export const setSelectedStudySuccess = createAction(
  SET_SELECTED_STUDY_SUCCESS,
  props<any>()
);

// set selected study id
export const setSelectedStudyFailure = createAction(
  SET_SELECTED_STUDY_FAILURE,
  props<any>()
);

// unset selected study id
export const unsetSelectedStudy = createAction(
  UNSET_SELECTED_STUDY_ID,
);

/*
**  SELECTED STUDY MARKET
 */

// set selected study market id
export const setSelectedStudyMarket = createAction(
  SET_SELECTED_STUDY_MARKET_ID,
  props<{marketId: string, selectionId: number, marketTrade: NewTrade }>()
);

export const setSelectedStudyMarketSuccess = createAction(
  SET_SELECTED_STUDY_MARKET_ID_SUCCESS,
  props<any>()
);

export const setSelectedStudyMarketFailure = createAction(
  SET_SELECTED_STUDY_MARKET_ID_FAILURE,
  props<any>()
);

// unset selected study market id
export const unsetSelectedStudyMarket = createAction(
  UNSET_SELECTED_STUDY_MARKET_ID
);

/*
**  COMPARE ACTIONS
 */

export const addStudyInCompare = createAction(
  ADD_STUDY_IN_COMPARE,
  props<{studyId: string, first: boolean}>()
);

export const addStudiesInCompare = createAction(
  ADD_STUDIES_IN_COMPARE,
  props<{studyIds: string[],}>()
);

export const removeStudyInCompare = createAction(
  REMOVE_STUDY_IN_COMPARE,
  props<{studyId: string}>()
);

export const resetStudyCompare = createAction(
  RESET_STUDY_COMPARE,
);

// compare actions
export const compareStudy = createAction(
  COMPARE_STUDY,
  props<{studyIds: string[]}>()
);

export const compareStudySuccess = createAction(
  COMPARE_STUDY_SUCCESS,
  props<any>()
);

export const compareStudyFailure = createAction(
  COMPARE_STUDY_FAILURE,
  props<any>()
);
