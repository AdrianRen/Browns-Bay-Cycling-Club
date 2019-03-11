import {SIGN_OUT_USER } from "./authConstans";
import {closeModal} from "../modals/ModalActions";

export const login = creds => {
  return async (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    try {
      await firebase.auth().signInWithEmailAndPassword(creds.email, creds.password);
      dispatch(closeModal())
    } catch (e) {
      console.log(`Something went wrong:`,e);
    }

  }
};

export const signOut = () => {
  return {
    type: SIGN_OUT_USER
  }
};