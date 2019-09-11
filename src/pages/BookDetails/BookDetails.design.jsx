// @ts-nocheck
import React from 'react';

import styles from './BookDetails.module.scss';

const myPage = ({ currentBook }) => (currentBook ? (
  <div className={styles.container}>
    Book:
    {' '}
    {currentBook.name}
    <br />
    Number of pages:
    {' '}
    {currentBook.numberOfPages}
    <br />
    Publisher :
    {' '}
    {currentBook.publisher}
    <br />
    released:
    {' '}
    {currentBook.released}
    <br />
  </div>
)
  : null);

export default myPage;
