import { Root } from 'pages';

import homeRoute from './home.route';
import aboutRoute from './about.route';
import notFoundRoute from './notfound.route';
import profileRoute from './profile.route';
import booksRoute from './books.route';

const routes = [
  {
    component: Root,
    routes: [
      homeRoute,
      aboutRoute,
      profileRoute,
      booksRoute,
      notFoundRoute,
    ],
  },
];

export default routes;
