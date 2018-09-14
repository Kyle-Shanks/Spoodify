import { OPEN_MODAL, CLOSE_MODAL } from '../../actions/ui_actions';

const defaultState = {
  isOpen: false
};

const modalReducer = ( state = defaultState, action ) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { isOpen: true };
    case CLOSE_MODAL:
      return { isOpen: false };
    default:
      return state;
  }
};

export default modalReducer;
