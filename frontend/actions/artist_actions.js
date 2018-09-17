import * as ArtistAPIUtil from '../util/artist_api_util';

export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS';
export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';

// Regular actions
const receiveArtists = artists => {
  return {
    type: RECEIVE_ARTISTS,
    artists
  };
};

const receiveArtist = artist => {
  return {
    type: RECEIVE_ARTIST,
    artist
  };
};

// Thunk actions
export const requestArtists = props => {
  return dispatch => ArtistAPIUtil.fetchArtists(props).then(
    res => dispatch(receiveArtists(res))
  );
};

export const requestArtist = id => {
  return dispatch => ArtistAPIUtil.fetchArtist(id).then(
    res => dispatch(receiveArtist(res))
  );
};
