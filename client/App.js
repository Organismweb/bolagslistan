// @flow
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './components/_settings/_base';
import AppTemplate from './components/templates/AppTemplate';
import Dashboard from './components/pages/Dashboard';
import Notes from './components/pages/Notes';
import Watchings from './components/pages/Watchings';
import Settings from './components/pages/Settings';
import Support from './components/pages/Support';

type State = {
  text: string,
};

class App extends Component<void, State> {
  // State using Class properties transform
  state = {
    text: 'asasdsadd',
  };
  // How to write functions to get correct scope of this.
  exampleFunction = () => <div>{this.state.text}</div>;
  render() {
    return (
      <Router>
        <AppTemplate>
          <Route exact path="/" component={Dashboard} />
          <Route path="/anteckningar" component={Notes} />
          <Route path="/bevakningar" component={Watchings} />
          <Route path="/installningar" component={Settings} />
          <Route path="/support" component={Support} />
        </AppTemplate>
      </Router>
    );
  }
}

export default App;
