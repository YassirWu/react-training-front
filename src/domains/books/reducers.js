import { createReducer } from 'redux-create-reducer';

import { FETCH_BOOKS_SUCCESS, FETCH_BOOKS_FAILURE } from './types';

const initialState = [];

const fetchBooksSuccess = (state, action) => ([...action.payload]);
const fetchBooksFailure = (state, action) => ([...state]);

export default createReducer(initialState, {
  [FETCH_BOOKS_SUCCESS]: fetchBooksSuccess,
  [FETCH_BOOKS_FAILURE]: fetchBooksFailure,
});
