// @flow

import React, { Component, Fragment } from 'react';
import './components/_settings/baseStyles';

type State = {
  text: string,
};

export default class App extends Component<void, State> {
  // State using Class properties transform
  state = {
    text: 'Hej',
  };
  // How to write functions to get correct scope of this.
  exampleFunction = () => <div>{this.state.text}</div>;
  render() {
    return <Fragment>{this.exampleFunction()}</Fragment>;
  }
}
