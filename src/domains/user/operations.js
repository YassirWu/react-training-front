import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_USER,
} from './types';
import { fetchUserSuccess, fetchUserFailure } from './actions';


export function* fetchUserSaga({ payload: userId }) {
  try {
    const user = yield axios.get(`http://127.0.0.1:3142/users/${userId}`);
    yield put(fetchUserSuccess(user.data));
  } catch (error) {
    yield put(fetchUserFailure(error));
  }
}

export function* userSaga() {
  yield takeEvery(FETCH_USER, fetchUserSaga);
}
