import React from 'react';
import { shallow } from 'enzyme';

import Paginate from './Paginate.design';

describe('<Paginate />', () => {
  test('should renders Paginate component', () => {
    const wrapper = shallow((
      <Paginate
        onPageChange={jest.fn()}
        numberOfPages={3}
      />
    ));

    expect(wrapper).toMatchSnapshot();
  });
});

