import React from 'react';
import { shallow } from 'enzyme';
import { List } from 'components';

describe('#List molecule', () => {
  it('should hold a table', () => {
    const WrappedList = shallow(<List />);
    expect(WrappedList.exists('table')).toEqual(true);
  });
  it('should have a header', () => {
    const WrappedList = shallow(<List />);
    expect(WrappedList.exists('thead')).toEqual(true);
  });
  it('should have 5 columns', () => {
    const WrappedList = shallow(<List />);
    expect(WrappedList.find('th').length)
      .toEqual(5);
  });
});
