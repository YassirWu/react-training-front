import { FETCH_BOOKS, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_FAILURE } from './types';

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
