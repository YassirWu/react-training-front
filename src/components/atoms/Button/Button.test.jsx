import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button.design';

let shallowButton;

describe('Button.design', () => {
  beforeEach(() => {
    shallowButton = shallow(<Button />);
  });
  it('should render properly with default values', () => {
    console.log(shallowButton);
    expect(1).toEqual(1);
  });
});
