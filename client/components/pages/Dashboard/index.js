// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import fetchCompanies from '../../../actions/fetchCompanies';
import { watchCompany, unWatchCompany } from '../../../actions/watchCompany';
import type { Company } from '../../../types';

type Props = {
  companies: [Company],
  watched: {
    [key: string]: Company,
  },
  watchCompany: (arg: Company) => void,
  unWatchCompany: (arg: Company) => void,
  fetchCompanies: () => void,
};

class Dashboard extends Component<Props> {
  componentDidMount() {
    this.props.fetchCompanies();
    console.log('hej');
  }
  renderWatched = () => {
    const companies = this.props.watched;
    if (Object.keys(companies).length) {
      return Object.keys(companies).map(company => (
        <li key={companies[company].id}>
          {companies[company].title}
          <button onClick={() => this.props.unWatchCompany(companies[company])}>Bevaka</button>
        </li>
      ));
    }
    return null;
  };
  renderCompanies = () =>
    this.props.companies.map(company => (
      <li key={company.id}>
        {company.title}
        <button onClick={() => this.props.watchCompany(company)}>Bevaka</button>
      </li>
    ));

  render() {
    return (
      <div>
        <ul>{this.renderCompanies()}</ul>
        <ul>{this.renderWatched()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    companies: state.companies,
    watched: state.watched,
  };
}

const mapDispatchToProps = (dispatch: Dispatch<*>) =>
  bindActionCreators({ fetchCompanies, watchCompany, unWatchCompany }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
