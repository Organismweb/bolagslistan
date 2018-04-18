import axios from 'axios';
import { COMPANIES_FETCH, WATCHINGS_FETCH, ADD_ERROR, RESET_ERRORS, BASE_URL } from '../constants';
import { API_KEY } from '../credentials';

const headers = {
  'X-API-KEY': API_KEY,
  ACCEPT: 'application/json',
};

const getCompanies = () => axios.get(`${BASE_URL}/companies`, { headers });
const getWatchings = () => axios.get(`${BASE_URL}/watchings`, { headers });

export const fetchCompanies = () => dispatch => {
  axios
    .all([getCompanies(), getWatchings()])
    .then(
      axios.spread((companiesResponse, watchingsResponse) => {
        dispatch({
          type: COMPANIES_FETCH,
          payload: companiesResponse.data,
        });
        dispatch({
          type: WATCHINGS_FETCH,
          payload: watchingsResponse.data.watchings,
        });
        dispatch({
          type: RESET_ERRORS,
        });
      })
    )
    .catch(error => {
      dispatch({
        type: ADD_ERROR,
        error,
      });
    });
};
