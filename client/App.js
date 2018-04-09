// @flow
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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

type State = {
  text: string,
};

class App extends Component<void, State> {
  // How to write functions to get correct scope of this.
  state = {
    text: 'Hejsan',
  };
  exampleFunction = () => <div>{this.state.text}</div>;
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <Router>
          <AppTemplate>
            <Route exact path="/" component={Dashboard} />
            <Route path="/anteckningar" component={Notes} />
            <Route path="/bevakningar" component={Watchings} />
            <Route path="/installningar" component={Settings} />
            <Route path="/support" component={Support} />
          </AppTemplate>
        </Router>
      </Provider>
    );
  }
}

export default App;
