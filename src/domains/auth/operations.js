import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

import configuration from 'configuration';

import { AUTH_USER } from './types';
import { authenticateUserSuccess, authenticateUserFailure } from './actions';

const { API_BASE_URL } = configuration;

export function* authUserSaga({ payload: { email, password } }) {
  try {
    const axiosAuthRequest = {
      method: 'post',
      headers: [{ 'Content-Type': 'application/json' }],
      url: `${API_BASE_URL}/login`,
      data: { email, password },
      withCredentials: true,
    };

    // @ts-ignore
    const auth = yield axios(axiosAuthRequest);
    debugger;
    yield put(authenticateUserSuccess(auth.data));
  } catch (error) {
    yield put(authenticateUserFailure(error));
  }
}

export function* authSaga() {
  yield takeEvery(AUTH_USER, authUserSaga);
}
