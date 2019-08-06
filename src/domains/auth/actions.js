import { AUTH_USER, AUTH_USER_SUCCESS, AUTH_USER_FAILURE } from './types';

export const authenticateUser = (email, password) => ({
  type: AUTH_USER,
  payload: { email, password },
});

export const authenticateUserSuccess = data => ({
  type: AUTH_USER_SUCCESS,
  payload: {
    ...data,
    isAuthenticated: true,
  },
});

export const authenticateUserFailure = error => ({
  type: AUTH_USER_FAILURE,
  payload: {
    error,
  },
});
