import React from 'react';
import t from 'prop-types';
import { List, ListBody, ListHeader, ListBodyLine } from 'components';

import styles from './CharacterList.module.scss';

const CharacterLine = ({
  id, name, gender, culture,
  books, playedBy,
}) => (
  <ListBodyLine id={id}>
    <td>{name}</td>
    <td>{gender}</td>
    <td>{culture}</td>
    <td>{books}</td>
    <td>{playedBy}</td>
  </ListBodyLine>
);
CharacterLine.propTypes = {
  id: t.number.isRequired,
  name: t.string.isRequired,
  gender: t.string.isRequired,
  culture: t.string.isRequired,
  books: t.number.isRequired,
  playedBy: t.number.isRequired,
};

const renderListLines = character => (
  <CharacterLine
    id={character.id}
    name={character.name}
    gender={character.gender}
    culture={character.culture}
    books={character.books.length}
    playedBy={character.playedBy.length}
  />
);

const CharacterList = ({ characters }) => (
  <List className={styles.characterList}>
    <ListHeader>
      <th>Name</th>
      <th>Gender</th>
      <th>Culture</th>
      <th>Nb of books</th>
      <th>Nb of players</th>
    </ListHeader>
    <ListBody>
      {characters.map(renderListLines)}
    </ListBody>
  </List>
);

CharacterList.defaultProps = {
  characters: [],
};

CharacterList.propTypes = {
  characters: t.arrayOf(
    t.shape({
      name: t.string.isRequired,
      gender: t.string.isRequired,
      culture: t.string.isRequired,
      books: t.arrayOf(t.string.isRequired),
      playedBy: t.arrayOf(t.string.isRequired),
    }),
  ),
};

export default CharacterList;
