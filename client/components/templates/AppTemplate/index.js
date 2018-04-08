import * as React from 'react';
import styled from 'styled-components';
import Header from '../../organisms/Header';
import Sidebar from '../../organisms/Sidebar';
import Main from '../../organisms/Main';

type Props = {
  children: React.Node,
};

const AppTemplate = (props: Props) => (
  <AppContainer>
    <Header />
    <Sidebar />
    <Main>{props.children}</Main>
  </AppContainer>
);

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

export default AppTemplate;
