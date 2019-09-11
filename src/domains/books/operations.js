import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

import configuration from 'configuration';

import { FETCH_BOOKS } from './types';
import { fetchBooksSuccess, fetchBooksFailure } from './actions';

const { GOT_API_BASE_URL } = configuration;

export function* fetchBooksSaga() {
  try {
    const axiosFetchBooksRequest = {
      method: 'get',
      url: `${GOT_API_BASE_URL}/books`,
    };

    // @ts-ignore
    const books = yield axios(axiosFetchBooksRequest);
    yield put(fetchBooksSuccess(books.data));
  } catch (error) {
    yield put(fetchBooksFailure(error));
  }
}

export function* booksSaga() {
  yield takeEvery(FETCH_BOOKS, fetchBooksSaga);
}
