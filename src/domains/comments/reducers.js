import { createReducer } from 'redux-create-reducer';

import {
  FETCH_COMMENTS,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
} from './types';

const initialState = {};

const fetchComments = (state, action) => ({ ...state, ...action.payload });
const fetchCommentsSuccess = (state, action) => ({ ...state, ...action.payload });
const fetchCommentsFailure = (state, action) => ({ ...state, ...action.payload });

export default createReducer(initialState, {
  [FETCH_COMMENTS]: fetchComments,
  [FETCH_COMMENTS_SUCCESS]: fetchCommentsSuccess,
  [FETCH_COMMENTS_FAILURE]: fetchCommentsFailure,
});
