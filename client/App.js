// @flow
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import './components/_settings/_base';
import AppTemplate from './components/templates/AppTemplate';
import Dashboard from './components/pages/Dashboard';
import Notes from './components/pages/Notes';
import Watchings from './components/pages/Watchings';
import Settings from './components/pages/Settings';
import Support from './components/pages/Support';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const App = () => (
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <AppTemplate>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/anteckningar" component={Notes} />
          <Route path="/bevakningar" component={Watchings} />
          <Route path="/installningar" component={Settings} />
          <Route path="/support" component={Support} />
        </Switch>
      </AppTemplate>
    </Router>
  </Provider>
);

export default App;
