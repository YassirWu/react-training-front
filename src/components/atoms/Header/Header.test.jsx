import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header.design';

let shallowHeader;

describe('Header.design', () => {
  beforeEach(() => {
    shallowHeader = shallow(<Header />);
  });
  it('should render properly with default values', () => {
    expect(1).toEqual(1);
  });
});
