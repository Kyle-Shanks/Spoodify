import { combineReducers } from 'redux';
import loadingReducer from './loading_reducer';
import modalReducer from './modal_reducer';
// import musicPlayerReducer from './music_player_reducer';

const uiReducer = combineReducers({
  loading: loadingReducer,
  modal: modalReducer,
  // musicPlayer: musicPlayerReducer,
});

export default uiReducer;
