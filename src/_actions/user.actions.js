import { userConstants } from "../_constants";
import { userService } from "../_services";
import { alertActions } from "./";
import { history } from "../_helpers";

export const userActions = {
  login,
  /* logout, */
  register,
  verify_username,
  verify_email
  /*     getAll,
    delete: _delete */
};

function login(auth) {
  return dispatch => {
    dispatch(request(auth));

    userService.login(auth).then(
      response => {
        console.log("Inicio de sesion exitoso");
        console.log(response);
        const token = response.data.jwt;
        const user = response.data.username;
        localStorage.setItem("jwtToken", token);
        localStorage.setItem("user", user);
        console.log(localStorage.jwtToken);
        /*         dispatch(success(response.toString())); */
        history.push("/");
      },
      error => {
        console.log("error en login");
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

/* function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
} */

function register(user) {
  return dispatch => {
    dispatch(request(user));

    userService.register(user).then(
      response => {
        dispatch(success());
        /*         history.push("/"); */
        dispatch(alertActions.success("Registro exitoso"));
      },
      error => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error("Oh, algo salio mal"));
      }
    );
  };

  function request(user) {
    return { type: userConstants.REGISTER_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.REGISTER_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, error };
  }
}

function verify_username(username) {
  console.log("Action verify_username");
  return dispatch => {
    dispatch(request(username));

    userService.verify_username(username).then(
      response => {
        console.log(response.data.email.toString());
        dispatch(success(response.data.email.toString()));
        const resp = response.data.email.toString();
        if (resp === "Taken") {
          dispatch(alertActions.error("El usuario ya existe"));
        } else {
          dispatch(alertActions.success("Usuario Disponible"));
        }
      },
      error => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(username) {
    return { type: userConstants.VALIDATE_USERNAME_REQUEST, username };
  }
  function success(username) {
    return { type: userConstants.VALIDATE_USERNAME_SUCCESS, username };
  }
  function failure(error) {
    return { type: userConstants.VALIDATE_USERNAME_FAILURE, error };
  }
}

function verify_email(email) {
  console.log("Action verify_email");
  return dispatch => {
    dispatch(request(email));

    userService.verify_email(email).then(
      response => {
        console.log(response.data.email.toString());
        dispatch(success(response.data.email.toString()));
        const resp = response.data.email.toString();
        if (resp === "Taken") {
          dispatch(alertActions.error("El email existe"));
        } else {
          dispatch(alertActions.success("Email disponible"));
        }
      },
      error => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(email) {
    return { type: userConstants.VALIDATE_EMAIL_REQUEST, email };
  }
  function success(email) {
    return { type: userConstants.VALIDATE_EMAIL_SUCCESS, email };
  }
  function failure(error) {
    return { type: userConstants.VALIDATE_EMAIL_FAILURE, error };
  }
}

/* function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        userService.delete(id)
            .then(
                user => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
} */
