import {MODAL_OPEN, MODAL_CLOSE} from "./ModalConstants";

export const openModal = (modalType, modalProps) => {
  return{
    type: MODAL_OPEN,
    payload:{
      modalProps,
      modalType
    }
  }
};


export const closeModal = (modalType, modalProps) => {
  return{
    type: MODAL_CLOSE,
    payload:{
      modalProps,
      modalType
    }
  }
};
