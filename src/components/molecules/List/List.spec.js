import React from 'react';
import { shallow } from 'enzyme';
import { List } from 'components';

describe('#List molecule', () => {
  const WrappedList = shallow((
    <List>
      <thead>
        <th>Book</th>
        <th>Nb of pages</th>
        <th>Release date</th>
        <th>Pov characters</th>
        <th>Nb of characters</th>
      </thead>
      <tbody />
    </List>
  ));

  it('should hold a table', () => {
    expect(WrappedList.exists('table')).toEqual(true);
    expect(WrappedList).toMatchSnapshot();
  });
  it('should have a header', () => {
    expect(WrappedList.exists('thead')).toEqual(true);
  });
  it('should have 5 columns', () => {
    expect(WrappedList.find('th').length)
      .toEqual(5);
  });
  it('should have a body', () => {
    expect(WrappedList.exists('tbody')).toEqual(true);
  });
});
