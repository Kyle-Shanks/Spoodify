import * as AlbumAPIUtil from '../util/album_api_util';

export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';

// Regular actions
const receiveAlbums = albums => {
  return {
    type: RECEIVE_ALBUMS,
    albums
  };
};

const receiveAlbum = album => {
  return {
    type: RECEIVE_ALBUM,
    album
  };
};

// Thunk actions
export const requestAlbums = ids => {
  return dispatch => AlbumAPIUtil.fetchAlbums(ids).then(
    res => dispatch(receiveAlbums(res))
  );
};

export const requestAlbum = id => {
  return dispatch => AlbumAPIUtil.fetchAlbum(id).then(
    res => dispatch(receiveAlbum(res))
  );
};
