import { OPEN_DROPDOWN, CLOSE_DROPDOWN, SET_DROPDOWN_PROPS } from '../../actions/ui_actions';

const defaultState = {
  isOpen: false,
  dropdownProps: {},
  pos: { x: 0, y: 0 },
};

const dropdownReducer = ( state = defaultState, action ) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_DROPDOWN:
      const openState = Object.assign({}, state);
      openState.isOpen = true;
      openState.pos = action.pos;
      return openState;
    case CLOSE_DROPDOWN:
      const closedState = Object.assign({}, state);
      closedState.isOpen = false;
      return closedState;
    case SET_DROPDOWN_PROPS:
      const propState = Object.assign({}, state);
      propState.dropdownProps = action.props;
      return propState;
    default:
      return state;
  }
};

export default dropdownReducer;
