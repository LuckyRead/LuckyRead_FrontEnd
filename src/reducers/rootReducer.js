import { combineReducers } from 'redux';

import flashMessages from './reducers/flashMessages';
import auth from './reducers/auth';
import fragmentreducer from './reducers/fragmentreducer';


export default combineReducers({
  flashMessages,
  auth,
  fragmentreducer
});
