import React from 'react';
import t from 'prop-types';

import styles from './Header.module.scss';

const Header = ({ children }) => (
  <div className={styles.headerStyle}>
    {children}
  </div>
);

Header.defaultProps = {
  children: <div />,
};

Header.propTypes = {
  children: t.node,
};

export default Header;
