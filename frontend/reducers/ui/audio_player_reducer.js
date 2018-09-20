import { SET_CURRENT_TRACK, PLAY_AUDIO, PAUSE_AUDIO,
         SET_TRACK_QUEUE, ADD_TRACK_QUEUE, GET_QUEUE_POS,
         NEXT_TRACK, PREV_TRACK, CLEAR_PLAYER } from '../../actions/ui_actions';

const defaultState = {
  currentTrackId: null,
  isPlaying: false,
  queue: [],
  queuePos: -1,
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
      if (playState.currentTrackId) playState.isPlaying = true;
      return playState;
    case PAUSE_AUDIO:
      const pauseState = Object.assign({}, state);
      pauseState.isPlaying = false;
      return pauseState;
    case SET_TRACK_QUEUE:
      const queueState = Object.assign({}, state);
      queueState.queue = action.queue;
      return queueState;
    case ADD_TRACK_QUEUE:
      const addedState = Object.assign({}, state);
      if (!addedState.queue.includes(action.trackId)) {
        addedState.queue.push(action.trackId);
      }
      return addedState;
    case GET_QUEUE_POS:
      const posState = Object.assign({}, state);
      posState.queuePos = posState.queue.indexOf(posState.currentTrackId);
      return posState;
    case NEXT_TRACK:
      const nextState = Object.assign({}, state);
      if (nextState.queuePos + 1 >= nextState.queue.length) {
        nextState.queuePos = -1;
        nextState.currentTrackId = null;
        nextState.isPlaying = false;
      } else {
        nextState.queuePos++;
        nextState.currentTrackId = nextState.queue[nextState.queuePos];
      }
      return nextState;
    case PREV_TRACK:
      const prevState = Object.assign({}, state);
      if (prevState.queuePos - 1 < 0) {
        prevState.queuePos = -1;
        prevState.currentTrackId = null;
        prevState.isPlaying = false;
      } else {
        prevState.queuePos--;
        prevState.currentTrackId = prevState.queue[prevState.queuePos];
      }
      return prevState;
    case CLEAR_PLAYER:
      return defaultState;
    default:
      return state;
  }
};

export default audioPlayerReducer;
