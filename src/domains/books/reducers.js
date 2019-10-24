import { createReducer } from 'redux-create-reducer';

import {
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
  FETCH_BOOKS_CHARACTERS_SUCCESS,
  FETCH_BOOKS_CHARACTERS_FAILURE,
} from './types';

const initialState = [];

const fetchBooksSuccess = (state, action) => ([...action.payload]);
const fetchBooksFailure = (state, action) => ([...state]);

const fetchCharactersSuccess = (state, action) => ([...action.payload]);
const fetchCharactersFailure = (state, action) => ([...state]);

export const booksReducer = createReducer(initialState, {
  [FETCH_BOOKS_SUCCESS]: fetchBooksSuccess,
  [FETCH_BOOKS_FAILURE]: fetchBooksFailure,
});

export const charactersReducer = createReducer(initialState, {
  [FETCH_BOOKS_CHARACTERS_SUCCESS]: fetchCharactersSuccess,
  [FETCH_BOOKS_CHARACTERS_FAILURE]: fetchCharactersFailure,
});

