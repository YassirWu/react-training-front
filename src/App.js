import React from 'react';

import 'scss/_main.scss';
import { Header } from 'components';
import { Provider } from 'react-redux';
import store from './domain';

const App = () => (
  <Provider store={store}>
    <Header>The three eyed raven&apos;s lair</Header>
    Welcome !
  </Provider>
);

export default App;
