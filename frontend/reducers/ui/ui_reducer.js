import { combineReducers } from 'redux';
import loadingReducer from './loading_reducer';
import modalReducer from './modal_reducer';
import dropdownReducer from './dropdown_reducer';
import audioPlayerReducer from './audio_player_reducer';

const uiReducer = combineReducers({
  loading: loadingReducer,
  modal: modalReducer,
  dropdown: dropdownReducer,
  audioPlayer: audioPlayerReducer,
});

export default uiReducer;
