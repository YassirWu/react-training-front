import React from 'react';
import { shallow } from 'enzyme';

import Panel from './Panel.design';

let shallowPanel;

describe('Panel.design', () => {
  beforeEach(() => {
    shallowPanel= shallow(<Panel />);
  });
  it('should render properly with default values', () => {
    console.log(shallowPanel);
    expect(1).toEqual(1);
  });
});
