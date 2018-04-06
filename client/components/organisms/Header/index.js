import React, { Component } from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/fontawesome-pro-light';
import { color, spacing } from '../../_settings/_variables';
import Logo from '../../atoms/Logo';

class Header extends Component {
  state = {};
  render() {
    return (
      <HeaderContainer>
        <Logo />
        <ToolBar>
          <ToolItem>
            <FontAwesomeIcon icon={faEye} />
          </ToolItem>
        </ToolBar>
      </HeaderContainer>
    );
  }
}

export default Header;

const headerSettings = {
  height: '70px',
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${headerSettings.height};
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
  list-style: none;
  padding: 0;
  margin: 0;
`;
