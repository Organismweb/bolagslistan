import axios from 'axios';
import { COMPANY_WATCH, COMPANY_UNWATCH, BASE_URL, ADD_ERROR } from '../constants';
import { API_KEY } from '../credentials';

const config = {
  headers: {
    'X-API-KEY': API_KEY,
    "Accept": "application/json",
    "Content-Type": "text/plain"
  }
};

export const watchCompany = id => dispatch => {
  // Post the new watching to the server.
  axios
    .post(`${BASE_URL}/watchings`, {
      data: {
        company_id: id
      }
    }, config )
    .then(response => {
      console.log(response);
      // Dispatch new watching to state.
      dispatch({
        type: COMPANY_WATCH,
        id,
      });
    })
    .catch(error => {
      dispatch({
        type: ADD_ERROR,
        error,
      });
    });
};

export const unWatchCompany = id => dispatch => {
  // Dispatch new watching to state.
  dispatch({
    type: COMPANY_UNWATCH,
    id,
  });
  // Post the new watching to the server.
  axios
    .delete(`${BASE_URL}/watchings`, {
      headers,
      data: {
        company_id: id,
      },
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      dispatch({
        type: ADD_ERROR,
        error,
      });
    });
};
