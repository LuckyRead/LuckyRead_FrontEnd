/* import { authHeader } from "../_helpers"; */
import API from "../api";
import axios from "axios";
import { history } from "../_helpers";
export const userService = {
  login,
  login_social,
  logout,
  register,
  verify_username,
  verify_email,
  addAllTopics,
  followFriends,
  addPreferences
};

function login(auth) {
  console.log("Iniciando sesion");
  console.log({ auth });
  return API.post("/api/login", { auth });
}

function login_social(response) {}

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

function addAllTopics() {
  return axios({
    method: "GET",
    url: "https://luckyread-backend.herokuapp.com/api/preference/add_all",
    headers: {
      Authorization: "Bearer " + localStorage.jwtToken
    }
  });
}

function addPreferences(topics_id) {
  var postData = {
    topics_id: topics_id
  };

  let axiosConfig = {
    headers: {
      Authorization: "Bearer " + localStorage.jwtToken
    }
  };

  return axios.post(
    "https://luckyread-backend.herokuapp.com/api/topic/add_many",
    postData,
    axiosConfig
  );
}

function followFriends() {
  return axios({
    method: "GET",
    url: "https://luckyread-backend.herokuapp.com/api/friend/random",
    headers: {
      Authorization: "Bearer " + localStorage.jwtToken
    }
  }).then(response =>{
    console.log('FRIENDS FOLLOW')
    console.log(response)
  });
}
