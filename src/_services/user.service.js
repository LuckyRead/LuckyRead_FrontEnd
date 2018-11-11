/* import { authHeader } from "../_helpers"; */
import API from "../api";
export const userService = {
  register,
  verify_username,
  verify_email
};

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
