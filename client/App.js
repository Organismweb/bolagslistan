import React, { Component } from 'react';

export default class App extends Component {
  // State using Class properties transform
  state = {
    text: 'Hej',
  };
  // How to write functions to get correct scope of this.
  exampleFunction = () => <div>{this.state.text}</div>;
  render() {
    return <React.Fragment>{this.exampleFunction()}</React.Fragment>;
  }
}
