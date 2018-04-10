import { COMPANIES_FETCH, COMPANIES_FETCH_ERROR } from '../constants';
import fetchErrorHandler from '../utils/fetchErrorHandler';

const fetchCompanies = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts?_start=10&_end=30')
    .then(fetchErrorHandler)
    .then(response => response.json())
    .then(payload => {
      dispatch({
        type: COMPANIES_FETCH,
        payload,
      });
    })
    .catch(error => {
      dispatch({
        type: COMPANIES_FETCH_ERROR,
        payload: error,
      });
    });
};

export default fetchCompanies;
