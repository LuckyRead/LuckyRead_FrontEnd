/* import { authHeader } from "../_helpers"; */
import API from "../api";
import axios from "axios"
export const userService = {
  login,
  login_social,
  logout,
  register,
  verify_username,
  verify_email
};

function login(auth) {
  console.log("Iniciando sesion");
  console.log({ auth });
  return API.post("/api/login", { auth });
}

function login_social(res) {
  if (res["data"]["warning"]){
    console.log('jwt token: ' + localStorage.jwtToken)
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
        console.log(err);
      }
    )
  }

}

function logout() {
  console.log("service logout");
  localStorage.removeItem("jwtToken");
  localStorage.removeItem("user");
}

function register(user) {
  console.log("Registrando usuario");
  console.log(user);
  return API.post(`/api/signup`, user);
}

function verify_username(username) {
  console.log("Verificando Usuario");
  console.log(username);
  return API.post(`/api/users/user_exist`, { username });
}

function verify_email(email) {
  console.log("Verificando email");
  console.log(email);
  return API.post(`/api/users/email_exist`, { email });
}
