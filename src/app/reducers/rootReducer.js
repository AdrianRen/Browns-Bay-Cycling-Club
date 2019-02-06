import {combineReducers} from "redux";
import { reducer as FormReducers } from 'redux-form';
import testReducer from '../../features/testarea/testReducer';
import eventReducer from '../../features/event/eventReducer';
import modalReducer from '../../features/modals/ModalReducer';

const rootReducer = combineReducers({
  form: FormReducers,
  test: testReducer,
  events: eventReducer,
  modals: modalReducer
});

export default rootReducer;
