// @flow
import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faStar, faChevronDown } from '@fortawesome/fontawesome-pro-solid';
import { timingFunctions } from 'polished';
import DateToLocalString from '../../../utils/dateToLocalString';
import { TabList, Tab } from '../TabList';
import { color, spacing, font } from '../../_settings/_variables';
import type { Company } from '../../../types';

type Props = {
  company: Company,
  watchCompany: (arg: number) => void,
  unWatchCompany: (arg: number) => void,
  toggleCompany: (e: Event, arg: number) => void,
  watched: boolean,
  open: boolean,
  index: number,
};

export default class ListItem extends React.PureComponent<Props> {
  // This returns the correct method to the star button.
  watchHandler = (e: Event) => {
    e.stopPropagation();
    const { company } = this.props;
    // If the company is watched, return the unwatch method.
    // If not watched return the watch method.
    if (this.props.watched) {
      return this.props.unWatchCompany(company.id);
    }
    return this.props.watchCompany(company.id);
  };
  // If list item is open, render additional content.
  renderItemContent = () => {
    // TODO: When toggling the list item from active state to false
    // Fade out the content smooth.
    if (this.props.open) {
      return (
        <ListItemLowerContainer>
          <TabList defaultActiveTabIndex={0}>
            <Tab title="Bolagsinformation">Content 1</Tab>
            <Tab title="Bokslut &amp; nyckeltal">Content 2</Tab>
            <Tab title="Kontaktinformation">Content 3</Tab>
            <Tab title="Anteckningar">Content 4</Tab>
          </TabList>
        </ListItemLowerContainer>
      );
    }
  };
  render() {
    const { company, open, watched, index } = this.props;

    return (
      <ListItemContainer delay={index} aria-expanded={open}>
        <ListItemUpper onClick={e => this.props.toggleCompany(e, company.id)}>
          <StarButton onClick={this.watchHandler} watched={watched}>
            <FontAwesomeIcon icon={faStar} color={color.yellow} />
          </StarButton>
          <Name>
            <h3>{company.name.toLowerCase()}</h3>
          </Name>
          <ListItemCell>
            <span>{company.county_code.toLowerCase()}</span>
          </ListItemCell>
          <ListItemCell>
            <span>{company.category_name}</span>
          </ListItemCell>
          <ListItemCell>
            <span>{DateToLocalString(company.reg_date)}</span>
          </ListItemCell>
          <Arrow open={open}>
            <FontAwesomeIcon icon={faChevronDown} />
          </Arrow>
        </ListItemUpper>
        <ListItemLower open={open}>{this.renderItemContent()}</ListItemLower>
      </ListItemContainer>
    );
  }
}

const listAnimation = keyframes`
  to {
    opacity: 1;
    transform: none;
  }
`;

const ListItemContainer = styled.li.attrs({
  style: props => ({
    animation: `${listAnimation} 300ms ${timingFunctions('easeInOutQuad')} ${props.delay * 30}ms forwards`,
  }),
})`
  list-style: none;
  margin-bottom: 15px;
  background-color: ${color.white};
  border: 1px solid ${color.grey};
  box-shadow: 0 2px 4px 0 rgba(31, 46, 61, 0.06);
  opacity: 0;
  transform: translateX(-40px);
`;

const ListItemUpper = styled.div`
  display: grid;
  grid-template-columns: 60px 25% 20% 1fr 15% 60px;
  grid-column-gap: ${spacing.sm};
  height: 60px;
  cursor: pointer;
  + li {
    margin-top: ${spacing.md};
  }
`;

const StarButton = styled.button`
  width: 60px;
  background-color: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  outline: 0;
  &:hover {
    svg {
      transform: scale(1.1);
    }
  }
  svg {
    transition: transform 300ms;
    path {
      fill: ${props => (props.watched ? color.yellow : color.grey)};
      transition: fill 200ms;
    }
  }
`;

const ListItemCell = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  color: #5f6b7a;
  font-size: ${font.size.sm};
`;

const Name = ListItemCell.extend`
  h3 {
    font-weight: bold;
    color: ${color.black};
    font-size: ${font.size.md};
    margin: 0;
  }
`;

const Arrow = ListItemCell.extend`
  justify-content: center;
  text-align: center;
  transform: ${props => (props.open ? 'rotate(180deg)' : 'none')};
  transition: all 300ms;
  svg {
    path {
      fill: ${props => (props.open ? color.black : color.darkGrey)};
    }
  }
`;

const ListItemLower = styled.div`
  display: flex;
  opacity: 0;
  visibility: hidden;
  border-top: 1px solid ${color.grey};
  height: 0;
  overflow: hidden;
  transition: all 300ms;
  transform: translateZ(0);
  ${props =>
    props.open &&
    `
    height: 350px;
    opacity: 1;
    visibility: visible;
  `};
`;

const ListItemLowerContainer = styled.div`
  display: flex;
  flex: 1;
  padding: ${spacing.md};
`;
