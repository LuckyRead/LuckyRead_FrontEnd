/* import { authHeader } from "../_helpers"; */
import API from "../api";
export const userService = {
  login,
  register,
  verify_username,
  verify_email
};

function login(auth) {
  return API.login({ auth });
}

/* function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
} */

function register(user) {
  console.log("Registrando usuario");
  console.log(user);
  API.post(`/api/signup`, user);
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
