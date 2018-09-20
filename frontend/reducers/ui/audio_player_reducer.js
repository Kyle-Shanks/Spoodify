import { SET_CURRENT_TRACK, PLAY_AUDIO, PAUSE_AUDIO,
         SET_TRACK_QUEUE, ADD_TRACK_QUEUE, GET_QUEUE_POS,
         NEXT_TRACK, PREV_TRACK, CLEAR_PLAYER, TOGGLE_REPEAT,
         TOGGLE_SHUFFLE } from '../../actions/ui_actions';

const defaultState = {
  currentTrackId: null,
  isPlaying: false,
  queue: [],
  shuffledQueue: [],
  shuffle: false,
  queuePos: -1,
  repeat: false,
};

function shuffle(a) {
  let arr = a.slice(0);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

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
      queueState.shuffledQueue = queueState.shuffle ? shuffle(action.queue) : action.queue;
      return queueState;
    case ADD_TRACK_QUEUE:
      const addedState = Object.assign({}, state);
      if (!addedState.queue.includes(action.trackId)) {
        addedState.queue.push(action.trackId);
        addedState.shuffledQueue.push(action.trackId);
      }
      return addedState;
    case GET_QUEUE_POS:
      const posState = Object.assign({}, state);
      posState.queuePos = posState.shuffledQueue.indexOf(posState.currentTrackId);
      return posState;
    case NEXT_TRACK:
      const nextState = Object.assign({}, state);
      if (nextState.queuePos + 1 >= nextState.shuffledQueue.length) {
        if (nextState.repeat) {
          nextState.queuePos = 0;
          nextState.currentTrackId = nextState.shuffledQueue[0];
        } else {
          nextState.queuePos = -1;
          nextState.currentTrackId = null;
          nextState.isPlaying = false;
        }
      } else {
        nextState.queuePos++;
        nextState.currentTrackId = nextState.shuffledQueue[nextState.queuePos];
      }
      return nextState;
    case PREV_TRACK:
      const prevState = Object.assign({}, state);
      if (prevState.queuePos - 1 < 0) {
        if (prevState.repeat) {
          prevState.queuePos = prevState.shuffledQueue.length - 1;
          prevState.currentTrackId = prevState.shuffledQueue[prevState.shuffledQueue.length - 1];
        } else {
          prevState.queuePos = -1;
          prevState.currentTrackId = null;
          prevState.isPlaying = false;
        }
      } else {
        prevState.queuePos--;
        prevState.currentTrackId = prevState.shuffledQueue[prevState.queuePos];
      }
      return prevState;
    case CLEAR_PLAYER:
      return defaultState;
    case TOGGLE_REPEAT:
      const repeatState = Object.assign({}, state);
      repeatState.repeat = !repeatState.repeat;
      return repeatState;
    case TOGGLE_SHUFFLE:
      const shuffleState = Object.assign({}, state);
      if (shuffleState.shuffle) {
        shuffleState.shuffle = false;
        shuffleState.shuffledQueue = shuffleState.queue.slice(0);
        shuffleState.queuePos = shuffleState.shuffledQueue.indexOf(shuffleState.currentTrackId);
      } else {
        shuffleState.shuffle = true;
        const currentSongPos = shuffleState.shuffledQueue.indexOf(shuffleState.currentTrackId);
        const piece = shuffle(shuffleState.shuffledQueue.slice(0,currentSongPos).concat(shuffleState.shuffledQueue.slice(currentSongPos+1)));
        shuffleState.shuffledQueue = [shuffleState.shuffledQueue[currentSongPos]].concat(piece);
        shuffleState.queuePos = 0;
      }
      return shuffleState;
    default:
      return state;
  }
};

export default audioPlayerReducer;
