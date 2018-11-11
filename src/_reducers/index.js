import { combineReducers } from "redux";

import { authentication } from "./authentication.reducer";
import {
  registration,
  email_exist,
  username_exist
} from "./registration.reducer";
import { users } from "./users.reducer";
import { alert } from "./alert.reducer";

const rootReducer = combineReducers({
  /*   authentication, */
  registration,
  email_exist,
  username_exist,
  users,
  alert
});

export default rootReducer;
