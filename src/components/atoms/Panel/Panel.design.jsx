import React from 'react';
import t from 'prop-types';

import StyledPanel from './Panel.styled';

const Panel = ({ children, width, height }) => (
  <StyledPanel width={width} height={height}>
    {children}
  </StyledPanel>
);

Panel.defaultProps = {
  width: '15rem',
  height: '15rem',
  children: <div />,
};

Panel.propTypes = {
  width: t.string,
  height: t.string,
  children: t.node,

};

export default Panel;
