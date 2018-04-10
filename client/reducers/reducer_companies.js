import { COMPANIES_FETCH, COMPANIES_FETCH_ERROR } from '../constants';

export default (state = [], action) => {
  switch (action.type) {
    case COMPANIES_FETCH:
      return [...state, ...action.payload];
    case COMPANIES_FETCH_ERROR:
      // TODO: Add some UI error handling here instead of a console.error
      console.error(action.payload);
      return state;
    default:
      return state;
  }
};
