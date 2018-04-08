// @flow

import React from 'react';
import styled from 'styled-components';
import { color } from '../../_settings/_variables';

type Props = {
  children?: any,
};

const Main = (props: Props) => <MainStyle>{props.children}</MainStyle>;

Main.defaultProps = {
  children: null,
};

const MainStyle = styled.main`
  position: relative;
  grid-area: main;
  background-color: ${color.lightGrey};
`;

export default Main;
