import axios from 'axios';
import API from '../api';
import { createBrowserHistory } from 'history';



export function userSignupRequest(userData) {
  console.log(userData)
  return dispatch => {
    return API.post(`/api/signup`, userData)
          .then(res => {
            console.log(res)

          })
        }
};

export function addAllTopics(eeh) {
  return dispatch => {
    axios(
      {
        method: 'GET',
        url: 'https://luckyread-backend.herokuapp.com/api/preference/add_all',
        headers: {
           Authorization: "Bearer "+ localStorage.jwtToken
         }
       }).then(
        (res) => {
          console.log("All topics added")
        },

        (err) => {
          console.log("error en topics all")
        }
      )
}
};

export function verifyUser(username){
  console.log(username)
        console.log("que pasaaa")
  return dispatch => {

    return API.post(`/api/users/user_exist`, username).then(
      (res) => {
        console.log("que pasaaa")
        console.log(res)
      },
      (err) => {
        console.log(err)
      }
    )

        }
}


export function verifyEmail(email){
  console.log(email)
  return dispatch => {
    return API.post(`/api/users/email_exist`, email)
          .then(res => {
            console.log(res)
          })
        }
}


export default createBrowserHistory();

// export function isUserExists(identifier) {
//   return dispatch => {
//     return axios.get(`/api/users/${identifier}`);
//   }
// }
