import axios from 'axios';

export function userSignupRequest(userData) {
  console.log(userData)
  return dispatch => {
    return     axios.post(`http://localhost:3000/api/signup`, userData)
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
