import { COMPANY_WATCH } from '../constants';

export default (state = [], action) => {
  switch (action.type) {
    case COMPANY_WATCH:
      return [...state, action.payload];
    default:
      return state;
  }
};
