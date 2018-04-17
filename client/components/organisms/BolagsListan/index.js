// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import fetchCompanies from '../../../actions/fetchCompanies';
import { watchCompany, unWatchCompany } from '../../../actions/watchCompany';
import type { Company } from '../../../types';
import ListItem from '../../molecules/ListItem';

type Props = {
  companies: [Company],
  watchings: [number],
  renderOnlyWatched?: boolean,
  watchCompany: () => void,
  unWatchCompany: () => void,
  fetchCompanies: () => void,
};

type State = {
  selectedListItem: ?number,
};

class BolagsListan extends Component<Props, State> {
  state = {
    selectedListItem: null,
  };
  componentDidMount() {
    // If the companies state is empty, perform a fetch.
    if (!this.props.companies.length) {
      this.props.fetchCompanies();
    }
  }
  // Returns a filtered array with only watched companies.
  filterCompanies = (companies = []) => companies.filter(company => this.props.watchings.indexOf(company.id) > -1);
  // Toggle selected company state.
  toggleCompany = (event, id) => {
    event.stopPropagation();
    this.state.selectedListItem === id
      ? this.setState({ selectedListItem: null })
      : this.setState({ selectedListItem: id });
  };
  render() {
    let { companies } = this.props;
    if (companies.length) {
      if (this.props.renderOnlyWatched) {
        companies = this.filterCompanies(companies);
      }
      return (
        <List role="presentation">
          {companies.map((company, index) => (
            <ListItem
              key={company.id}
              index={index}
              watched={this.props.watchings.indexOf(company.id) > -1}
              company={company}
              open={this.state.selectedListItem === company.id}
              watchCompany={this.props.watchCompany}
              unWatchCompany={this.props.unWatchCompany}
              toggleCompany={this.toggleCompany}
            />
          ))}
        </List>
      );
    }
    // Todo make loader component.
    return 'Loading..';
  }
}

function mapStateToProps(state) {
  return {
    companies: state.companies,
    watchings: state.watchings,
  };
}

const mapDispatchToProps = (dispatch: Dispatch<*>) =>
  bindActionCreators({ fetchCompanies, watchCompany, unWatchCompany }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BolagsListan);

const List = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  margin: 0;
`;
