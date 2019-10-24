import React from 'react';
import { shallow } from 'enzyme';

import BookList from './BookList.design';

describe('<BookList />', () => {
  const books = [
    {
      isbn: '978-0553103540',
      mediaType: 'Hardcover',
      name: 'A Game of Thrones',
      povCharacters: [],
      characters: []
    },
    {
      isbn: '978-0553108033',
      mediaType: 'Hardback',
      name: 'A Clash of Kings',
      povCharacters: [],
      characters: []
    },
    {
      isbn: '978-0553106633',
      mediaType: 'Hardcover',
      name: 'A Storm of Swords',
      povCharacters: [],
      characters: []
    },
    {
      isbn: '978-0976401100',
      mediaType: 'GraphicNovel',
      name: 'The Hedge Knight',
      povCharacters: [],
      characters: []
    },
  ];
  
  test('should renders BookList component', () => {
    const wrapper = shallow(<BookList books={books} />);
    expect(wrapper).toMatchSnapshot();
  });
  test('should return list of books', () => {
    const wrapper = shallow(<BookList books={books} />);
    expect(wrapper.find('BookLine')).toHaveLength(4);
  });
});
