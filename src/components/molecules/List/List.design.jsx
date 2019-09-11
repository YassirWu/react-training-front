import React from 'react';
import t from 'prop-types';

import styles from './List.module.scss';

const BookLine = ({
  bookId, name, numberOfPages, released,
  povCharacters, characters,
}) => (
  <tr key={bookId}>
    <td>{name}</td>
    <td>{numberOfPages}</td>
    <td>{released}</td>
    <td>{povCharacters}</td>
    <td>{characters}</td>
  </tr>
);

const renderListLines = book => (
  <BookLine
    bookId={book.name}
    name={book.name}
    numberOfPages={book.numberOfPages}
    released={book.released}
    povCharacters={book.povCharacters.length}
    characters={book.characters.length}
  />
);

const List = ({ books }) => (
  <table className={styles.listTable}>
    <thead>
      <th>Book</th>
      <th>Nb of pages</th>
      <th>Release date</th>
      <th>Pov characters</th>
      <th>Nb of characters</th>
    </thead>
    <tbody>
      {
        books.map(renderListLines)
      }
    </tbody>
  </table>
);

List.defaultProps = {
  books: [],
};

List.propTypes = {
  books: t.arrayOf(
    t.shape({
      name: t.string.isRequired,
      numberOfPages: t.number.isRequired,
      released: t.string.isRequired,
      povCharacters: t.arrayOf(t.string.isRequired),
      characters: t.arrayOf(t.string.isRequired),
    }),
  ),
};

export default List;
