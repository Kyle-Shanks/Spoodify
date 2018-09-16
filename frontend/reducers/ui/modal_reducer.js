import { OPEN_MODAL, CLOSE_MODAL, SET_MODAL_COMPONENT } from '../../actions/ui_actions';

const defaultState = {
  isOpen: false,
  component: 'create',
};

const modalReducer = ( state = defaultState, action ) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_MODAL:
      const openState = Object.assign({}, state);
      openState.isOpen = true;
      return openState;
    case CLOSE_MODAL:
      const closedState = Object.assign({}, state);
      closedState.isOpen = false;
      return closedState;
    case SET_MODAL_COMPONENT:
      const newState = Object.assign({}, state);
      newState.component = action.component;
      return newState;
    default:
      return state;
  }
};

export default modalReducer;
