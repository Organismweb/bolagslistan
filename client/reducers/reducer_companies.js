import { COMPANIES_FETCH } from '../constants';

export default (state = [], action) => {
  switch (action.type) {
    case COMPANIES_FETCH:
      return [...action.payload];
    default:
      return state;
  }
};
