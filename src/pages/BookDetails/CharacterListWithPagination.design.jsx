import React from 'react';
import t from 'prop-types';

import { CharacterList, Paginate } from 'components';

import styles from './BookDetails.module.scss';

const NUMBER_CHARACTERS_PER_PAGE = 5;
const CharacterListWithPagination = ({ characters, getCharacters, allCharactersUrl }) => {
  const numberOfPages = Math.ceil(allCharactersUrl.length / NUMBER_CHARACTERS_PER_PAGE);

  React.useEffect(() => {
    getCharacters(allCharactersUrl.slice(0, 5));
    return () => {
      getCharacters([]);
    };
  }, []);

  const onPageChange = (selectedPage) => {
    getCharacters(allCharactersUrl.slice(selectedPage * 5, selectedPage * 5 + 5));
  };

  return (
    <div className={styles.listCharacters}>
      <h2 className={styles.titleCharacters}> All Characters of this book </h2>
      <CharacterList characters={characters} />
      {allCharactersUrl.length > NUMBER_CHARACTERS_PER_PAGE && (
        <Paginate
          numberOfPages={numberOfPages}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
};

CharacterListWithPagination.propTypes = {
  characters: t.arrayOf(
    t.shape({
      name: t.string.isRequired,
      gender: t.string.isRequired,
      culture: t.string.isRequired,
      books: t.arrayOf(t.string.isRequired),
      playedBy: t.arrayOf(t.string.isRequired),
    }),
  ).isRequired,
  getCharacters: t.func.isRequired,
  allCharactersUrl: t.arrayOf(t.string).isRequired,
};

export default CharacterListWithPagination;
