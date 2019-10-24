import React from 'react';
import t from 'prop-types';

import styles from './List.module.scss';

export const ListBodyLine = ({ id, children }) => (
  <tr key={id}>
    {children}
  </tr>
);
ListBodyLine.propTypes = {
  id: t.number.isRequired,
  children: t.node.isRequired,
};

export const ListHeader = ({ children }) => (
  <thead>
    {children}
  </thead>
);
ListHeader.propTypes = {
  children: t.node.isRequired,
};

export const ListBody = ({ children }) => (
  <tbody>
    {children}
  </tbody>
);
ListBody.propTypes = {
  children: t.node.isRequired,
};

const List = ({ children, className }) => {
  const [header, body] = React.Children.toArray(children);

  return (
    <table className={`${styles.listTable} ${className}`}>
      {header}
      {body}
    </table>
  );
};

List.propTypes = {
  children: t.node.isRequired,
  className: t.string,
};

List.defaultProps = {
  className: '',
}

export default List;
