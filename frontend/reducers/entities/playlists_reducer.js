import { RECEIVE_PLAYLISTS, RECEIVE_PLAYLIST, REMOVE_PLAYLIST } from '../../actions/playlist_actions';
import { RECEIVE_PLAYLIST_TRACK, REMOVE_PLAYLIST_TRACK } from '../../actions/playlist_track_actions';
import { merge } from 'lodash';

const playlistsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PLAYLISTS:
      return merge({}, state, action.playlists);
    case RECEIVE_PLAYLIST:
      const newState = merge({}, state);
      newState[action.playlist.id] = action.playlist;
      return newState;
    case REMOVE_PLAYLIST:
      const otherState = merge({}, state);
      delete otherState[action.playlistId];
      return otherState;
    case RECEIVE_PLAYLIST_TRACK:
      const addedState = merge({}, state);
      addedState[action.playlistTrack.playlist_id].track_ids.push(action.playlistTrack.track_id);
      return addedState;
    case REMOVE_PLAYLIST_TRACK:
      const removedState = merge({}, state);
      const arr = removedState[action.playlistTrack.playlist_id].track_ids;
      const trackIdx = arr.indexOf(action.playlistTrack.track_id);
      removedState[action.playlistTrack.playlist_id].track_ids.splice(trackIdx,1);
      return removedState;
    default:
      return state;
  }
};

export default playlistsReducer;
