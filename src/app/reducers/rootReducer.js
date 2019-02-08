import {combineReducers} from "redux";
import { reducer as FormReducers } from 'redux-form';
import testReducer from '../../features/testarea/testReducer';
import eventReducer from '../../features/event/eventReducer';
import modalReducer from '../../features/modals/ModalReducer';
import authReducer from '../../features/auth/authReducer';

const rootReducer = combineReducers({
  form: FormReducers,
  test: testReducer,
  events: eventReducer,
  modals: modalReducer,
  auth: authReducer
});

export default rootReducer;
