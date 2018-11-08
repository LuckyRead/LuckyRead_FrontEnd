
import API from '../api';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { SET_CURRENT_USER } from './types';



export function setCurrentUser(user){
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('user');
    console.log('en funcion logout');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  };
}

export function login(auth) {
  return dispatch => {
    return API.post('/api/login', auth)
    .then( res=>{
        //console.log(res);
        const token = res.data.jwt;
        localStorage.setItem('jwtToken', token);
        setAuthorizationToken(token);
        //obtener el usuario para la navbar
        API.get('/api/users/current', token).then(
          (res_u) => {
            console.log(res_u['data']['current_user'])
            const current_user = res_u.data.current_user;
            localStorage.setItem('user', current_user);
          }
        )
        dispatch(setCurrentUser(jwtDecode(token)));
        return res
    }).catch(function(error){
      const response = error.response
      console.log('login fallido');
      return response
    })
  }
}

export function login_social(token) {
  return dispatch => {
    localStorage.setItem('jwtToken', token);
    setAuthorizationToken(token);
    API.get('/api/users/current', token).then(
      (res_u) => {
        console.log(res_u['data']['current_user'])
        const current_user = res_u.data.current_user;
        localStorage.setItem('user', current_user);
      }
    )
    dispatch(setCurrentUser(jwtDecode(token)));
  }
}
