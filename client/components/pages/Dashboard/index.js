// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import fetchCompanies from '../../../actions/fetchCompanies';
import { watchCompany, unWatchCompany } from '../../../actions/watchCompany';
import type { Company } from '../../../types';
import BolagsListan from '../../organisms/BolagsListan';

type Props = {
  companies: [Company],
  watchings: [number],
  // watchCompany: (arg: number) => void,
  // unWatchCompany: (arg: number) => void,
  fetchCompanies: () => void,
};
type State = {
  search: string,
};

class Dashboard extends React.Component<Props, State> {
  componentDidMount() {
    if (!this.props.companies.length) {
      this.props.fetchCompanies();
    }
  }

  render() {
    return (
      <React.Fragment>
        <BolagsListan companies={this.props.companies} watchings={this.props.watchings} />
      </React.Fragment>
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
