// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { unWatchCompany } from '../../../actions/watchCompany';
import type { Company } from '../../../types';

type Props = {
  companies: [Company],
  watchings: [number],
  unWatchCompany: (arg: number) => void,
};

class Watchings extends Component<Props> {
  renderWatchedCompanies = () => {
    const { companies, watchings } = this.props;
    if (watchings.length) {
      return companies.map(company => {
        if (watchings.indexOf(company.id) > -1) {
          return (
            <li key={company.id}>
              {company.title}
              <button onClick={() => this.props.unWatchCompany(company.id)}>Sluta Bevaka</button>
            </li>
          );
        }
        return null;
      });
    }
    return null;
  };

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
    watchings: state.watchings,
  };
}

const mapDispatchToProps = (dispatch: Dispatch<*>) => bindActionCreators({ unWatchCompany }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Watchings);
