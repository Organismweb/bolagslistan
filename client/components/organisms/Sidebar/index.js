// @flow
import * as React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faFile, faStar, faCog, faFlag } from '@fortawesome/fontawesome-pro-solid';
import { color, spacing } from '../../_settings/_variables';

const Sidebar = () => (
  <SidebarStyle>
    <MenuContainer>
      <MenuItem title="Bolagslistan" link="/">
        <FontAwesomeIcon icon={faEnvelopeOpen} size="lg" color={color.darkGrey} />
      </MenuItem>
      <MenuItem title="Anteckningar" link="/anteckningar">
        <FontAwesomeIcon icon={faFile} size="lg" color={color.darkGrey} />
      </MenuItem>
      <MenuItem title="Bevakningar" link="/bevakningar">
        <FontAwesomeIcon icon={faStar} size="lg" color={color.darkGrey} />
      </MenuItem>
      <MenuItem title="Inställningar" link="/installningar">
        <FontAwesomeIcon icon={faCog} size="lg" color={color.darkGrey} />
      </MenuItem>
      <MenuItem title="Support" link="/support">
        <FontAwesomeIcon icon={faFlag} size="lg" color={color.darkGrey} />
      </MenuItem>
    </MenuContainer>
  </SidebarStyle>
);

type ItemProps = {
  link: string,
  title: string,
  children: React.Node,
};

const MenuItem = (props: ItemProps) => (
  <ListItem>
    <ListLink to={props.link} exact>
      <ListItemIcon>{props.children}</ListItemIcon>
      <ListItemTitle>{props.title}</ListItemTitle>
    </ListLink>
  </ListItem>
);

const SidebarStyle = styled.aside`
  grid-area: sidebar;
  position: relative;
  z-index: 2;
  background-color: ${color.white};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
`;

const MenuContainer = styled.ul`
  padding-left: 0;
  padding-top: ${spacing.md};
  margin: 0;
`;

const ListItem = styled.li`
  list-style: none;
`;

const ListItemTitle = styled.span`
  color: ${color.darkGrey};
`;

const ListItemIcon = styled.span`
  display: inline-block;
  width: 40px;
`;

const NavLinkStyle = styled.a`
  display: block;
  width: 100%;
  padding-top: ${spacing.md};
  padding-bottom: ${spacing.md};
  padding-left: ${spacing.lg};
  padding-right: ${spacing.lg};
  text-decoration: none;
  &.active {
    color: ${color.black};
    ${ListItemTitle} {
      color: ${color.black};
    }
    path {
      fill: ${color.purple};
    }
  }
`;
const ListLink = NavLinkStyle.withComponent(NavLink);

export default Sidebar;
