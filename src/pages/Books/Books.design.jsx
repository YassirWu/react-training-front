// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';

import { Panel, BookList } from 'components';

import styles from './Books.module.scss';

const myPage = ({ books }) => (
  <div className={styles.container}>
    <Panel bordered centered icon="home" height="100%" width="100%">
      <BookList books={books} />
    </Panel>
  </div>
);

myPage.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      authors: PropTypes.arrayOf(PropTypes.string),
      characters: PropTypes.arrayOf(PropTypes.string),
      country: PropTypes.string,
      isbn: PropTypes.string,
      mediaType: PropTypes.string,
      name: PropTypes.string,
      numberOfPages: PropTypes.number,
      povCharacters: PropTypes.arrayOf(PropTypes.string),
      publisher: PropTypes.string,
      released: PropTypes.string,
      url: PropTypes.string,
    }),
  ).isRequired,
};

export default myPage;
