import React from 'react';
import t from 'prop-types';

import styles from './Button.module.scss';

const Button = ({ onClick }) => (
  <button
    className={styles.buttonStyle}
    type="button"
    onClick={onClick}
  >
    Hello
  </button>
);

Button.defaultProps = {
  onClick: () => {},
};

Button.propTypes = {
  onClick: t.func,
};

export default Button;
