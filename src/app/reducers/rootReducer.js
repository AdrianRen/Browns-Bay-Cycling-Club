import {combineReducers} from "redux";
import { reducer as FormReducers } from 'redux-form';
import testReducer from '../../features/testarea/testReducer';
import eventReducer from '../../features/event/eventReducer';

const rootReducer = combineReducers({
  form: FormReducers,
  test: testReducer,
  events: eventReducer
});

export default rootReducer;
