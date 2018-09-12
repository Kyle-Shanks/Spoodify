import * as PlaylistAPIUtil from '../util/playlist_api_util';

export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const REMOVE_PLAYLIST = 'REMOVE_PLAYLIST';

// Regular actions
const receivePlaylists = playlists => {
  return {
    type: RECEIVE_PLAYLISTS,
    playlists
  };
};

const receivePlaylist = playlist => {
  return {
    type: RECEIVE_PLAYLIST,
    playlist
  };
};

const removePlaylist = playlistId => {
  return {
    type: REMOVE_PLAYLIST,
    playlistId
  };
};

// Thunk actions
export const requestPlaylists = () => {
  return dispatch => PlaylistAPIUtil.fetchPlaylists().then(
    res => dispatch(receivePlaylists(res))
  );
};

export const requestPlaylist = id => {
  return dispatch => PlaylistAPIUtil.fetchPlaylist(id).then(
    res => dispatch(receivePlaylist(res))
  );
};

export const createPlaylist = playlist => {
  return dispatch => PlaylistAPIUtil.createPlaylist(playlist).then(
    res => dispatch(receivePlaylist(res))
  );
};

export const deletePlaylist = playlistId => {
  return dispatch => PlaylistAPIUtil.deletePlaylist(playlistId).then(
    res => dispatch(removePlaylist(res))
  );
};
