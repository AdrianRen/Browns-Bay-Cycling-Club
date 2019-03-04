import {combineReducers} from "redux";
import { reducer as FormReducers } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { firebaseReducer} from "react-redux-firebase";
import {firestoreReducer} from "redux-firestore";
import testReducer from '../../features/testarea/testReducer';
import eventReducer from '../../features/event/eventReducer';
import modalReducer from '../../features/modals/ModalReducer';
import authReducer from '../../features/auth/authReducer';
import asyncReducer from '../../features/async/asyncReducer';

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  form: FormReducers,
  test: testReducer,
  events: eventReducer,
  modals: modalReducer,
  auth: authReducer,
  async: asyncReducer,
  toastr: toastrReducer
});

export default rootReducer;
