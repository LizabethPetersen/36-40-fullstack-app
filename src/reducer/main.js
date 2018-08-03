import { combineReducers } from 'redux';
import token from './token';
import profile from './profile-reducer';

export default combineReducers({
  token,
  profile,
});
