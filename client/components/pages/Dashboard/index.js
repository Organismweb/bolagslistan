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
  watchings: [number],
  watchCompany: (arg: number) => void,
  unWatchCompany: (arg: number) => void,
  fetchCompanies: () => void,
};

class Dashboard extends Component<Props> {
  componentDidMount() {
    if (!this.props.companies.length) {
      this.props.fetchCompanies();
    }
  }
  renderCompanies = () =>
    this.props.companies.map(company => {
      let button;
      const { watchings } = this.props;
      if (watchings.length && watchings.indexOf(company.id) > -1) {
        button = (
          <button onClick={() => this.props.unWatchCompany(company.id)}>Sluta Bevaka</button>
        );
      } else {
        button = <button onClick={() => this.props.watchCompany(company.id)}>Bevaka</button>;
      }

      return (
        <li key={company.id}>
          {company.title}
          {button}
        </li>
      );
    });

  render() {
    return (
      <div>
        <ul>{this.renderCompanies()}</ul>
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
