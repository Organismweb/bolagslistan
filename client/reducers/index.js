import { combineReducers } from 'redux';
import companiesReducer from './reducer_companies';
import watchedCompaniesReducer from './reducer_watched';

const rootReducer = combineReducers({
  companies: companiesReducer,
  watched: watchedCompaniesReducer,
});

export default rootReducer;
