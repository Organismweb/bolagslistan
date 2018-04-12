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

class BolagsListan extends Component<Props> {
  componentDidMount() {
    if (!this.props.companies.length) {
      this.props.fetchCompanies();
    }
  }
  renderCompanies = () => {
    let { companies } = this.props;
    const { watchings } = this.props;
    if (companies.length) {
      if (this.props.renderOnlyWatched) {
        companies = companies.filter(company => watchings.indexOf(company.id) > -1);
        console.log(companies);
      }
      return companies.map(company => {
        let watched = false;
        if (watchings.length) {
          watched = watchings.indexOf(company.id) > -1;
        }
        return (
          <ListItem
            key={company.id}
            watched={watched}
            company={company}
            watchCompany={this.props.watchCompany}
            unWatchCompany={this.props.unWatchCompany}
          />
        );
      });
    }
  };

  render() {
    return <List>{this.renderCompanies()}</List>;
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
