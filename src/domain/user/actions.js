import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from './types';

export const fetchUser = userId => ({
  type: FETCH_USER,
  payload: userId,
});

export const fetchUserSuccess = userData => ({
  type: FETCH_USER_SUCCESS,
  payload: userData,
});

export const fetchUserFailure = error => ({
  type: FETCH_USER_FAILURE,
  payload: error,
});
