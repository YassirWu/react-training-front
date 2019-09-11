import React from 'react';
import { storiesOf } from '@storybook/react';

import { List } from 'components';

const bookList = [{
  name: 'Necronomicon',
  numberOfPages: 350,
  released: '14 august 1874',
  povCharacters: ['first character'],
  characters: ['first character', 'second character'],
}];

storiesOf('Molecules/List', module)
  .add('default', () => <List />)
  .add('with one book', () => <List books={bookList} />);
