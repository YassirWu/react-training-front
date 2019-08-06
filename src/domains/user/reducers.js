import { createReducer } from 'redux-create-reducer';

import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from './types';

const initialState = {};

const fetchUser = (state, action) => ({ ...state, ...action.payload });
const fetchUserSuccess = (state, action) => ({ ...state, ...action.payload });
const fetchUserFailure = (state, action) => ({ ...state, ...action.payload });

export default createReducer(initialState, {
  [FETCH_USER]: fetchUser,
  [FETCH_USER_SUCCESS]: fetchUserSuccess,
  [FETCH_USER_FAILURE]: fetchUserFailure,
});
