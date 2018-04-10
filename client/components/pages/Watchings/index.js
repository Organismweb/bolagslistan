// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { unWatchCompany } from '../../../actions/watchCompany';
import type { Company } from '../../../types';

type Props = {
  companies: [Company],
  unWatchCompany: (arg: Company) => void,
};

class Watchings extends Component<Props> {
  renderWatchedCompanies = () =>
    this.props.companies.filter(company => company.watched === true).map(company => (
      <li key={company.id}>
        {company.title}
        <button onClick={() => this.props.unWatchCompany(company)}>Sluta bevaka</button>
      </li>
    ));

  render() {
    return (
      <div>
        <ul>{this.renderWatchedCompanies()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    companies: state.companies,
  };
}

const mapDispatchToProps = (dispatch: Dispatch<*>) =>
  bindActionCreators({ unWatchCompany }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Watchings);
