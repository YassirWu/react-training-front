// @ts-nocheck
import React from 'react';

import { Panel } from 'components';

import styles from './About.module.scss';

const repoUrl = 'https://www.github.com/SebQuenet/react-training-front';
const abbealUrl = 'https://www.abbeal.com';

const myPage = () => (
  <div className={styles.container}>
    <Panel centered bordered width="40rem" icon="question">
      <div className={styles.panel}>
        <header>
          <h2 className={styles.localHeader}>Advanced React / Redux training boilerplate</h2>
        </header>
        <main role="main">
          <p className={styles.paragraph}>
            S&eacute;bastien Quenet for Abbeal
            <br />
          </p>
        </main>
        <footer>
          <p className={styles.urlLinks}>
            <a href={repoUrl}>{repoUrl}</a>
            <a href={abbealUrl}>{abbealUrl}</a>
          </p>
        </footer>
      </div>
    </Panel>
  </div>
);

export default myPage;
