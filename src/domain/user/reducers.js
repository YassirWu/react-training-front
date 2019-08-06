import createReducer from 'redux-tools';

import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from './types';

const initialState = {};

const fetchUser = (state, action) => ({ ...state, ...action.payload });
const fetchedUserSuccess = (state, action) => ({ ...state, ...action.payload });
const fetchedUserFailure = (state, action) => ({ ...state, ...action.payload });

export default createReducer(initialState, {
  [FETCH_USER]: fetchUser,
  [FETCH_USER_SUCCESS]: fetchedUserSuccess,
  [FETCH_USER_FAILURE]: fetchedUserFailure,
});
