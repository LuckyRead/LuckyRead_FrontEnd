/* import { authHeader } from "../_helpers"; */
import API from "../api";
export const userService = {
  login,
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
