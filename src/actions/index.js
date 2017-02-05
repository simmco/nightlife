import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, FETCH_MESSAGE, FETCH_BARS, ADD_VISITOR } from './types';

const ROOT_URL = 'https://nightlife-backend.herokuapp.com';

export function signinUser( { email, password }) {

  return function(dispatch) {
    //Submit email/password to the server
    axios.post(`${ROOT_URL}/auth/signin`, { email, password })
      .then(response => {
        console.log(response);
        // If request is good...
        // - Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER })
        // - Save the JWT token
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('lastSearch', response.data.lastSearch);
        // -redirect to the route '/'
        browserHistory.push('/')
      })
      .catch(() => {
        // If request is bad...
        // - Show an error to the user
        dispatch(authError('Bad Login Info'));
      });
  }
}

export function signupUser({email, password}) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/auth/signup`, {email, password})
      .then(response => {
        dispatch({ type: AUTH_USER})
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/')
      })
      .catch(error => dispatch(authError(error.response.data.error)));

  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function signoutUser() {
  localStorage.removeItem('token');
  localStorage.removeItem('lastSearch');
  return {
    type: UNAUTH_USER
  }
}

export function fetchMessage() {
  return function(dispatch) {
    axios.get(`${ROOT_URL}/api`, {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(response => {
        dispatch({
          type: FETCH_MESSAGE,
          payload: response.data.secret
        })
      })
  }
}

export function fetchBar(city) {

  return function(dispatch) {
    axios.get(`${ROOT_URL}/api/${city}/bars`, { city })
      .then(response => {
        dispatch({
          type: FETCH_BARS,
          payload: response.data
        });
      })
      // .catch((err) => console.log(err))
    axios.get(`${ROOT_URL}/api/${city}/bars/save`, {
      headers: { authorization: localStorage.getItem('token') }
    })
  }


}

export function addUser (city, bar) {

  return function(dispatch) {
    axios.get(`${ROOT_URL}/api/${city}/bars/${bar}`, {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(response => {
        dispatch({
          type: ADD_VISITOR,
          payload: response.data
        })
      })
  }
}
