import { combineReducers } from 'redux';
import companiesReducer from './reducer_companies';
import watchingsReducer from './reducer_watchings';
import errorsReducer from './reducer_errors';

const rootReducer = combineReducers({
  companies: companiesReducer,
  watchings: watchingsReducer,
  error: errorsReducer,
});

export default rootReducer;
