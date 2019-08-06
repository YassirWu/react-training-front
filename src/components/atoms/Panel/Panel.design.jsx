// @ts-nocheck
import React from 'react';
import t from 'prop-types';

import StyledPanel from './Panel.styled';

const Panel = ({
  children,
  width,
  height,
  bordered,
  centered,
  background,
}) => (
  <div>
    <StyledPanel
      width={width}
      height={height}
      bordered={bordered}
      centered={centered}
      background={background}
    >
      {children}
    </StyledPanel>
  </div>
);

Panel.defaultProps = {
  width: '15rem',
  height: '15rem',
  bordered: false,
  centered: false,
  background: undefined,
  children: <div />,
};

Panel.propTypes = {
  width: t.string,
  height: t.string,
  bordered: t.bool,
  centered: t.bool,
  background: t.string,

  children: t.node,
};

export default Panel;
