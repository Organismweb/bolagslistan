// @flow

import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faEye, faBell } from '@fortawesome/fontawesome-pro-solid';
import { color, spacing } from '../../_settings/_variables';
import Logo from '../../atoms/Logo';
import IconNotification from '../../atoms/IconNotification';

const Header = () => (
  <HeaderContainer>
    <Link to="/">
      <Logo />
    </Link>
    <ToolBar>
      <ToolItem>
        <IconNotification>
          <FontAwesomeIcon icon={faEye} color={color.darkPurple} size="lg" />
        </IconNotification>
      </ToolItem>
      <ToolItem>
        <IconNotification notifications={3}>
          <FontAwesomeIcon icon={faBell} color={color.darkPurple} size="lg" />
        </IconNotification>
      </ToolItem>
    </ToolBar>
  </HeaderContainer>
);

export default Header;

const HeaderContainer = styled.header`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${spacing.md};
  background-color: ${color.purple};
`;

const ToolBar = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const ToolItem = styled.li`
  display: flex;
  list-style: none;
  padding: 0;
  + li {
    margin-left: 15px;
  }
`;
