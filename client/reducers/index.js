import { combineReducers } from 'redux';
import companiesReducer from './reducer_companies';

const rootReducer = combineReducers({
  companies: companiesReducer,
});

export default rootReducer;
