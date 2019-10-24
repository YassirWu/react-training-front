import React from 'react';
import { storiesOf } from '@storybook/react';

import { List } from 'components';
import { ListHeader, ListBody, ListBodyLine } from './List.design';

// const bookList = [{
//   id: 1,
//   name: 'Necronomicon',
//   numberOfPages: 350,
//   released: '14 august 1874',
//   povCharacters: ['first character'],
//   characters: ['first character', 'second character'],
// }];

// storiesOf('Organisms/BookList', module)
//   .add('default', () => <List />)
//   .add('with one book', () => <List books={bookList} />);

storiesOf('Molecules/List', module)
  .add('default', () => {

    return (
      <List>
        <ListHeader>
          <th>Book</th>
          <th>Nb of pages</th>
          <th>Release date</th>
          <th>Pov characters</th>
          <th>Nb of characters</th>
        </ListHeader>
        <ListBody>
          <ListBodyLine id={0}>
            <td>A Game of Thrones</td>
            <td>694</td>
            <td>1996-08-01T00:00:00</td>
            <td>9</td>
            <td>434</td>
          </ListBodyLine>
          <ListBodyLine id={1}>
            <td>A Clash of Kings</td>
            <td>768</td>
            <td>1999-02-02T00:00:00</td>
            <td>10</td>
            <td>778</td>
          </ListBodyLine>
          <ListBodyLine id={2}>
            <td>A Storm of Swords</td>
            <td>992</td>
            <td>2000-10-31T00:00:00</td>
            <td>12</td>
            <td>1021</td>
          </ListBodyLine>
        </ListBody>
      </List>
    )
  });
