import { createSelector } from 'reselect';

export const booksSelector = state => state.books;

export const getAllBooksSelector = createSelector(
  [booksSelector],
  books => books,
);

export const bookByIdSelector = (state, props) => state.books[props.match.params.bookId];

export const getBookByIdSelector = createSelector(
  [bookByIdSelector],
  book => book,
);
