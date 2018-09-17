import { combineReducers } from 'redux';
import loadingReducer from './loading_reducer';
import modalReducer from './modal_reducer';
import dropdownReducer from './dropdown_reducer';
// import musicPlayerReducer from './music_player_reducer';

const uiReducer = combineReducers({
  loading: loadingReducer,
  modal: modalReducer,
  dropdown: dropdownReducer,
  // musicPlayer: musicPlayerReducer,
});

export default uiReducer;
