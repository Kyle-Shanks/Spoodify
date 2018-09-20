import { RECEIVE_ARTISTS, RECEIVE_ARTIST } from '../../actions/artist_actions';
import { merge } from 'lodash';

const artistsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ARTISTS:
      return merge({}, state, action.artists);
    case RECEIVE_ARTIST:
      const newState = merge({}, state);
      newState[action.artist.id] = action.artist;
      return newState;
    default:
      return state;
  }
};

export default artistsReducer;
