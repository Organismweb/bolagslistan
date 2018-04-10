// @flow
import * as React from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faFile, faStar, faCog, faFlag } from '@fortawesome/fontawesome-pro-solid';
import { color, spacing } from '../../_settings/_variables';
import Label from '../../atoms/Label';
import MenuItem from '../../atoms/MenuItem';

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
    <TagsContainer>
      <h3>Sparade Söktermer</h3>
      <Label title="Lorem ipsum" />
      <Label title="Företag i Göteborg" />
      <Label title="Snickerier i Stockholm" />
      <Label title="Javisst" />
    </TagsContainer>
  </SidebarStyle>
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

const TagsContainer = styled.div`
  padding-left: ${spacing.lg};
  padding-right: ${spacing.lg};
  span {
    margin-bottom: ${spacing.xs};
    margin-right: ${spacing.xs};
  }
`;

export default Sidebar;
