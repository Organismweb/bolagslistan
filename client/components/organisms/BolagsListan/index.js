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
  renderOnlyWatched: boolean,
  watchCompany: () => void,
  unWatchCompany: () => void,
  fetchCompanies: () => void,
};

type State = {
  open?: number,
};

class BolagsListan extends Component<Props, State> {
  state = {
    open: null,
  };
  componentDidMount() {
    // If the companies state is empty, perform a fetch.
    if (!this.props.companies.length) {
      this.props.fetchCompanies();
    }
  }
  // Toggle selected company state.
  toggleCompany = (event, id) => {
    event.stopPropagation();
    if (this.state.open === id) {
      // If the current id is the same as the clicked id, set state to null.
      this.setState({ open: null });
    } else {
      // If the current id differs from the selected id, set the new id as state.
      this.setState({ open: id });
    }
  };
  renderCompanies = () => {
    let { companies } = this.props;
    const { watchings } = this.props;
    if (companies.length) {
      // If this component has the prop renderOnlyWatched set to true, filter the companies
      // before looping through them.
      if (this.props.renderOnlyWatched) {
        companies = companies.filter(company => watchings.indexOf(company.id) > -1);
      }
      return companies.map(company => {
        let watched = false;
        let open = false;
        if (watchings.length) {
          // If this company is found in the watchings state, set watched to true.
          watched = watchings.indexOf(company.id) > -1;
        }
        if (this.state.open === company.id) {
          // If the current selected state is the same as this company id
          // Set selected to true.
          open = true;
        }
        return (
          <ListItem
            key={company.id}
            watched={watched}
            company={company}
            open={open}
            watchCompany={this.props.watchCompany}
            unWatchCompany={this.props.unWatchCompany}
            toggleCompany={this.toggleCompany}
          />
        );
      });
    }
  };

  render() {
    return <List role="presentation">{this.renderCompanies()}</List>;
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
