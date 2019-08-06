import React from 'react';
import t from 'prop-types';
import Button from '../../atoms/Button';

import styles from './LabeledInput.module.scss';

const LabeledInput = ({ label }) => (
  <div>
    <div>{label}</div>
    <div className={styles.LabeledInput}>
      <input type="text" />
      <Button />
    </div>
  </div>
);

LabeledInput.defaultProps = {
  label: 'label',
};

LabeledInput.propTypes = {
  label: t.string,
};

export default LabeledInput;
