import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { color, spacing, font } from '../../_settings/_variables';

type MenuItemProps = {
  link: string,
  title: string,
  children: React.Node,
};

const MenuItem = (props: MenuItemProps) => (
  <ListItem>
    <ListLink to={props.link} exact>
      <ListItemIcon>{props.children}</ListItemIcon>
      <ListItemTitle>{props.title}</ListItemTitle>
    </ListLink>
  </ListItem>
);

const ListItem = styled.li`
  list-style: none;
`;

const ListItemTitle = styled.span`
  font-size: ${font.family.md};
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
  &:hover {
    background-color: rgba(0, 0, 0, 0.02);
  }
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

export default MenuItem;
