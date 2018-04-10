// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import fetchCompanies from '../../../actions/fetchCompanies';
import { watchCompany, unWatchCompany } from '../../../actions/watchCompany';
import type { Company } from '../../../types';
import WatchClickOutside from '../../atoms/WatchClickOutside';

type Props = {
  companies: [Company],
  watchCompany: (arg: Company) => void,
  unWatchCompany: (arg: Company) => void,
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
      if (!company.watched) {
        button = <button onClick={() => this.props.watchCompany(company)}>Bevaka</button>;
      } else {
        button = <button onClick={() => this.props.unWatchCompany(company)}>Sluta bevaka</button>;
      }
      return (
        <li key={company.id}>
          {company.title}
          <WatchClickOutside
            onClickOutside={() => {
              console.log('din moder');
            }}
          >
            {button}
          </WatchClickOutside>
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
  };
}

const mapDispatchToProps = (dispatch: Dispatch<*>) =>
  bindActionCreators({ fetchCompanies, watchCompany, unWatchCompany }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
