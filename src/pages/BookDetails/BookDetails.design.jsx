// @ts-nocheck
import React from 'react';
import t from 'prop-types';

import CharacterListWithPagination from './CharacterListWithPagination.design'

import styles from './BookDetails.module.scss';

const myPage = ({ currentBook, getCharacters, characters }) => (currentBook ? (
  <div className={styles.container}>
    Book:
    {' '}
    {currentBook.name}
    <br />
    Number of pages:
    {' '}
    {currentBook.numberOfPages}
    <br />
    Publisher :
    {' '}
    {currentBook.publisher}
    <br />
    released:
    {' '}
    {currentBook.released}
    <br />
    <CharacterListWithPagination
      characters={characters}
      allCharactersUrl={currentBook.characters}
      getCharacters={getCharacters}
    />
  </div>
)
  : null);

myPage.propTypes = {
  currentBook: t.shape({
    characters: t.arrayOf(t.string),
    name: t.string,
    numberOfPages: t.number,
    publisher: t.string,
    released: t.string,
  }).isRequired,
  getCharacters: t.func.isRequired,
  characters: t.arrayOf(
    t.shape({
      name: t.string.isRequired,
      gender: t.string.isRequired,
      culture: t.string.isRequired,
      books: t.arrayOf(t.string.isRequired),
      playedBy: t.arrayOf(t.string.isRequired),
    }),
  ).isRequired,
};

export default myPage;
