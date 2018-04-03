import React, { Component } from 'react';

// Destructuring example
const { Fragment } = React;

export default class App extends Component {
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
