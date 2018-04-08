// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './components/_settings/_base';
import Header from './components/organisms/Header';
import Sidebar from './components/organisms/Sidebar';
import Main from './components/organisms/Main';
import Dashboard from './components/pages/Dashboard';
import Notes from './components/pages/Notes';

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
        <AppContainer>
          <Header />
          <Sidebar />
          <Main>
            <Route exact path="/" component={Dashboard} />
            <Route path="/notes" component={Notes} />
          </Main>
        </AppContainer>
      </Router>
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
