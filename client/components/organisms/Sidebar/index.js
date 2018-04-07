import React from 'react';
import styled from 'styled-components';
import { color } from '../../_settings/_variables';

const Sidebar = () => <SidebarStyle>Sidebar</SidebarStyle>;

const SidebarStyle = styled.aside`
  grid-area: sidebar;
  position: relative;
  z-index: 2;
  background-color: ${color.white};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
`;

export default Sidebar;
