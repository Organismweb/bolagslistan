// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import watchCompany from '../../../actions/watchCompany';
import { Company } from '../../../types';

type Props = {
  companies: [Company],
  watched: [Company],
  watchCompany: (company: Company) => void,
};

class Dashboard extends Component<Props> {
  renderWatched = () => {
    if (this.props.watched.length) {
      return this.props.watched.map(company => <li key={company.name}>{company.name}</li>);
    }
    return null;
  };
  renderCompanies = () =>
    this.props.companies.map(company => (
      <li key={company.name}>
        {company.name}
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
  bindActionCreators({ watchCompany }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
