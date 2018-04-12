import base64 from 'base-64';
import { COMPANIES_FETCH, COMPANIES_FETCH_ERROR, BASE_URL } from '../constants';
import { API_KEY, ADMIN, PASSWORD } from '../credentials';
import fetchErrorHandler from '../utils/fetchErrorHandler';

const auth = base64.encode(`${ADMIN}:${PASSWORD}`);
const headers = new Headers();
headers.append('Authorization', `Basic ${auth}`);
headers.append('X-API-KEY', API_KEY);

const fetchCompanies = () => dispatch => {
  fetch(`${BASE_URL}/companies`, {
    headers,
    mode: 'no-cors',
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
