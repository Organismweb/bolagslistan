// @flow

import * as React from 'react';
import styled from 'styled-components';
import { color, spacing } from '../../_settings/_variables';

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
  padding: ${spacing.md};
  overflow-y: scroll;
`;

export default Main;
