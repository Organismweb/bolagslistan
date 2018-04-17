import { ADD_ERROR, RESET_ERRORS } from '../constants';

export default (state = null, action) => {
  switch (action.type) {
    case ADD_ERROR:
      return action.error.stack;
    case RESET_ERRORS:
      return null;
    default:
      return state;
  }
};
