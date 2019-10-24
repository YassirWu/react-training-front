import React from 'react';
import t from 'prop-types';

import { List, ListBody, ListHeader, ListBodyLine } from 'components';

import { Link } from 'react-router-dom';
import { getBookDetailRouteUrl } from 'routes';

const BookLine = ({
  bookId,
  name,
  numberOfPages,
  released,
  povCharacters,
  characters,
  LinkDetailComponent,
}) => (
  <ListBodyLine id={bookId}>
    <td>
      <LinkDetailComponent id={bookId}>{name}</LinkDetailComponent>
    </td>
    <td>{numberOfPages}</td>
    <td>{released}</td>
    <td>{povCharacters}</td>
    <td>{characters}</td>
  </ListBodyLine>
);
BookLine.propTypes = {
  bookId: t.number.isRequired,
  name: t.string.isRequired,
  numberOfPages: t.number.isRequired,
  released: t.string.isRequired,
  povCharacters: t.number.isRequired,
  characters: t.number.isRequired,
  LinkDetailComponent: t.node,
};
BookLine.defaultProps = {
  LinkDetailComponent: ({ children }) => <span>{children}</span>,
};

const renderListLines = book => (
  <BookLine
    bookId={book.id}
    name={book.name}
    numberOfPages={book.numberOfPages}
    released={book.released}
    povCharacters={book.povCharacters.length}
    characters={book.characters.length}
    LinkDetailComponent={({ id, children }) => <Link to={getBookDetailRouteUrl(id)}>{children}</Link>}
  />
);

const BookList = ({ books }) => (
  <List>
    <ListHeader>
      <th>Book</th>
      <th>Nb of pages</th>
      <th>Release date</th>
      <th>Pov characters</th>
      <th>Nb of characters</th>
    </ListHeader>
    <ListBody>
      {books.map(renderListLines)}
    </ListBody>
  </List>
);

BookList.defaultProps = {
  books: [],
};

BookList.propTypes = {
  books: t.arrayOf(
    t.shape({
      id: t.number.isRequired,
      name: t.string.isRequired,
      numberOfPages: t.number.isRequired,
      released: t.string.isRequired,
      povCharacters: t.arrayOf(t.string.isRequired),
      characters: t.arrayOf(t.string.isRequired),
    }),
  ),
};

export default BookList;
