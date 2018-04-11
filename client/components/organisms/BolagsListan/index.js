import React, { Component } from 'react';
import styled from 'styled-components';

import type { Company } from '../../../types';

type Props = {
  companies: [Company],
};

export default class BolagsListan extends Component<Props> {
  renderCompanies = () => {
    const { companies } = this.props;
    if (companies.length) {
      return companies.map(company => <ListItem key={company.id} name={company.title} />);
    }
  };

  render() {
    return <List>{this.renderCompanies()}</List>;
  }
}

const List = styled.ul`
  positon: relative;
`;

const ListItemStyle = styled.li`
  list-style: none;
  display: flex;
`;

const Star = styled.button``;

const Name = styled.h2``;

const Span = styled.span``;

const Arrow = styled.button``;

type ListItemProps = {
  name: 'string',
};

const ListItem = (props: ListItemProps) => (
  <ListItemStyle>
    <Star />
    <Name>{props.name}</Name>
    <Span />
    <Span />
    <Span />
    <Arrow />
  </ListItemStyle>
);
