import * as PlaylistTrackAPIUtil from '../util/playlist_track_api_util';

export const RECEIVE_PLAYLIST_TRACK = 'RECEIVE_PLAYLIST_TRACK';
export const REMOVE_PLAYLIST_TRACK = 'REMOVE_PLAYLIST_TRACK';

// Regular actions
const receivePlaylistTrack = playlistTrack => {
  return {
    type: RECEIVE_PLAYLIST_TRACK,
    playlistTrack
  };
};

const removePlaylistTrack = playlistTrack => {
  return {
    type: REMOVE_PLAYLIST_TRACK,
    playlistTrack
  };
};

// Thunk actions
export const createPlaylistTrack = playlistTrack => {
  return dispatch => PlaylistTrackAPIUtil.createPlaylistTrack(playlistTrack).then(
    res => dispatch(receivePlaylistTrack(res))
  );
};

export const deletePlaylistTrack = playlistTrackId => {
  return dispatch => PlaylistTrackAPIUtil.deletePlaylistTrack(playlistTrackId).then(
    res => dispatch(removePlaylistTrack(res))
  );
};
