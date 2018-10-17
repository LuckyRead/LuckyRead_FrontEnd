import { combineReducers } from 'redux';

import auth from './auth';
import fragmentreducer from './fragmentreducer';


export default combineReducers({
  auth,
  fragmentreducer
});
