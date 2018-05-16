import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import auth_reducer from './auth_reducer';

const rootReducer = combineReducers({
  form: form,
  auth: auth_reducer
});

export default rootReducer;
