import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'
import authReducer from './auth_reducer';
import barReducer from './bar_reducer';

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  bar: barReducer
});

export default rootReducer;
