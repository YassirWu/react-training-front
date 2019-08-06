import { createReducer } from 'redux-create-reducer';

import {
  AUTH_USER_SUCCESS,
  AUTH_USER_FAILURE,
} from './types';

const initialState = {
  isAuthenticated: false,
};

const authUserSuccess = (state, action) => ({ ...action.payload, isAuthenticated: true });
const authUserFailure = () => ({ isAuthenticated: false });

export default createReducer(initialState, {
  [AUTH_USER_SUCCESS]: authUserSuccess,
  [AUTH_USER_FAILURE]: authUserFailure,
});
