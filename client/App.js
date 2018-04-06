// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import './components/_settings/_base';
import Header from './components/organisms/Header';

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
      <AppContainer>
        <Header />
      </AppContainer>
    );
  }
}

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default App;
