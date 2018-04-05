// @flow
import React, { Component, Fragment } from 'react';
import { hot } from 'react-hot-loader';
import './components/_settings/_base';

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
    return <Fragment>{this.exampleFunction()}</Fragment>;
  }
}

export default App;
