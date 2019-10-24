import React from 'react';
import { shallow } from 'enzyme';

import CharacterList from './CharacterList.design';

describe('<CharacterList />', () => {
  const characters = [
    {
      gander: '978-0553103540',
      culture: 'Hardcover',
      name: 'A Game of Thrones',
      books: [],
      playedBy: []
    },
    {
      gander: '978-0553108033',
      culture: 'Hardback',
      name: 'A Clash of Kings',
      books: [],
      playedBy: []
    },
    {
      gander: '978-0553106633',
      culture: 'Hardcover',
      name: 'A Storm of Swords',
      books: [],
      playedBy: []
    },
    {
      gander: '978-0976401100',
      culture: 'GraphicNovel',
      name: 'The Hedge Knight',
      books: [],
      playedBy: []
    },
  ];
  
  test('should renders CharacterList component', () => {
    const wrapper = shallow(<CharacterList characters={characters} />);
    expect(wrapper).toMatchSnapshot();
  });
  test('should return list of characters', () => {
    const wrapper = shallow(<CharacterList characters={characters} />);
    expect(wrapper.find('CharacterLine')).toHaveLength(4);
  });
});
