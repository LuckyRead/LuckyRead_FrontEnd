import { authHeader } from "../_helpers";
import API from "../api";
export const userService = {
  register
};

function register(user) {
  return API.post(`/api/signup`, user).then(
    res => {
      console.log(res);
      console.log("usuario registrado");
    },
    err => {
      console.log(err);
      console.log("registro rechazado");
    }
  );
}
