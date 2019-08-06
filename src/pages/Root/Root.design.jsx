import React from 'react';
import t from 'prop-types';

import { renderRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';
import { route as routeType } from 'react-router-prop-types';

import { Header, Panel, LoginForm } from 'components';

import constants from 'styled/constants';

import styles from './Root.module.scss';

const menuNameExists = currentRoute => currentRoute.menuName !== undefined;
const toLink = currentRoute => (
  <span className={styles.linkName}>
    <Link to={currentRoute.path}>{currentRoute.menuName}</Link>
  </span>
);

const Root = ({
  route,
  name,
  avatar,
  isAuthenticated,
}) => (
  <div>
    <Header>Advanced React / Redux</Header>
    <nav className={styles.navBar}>
      {
        route.routes
          .filter(menuNameExists)
          .map(toLink)
      }
      {
        isAuthenticated ? (
          <span className={styles.loggedIn}>
            {name}
            <img
              src={avatar}
              alt={`Portrait of ${name}`}
            />
          </span>
        ) : <LoginForm />
      }
    </nav>
    <Panel width="100vw" height="calc(100vh - 12rem)" background={constants.COLOR_GRAY_EEE}>
      {renderRoutes(route.routes)}
    </Panel>
  </div>
);

Root.propTypes = {
  route: routeType.isRequired,
  name: t.string.isRequired,
  isAuthenticated: t.bool.isRequired,
  avatar: t.string.isRequired,
};

export default Root;
