
import API from '../api';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { SET_CURRENT_USER } from './types';



export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    console.log('en funcion logout');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  };
}

export function login(auth) {
  return dispatch => {
    return API.post('/api/login', auth).then(
      (res) => {
      const token = res.data.jwt;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwtDecode(token)));
    },
    (err) => {console.log('login fallido');}
  );
  }
}
