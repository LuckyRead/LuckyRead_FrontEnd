import { userConstants } from "../_constants";

export function registration(state = {}, action) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return { registering: true };
    case userConstants.REGISTER_SUCCESS:
      return {};
    case userConstants.REGISTER_FAILURE:
      return {};
    default:
      return state;
  }
}

export function username_exist(state = {}, action) {
  switch (action.type) {
    case userConstants.VALIDATE_USERNAME_REQUEST:
      return { validating_username: true };
    case userConstants.VALIDATE_USERNAME_SUCCESS:
      return {};
    case userConstants.VALIDATE_USERNAME_FAILURE:
      return {};
    default:
      return state;
  }
}

export function email_exist(state = {}, action) {
  switch (action.type) {
    case userConstants.VALIDATE_EMAIL_REQUEST:
      return { validating_email: true };
    case userConstants.VALIDATE_EMAIL_SUCCESS:
      return {};
    case userConstants.VALIDATE_EMAIL_FAILURE:
      return {};
    default:
      return state;
  }
}
