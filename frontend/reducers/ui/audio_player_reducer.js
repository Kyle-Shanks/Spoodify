import { SET_CURRENT_TRACK, PLAY_AUDIO, PAUSE_AUDIO } from '../../actions/ui_actions';

const defaultState = {
  currentTrackId: null,
  isPlaying: false,
};

const audioPlayerReducer = ( state = defaultState, action ) => {
  Object.freeze(state);
  switch (action.type) {
    case SET_CURRENT_TRACK:
      const newState = Object.assign({}, state);
      newState.currentTrackId = action.trackId;
      return newState;
    case PLAY_AUDIO:
      const playState = Object.assign({}, state);
      playState.isPlaying = true;
      return playState;
    case PAUSE_AUDIO:
      const pauseState = Object.assign({}, state);
      pauseState.isPlaying = false;
      return pauseState;
    default:
      return state;
  }
};

export default audioPlayerReducer;
