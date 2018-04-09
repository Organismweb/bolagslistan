import _ from 'lodash';
import { COMPANY_WATCH, COMPANY_UNWATCH } from '../constants';

export default (state = {}, action) => {
  switch (action.type) {
    case COMPANY_WATCH: {
      return { ...state, [action.payload.name]: action.payload };
    }
    case COMPANY_UNWATCH: {
      // Omit creates a new object so no initial clone is needed.
      return _.omit(state, action.payload.name);
    }
    default:
      return state;
  }
};
