import { COMPANIES_FETCH, ADD_ERROR, RESET_ERRORS, BASE_URL } from '../constants';
import { API_KEY } from '../credentials';
import fetchErrorHandler from '../utils/fetchErrorHandler';

const headers = new Headers();
headers.append('X-API-KEY', API_KEY);
const fetchCompanies = () => dispatch => {
  fetch(`${BASE_URL}/companies`, {
    headers,
  })
    .then(fetchErrorHandler)
    .then(response => response.json())
    .then(payload => {
      dispatch({
        type: COMPANIES_FETCH,
        payload,
      });
      dispatch({
        type: RESET_ERRORS,
      });
    })
    .catch(error => {
      dispatch({
        type: ADD_ERROR,
        error,
      });
    });
};

export default fetchCompanies;
