import { combineReducers } from 'redux';
import CompaniesReducer from './reducer_companies';
import WatchedCompaniesReducer from './reducer_watched';

const rootReducer = combineReducers({
  companies: CompaniesReducer,
  watched: WatchedCompaniesReducer,
});

export default rootReducer;
