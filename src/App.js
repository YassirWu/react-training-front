import React from 'react';

import 'scss/_main.scss';

// Redux
import { Provider } from 'react-redux';

// Routing
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

// Routes definitions
import routes from 'routes';

// Redux Store
import store from 'domains';

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      {renderRoutes(routes)}
    </Provider>
  </BrowserRouter>
);

export default App;
