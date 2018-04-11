import { combineReducers } from 'redux';
import companiesReducer from './reducer_companies';
import companiesWatchings from './reducer_watchings';

const rootReducer = combineReducers({
  companies: companiesReducer,
  watchings: companiesWatchings,
});

export default rootReducer;
