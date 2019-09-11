import { createSelector } from 'reselect';

export const booksSelector = (state, props) => state.books;

export const getAllBooksSelector = createSelector(
  [booksSelector],
  books => books,
);
