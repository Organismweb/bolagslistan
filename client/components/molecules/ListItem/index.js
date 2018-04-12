import * as React from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faStar, faChevronDown } from '@fortawesome/fontawesome-pro-solid';
import { color, spacing, font } from '../../_settings/_variables';
import { Company } from '../../../types';

type Props = {
  company: Company,
  watchCompany: (arg: number) => void,
  unWatchCompany: (arg: number) => void,
  watched: boolean,
};

export default class ListItem extends React.Component<Props> {
  state = {
    open: false,
  };
  watchHandler = e => {
    e.stopPropagation();
    const { company } = this.props;
    if (this.props.watched) {
      return this.props.unWatchCompany(company.id);
    }
    return this.props.watchCompany(company.id);
  };
  toggleList = e => {
    e.stopPropagation();
    const newState = { ...this.state };
    this.state.open ? (newState.open = false) : (newState.open = true);
    this.setState(newState);
  };
  render() {
    return (
      <ListItemContainer onClick={this.toggleList}>
        <ListItemUpper>
          <StarButton onClick={this.watchHandler} watched={this.props.watched}>
            <FontAwesomeIcon icon={faStar} color={color.yellow} />
          </StarButton>
          <Name>
            <h3>Görans Bygg AB</h3>
          </Name>
          <Location>
            <span>Västra Götaland</span>
          </Location>
          <Category>
            <span>Snickeri</span>
          </Category>
          <Date>
            <span>17 April 2018</span>
          </Date>
          <Arrow>
            <FontAwesomeIcon icon={faChevronDown} />
          </Arrow>
        </ListItemUpper>
      </ListItemContainer>
    );
  }
}

const ListItemContainer = styled.li`
  list-style: none;
  margin-bottom: 15px;
`;

const ListItemUpper = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr 1fr 1fr 1fr 60px;
  height: 60px;
  background: ${color.white};
  border: 1px solid ${color.grey};
  box-shadow: 0 2px 4px 0 rgba(31, 46, 61, 0.06);

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
`;

const Name = ListItemCell.extend`
  h3 {
    font-size: ${font.size.md};
    margin: 0;
  }
`;

const Location = ListItemCell.extend``;

const Category = ListItemCell.extend``;

const Date = ListItemCell.extend``;

const Arrow = ListItemCell.extend`
  text-align: center;
  justify-content: center;
`;
