// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import './components/_settings/_base';
import Header from './components/organisms/Header';
import Sidebar from './components/organisms/Sidebar';
import Main from './components/organisms/Main';

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
        <Sidebar />
        <Main>Main content goes here</Main>
      </AppContainer>
    );
  }
}

const AppContainer = styled.div`
  display: grid;
  grid-template-areas:
    'header header header header'
    'sidebar main main main'
    'sidebar main main main';
  grid-template-columns: 300px 1fr 1fr 1fr;
  grid-template-rows: 70px 1fr 1fr;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

export default App;
