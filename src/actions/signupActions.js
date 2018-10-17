import axios from 'axios';
import API from '../api';
export function userSignupRequest(userData) {
  console.log(userData)
  return dispatch => {
    return     API.post(`/api/signup`, userData)
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
  }
}

// export function isUserExists(identifier) {
//   return dispatch => {
//     return axios.get(`/api/users/${identifier}`);
//   }
// }
