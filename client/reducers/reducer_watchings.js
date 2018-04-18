import { COMPANY_WATCH, COMPANY_UNWATCH, WATCHINGS_FETCH } from '../constants';

export default (state = [], action) => {
  switch (action.type) {
    case WATCHINGS_FETCH:
      return [...action.payload];
    case COMPANY_WATCH:
      return [...state, action.id];
    case COMPANY_UNWATCH: {
      const index = state.indexOf(action.id);
      return [...state.slice(0, index), ...state.slice(index + 1)];
    }
    default:
      return state;
  }
};
