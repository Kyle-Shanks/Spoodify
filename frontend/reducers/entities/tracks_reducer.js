import { RECEIVE_TRACKS, RECEIVE_TRACK } from '../../actions/track_actions';
import { merge } from 'lodash';

const tracksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRACKS:
      return merge({}, state, action.tracks);
    case RECEIVE_TRACK:
      const newState = merge({}, state);
      newState[action.track.id] = action.track;
      return newState;
    default:
      return state;
  }
};

export default tracksReducer;
