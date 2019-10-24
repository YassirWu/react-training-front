import { BookDetails } from 'pages';

const PARAM_BOOK_ID = ':bookId';

const booksRoute = {
  path: `/book-details/${PARAM_BOOK_ID}`,
  component: BookDetails,
};

export const getBookDetailRouteUrl = (bookId) => {
  return booksRoute.path.replace(PARAM_BOOK_ID, bookId);
};

export default booksRoute;
