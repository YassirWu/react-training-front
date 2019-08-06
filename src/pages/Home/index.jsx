// @ts-nocheck
import React from 'react';

import { Panel } from 'components';

import styles from './Home.module.scss';

const myPage = () => (
  <div className={styles.panelPosition}>
    <Panel bordered centered icon="home" height="70vh" width="30vw">
      <h3>Welcome !</h3>
    </Panel>
  </div>
);

export default myPage;
