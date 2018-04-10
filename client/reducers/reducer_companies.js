import {
  COMPANIES_FETCH,
  COMPANIES_FETCH_ERROR,
  COMPANY_WATCH,
  COMPANY_UNWATCH,
} from '../constants';

export default (state = [], action) => {
  switch (action.type) {
    case COMPANIES_FETCH:
      return [...action.payload];
    case COMPANIES_FETCH_ERROR:
      // TODO: Add some UI error handling here instead of a console.error
      console.error(action.payload);
      return state;
    case COMPANY_WATCH:
      return state.map(
        company =>
          company.id === action.payload.id ? { ...action.payload, watched: true } : company
      );
    case COMPANY_UNWATCH:
      return state.map(
        company =>
          company.id === action.payload.id ? { ...action.payload, watched: false } : company
      );
    default:
      return state;
  }
};
