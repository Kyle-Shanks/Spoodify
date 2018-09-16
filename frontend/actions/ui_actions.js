export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const SET_MODAL_COMPONENT = 'SET_MODAL_COMPONENT';
export const SET_MODAL_PROPS = 'SET_MODAL_PROPS';

// Loading Actions
export const startLoading = () => {
  return { type: START_LOADING };
};
export const stopLoading = () => {
  return { type: STOP_LOADING };
};

// Modal Actions
export const openModal = () => {
  return { type: OPEN_MODAL };
};
export const closeModal = () => {
  return { type: CLOSE_MODAL };
};
export const setModalComponent = component => {
  return {
    type: SET_MODAL_COMPONENT,
    component
  }
};
export const setModalProps = props => {
  return {
    type: SET_MODAL_PROPS,
    props
  }
};
