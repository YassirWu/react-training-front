import {
  FETCH_BOOKS,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
  FETCH_BOOKS_CHARACTERS,
  FETCH_BOOKS_CHARACTERS_SUCCESS,
  FETCH_BOOKS_CHARACTERS_FAILURE,
} from './types';

export const fetchBooks = () => ({
  type: FETCH_BOOKS,
});

export const fetchBooksSuccess = books => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: books,
});

export const fetchBooksFailure = error => ({
  type: FETCH_BOOKS_FAILURE,
  payload: error,
});

export const fetchBooksCharacters = urlCharacters => ({
  type: FETCH_BOOKS_CHARACTERS,
  payload: { urlCharacters },
});

export const fetchBooksCharactersSuccess = characters => ({
  type: FETCH_BOOKS_CHARACTERS_SUCCESS,
  payload: characters,
});

export const fetchBooksCharactersFailure = error => ({
  type: FETCH_BOOKS_CHARACTERS_FAILURE,
  payload: error,
});
