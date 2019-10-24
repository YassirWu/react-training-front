// @ts-nocheck
import React from 'react';
import t from 'prop-types';
import ReactPaginate from 'react-paginate';

import styles from './Paginate.module.scss';

const Paginate = ({ onPageChange, numberOfPages }) => (
  <ReactPaginate
    pageCount={numberOfPages}
    previousLabel="Précédent"
    nextLabel="Suivant"
    onPageChange={({ selected }) => onPageChange(selected)}
    containerClassName={styles.pagination}
    previousClassName={styles.pagination__previous}
    nextClassName={styles.pagination__next}
    disabledClassName={styles.pagination__disabled}
    pageClassName={styles.pagination__page}
    breakClassName={styles.pagination__page}
    activeClassName={styles.pagination__active}
  />
);

Paginate.propTypes = {
  onPageChange: t.func.isRequired,
  numberOfPages: t.number.isRequired,
};

export default Paginate;
