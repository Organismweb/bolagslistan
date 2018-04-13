import base64 from 'base-64';
import { COMPANIES_FETCH, COMPANIES_FETCH_ERROR, BASE_URL } from '../constants';
import { API_KEY, ADMIN, PASSWORD } from '../credentials';
import fetchErrorHandler from '../utils/fetchErrorHandler';

const headers = new Headers();
const authorization = base64.encode(`${ADMIN}:${PASSWORD}`);

headers.append('Authorization', `Basic ${authorization}`);
headers.append('X-API-KEY', API_KEY);

const fetchCompanies = () => dispatch => {
  fetch(`https://cors-anywhere.herokuapp.com/${BASE_URL}/companies`, {
    headers,
  })
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
