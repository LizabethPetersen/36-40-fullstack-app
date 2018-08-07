import { combineReducers } from 'redux';
import token from './token';
import profile from './profile-reducer';
import images from './image-reducer';

export default combineReducers({
  token,
  profile,
  images,
});
