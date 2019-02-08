import {SIGN_OUT_USER, LOGIN_USER} from "./authConstans";
import { createReducer} from "../../app/common/util/reducerUtil";

const initalState = {
  currentUser: {}
};

export const loginUser = (state, payload) => {
  const {creds} = payload;
  return {
    ...state,
    authenticated: true,
    currentUser: payload.creds.email
  };
};

export const signOutUser = (state, payload) => {
  return {
    ...state,
    authenticated: false,
    currentUser:{}
  };
};

export default createReducer(initalState, {
  [SIGN_OUT_USER]: signOutUser,
  [LOGIN_USER]: loginUser
})

