import { takeEvery, put, all } from 'redux-saga/effects';
import axios from 'axios';

import configuration from 'configuration';

import { FETCH_BOOKS, FETCH_BOOKS_CHARACTERS } from './types';
import {
  fetchBooksSuccess,
  fetchBooksFailure,
  fetchBooksCharactersSuccess,
  fetchBooksCharactersFailure,
} from './actions';
import mappingBooks from './mappingBooks';

const { GOT_API_BASE_URL } = configuration;

export function* fetchBooksSaga() {
  try {
    const axiosFetchBooksRequest = {
      method: 'get',
      url: `${GOT_API_BASE_URL}/books`,
    };

    // @ts-ignore
    const books = yield axios(axiosFetchBooksRequest);
    yield put(fetchBooksSuccess(mappingBooks(books.data)));
  } catch (error) {
    yield put(fetchBooksFailure(error));
  }
}

export function* booksSaga() {
  yield takeEvery(FETCH_BOOKS, fetchBooksSaga);
}

const mappingCharacters = characters => characters.map(({ data }) => data);

function* fetchCharactersSaga({ payload: { urlCharacters } }) {
  try {
    const axiosFetchCharactersRequest = idCharacter => axios({
      method: 'get',
      url: idCharacter,
    });

    const characters = yield all(urlCharacters.map(axiosFetchCharactersRequest));
    yield put(fetchBooksCharactersSuccess(mappingCharacters(characters)));
  } catch (error) {
    yield put(fetchBooksCharactersFailure(error));
  }
}

export function* charactersSaga() {
  yield takeEvery(FETCH_BOOKS_CHARACTERS, fetchCharactersSaga);
}
