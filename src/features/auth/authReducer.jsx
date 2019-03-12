import {LOGIN_USER} from "./authConstans";
import { createReducer} from "../../app/common/util/reducerUtil";

const initalState = {
  currentUser: {}
};

export const loginUser = (state, payload) => {
  return {
    ...state,
    authenticated: true,
    currentUser: payload.creds.email
  };
};

export default createReducer(initalState, {
  [LOGIN_USER]: loginUser
})

