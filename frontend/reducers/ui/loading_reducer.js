import {
  START_ARTISTS_LOADING, STOP_ARTISTS_LOADING,
  START_ALBUMS_LOADING, STOP_ALBUMS_LOADING,
  START_TRACKS_LOADING, STOP_TRACKS_LOADING,
  START_PLAYLISTS_LOADING, STOP_PLAYLISTS_LOADING
} from '../../actions/ui_actions';

const defaultState = {
  artists: false,
  albums: false,
  tracks: false,
  playlists: false,
}

const loadingReducer = ( state = defaultState, action ) => {
  Object.freeze(state);
  switch (action.type) {
    case START_ARTISTS_LOADING:
      return Object.assign({}, state, { artists: true });
    case STOP_ARTISTS_LOADING:
      return Object.assign({}, state, { artists: false });
    case START_ALBUMS_LOADING:
      return Object.assign({}, state, { albums: true });
    case STOP_ALBUMS_LOADING:
      return Object.assign({}, state, { albums: false });
    case START_TRACKS_LOADING:
      return Object.assign({}, state, { tracks: true });
    case STOP_TRACKS_LOADING:
      return Object.assign({}, state, { tracks: false });
    case START_PLAYLISTS_LOADING:
      return Object.assign({}, state, { playlists: true });
    case STOP_PLAYLISTS_LOADING:
      return Object.assign({}, state, { playlists: false });
    default:
      return state;
  }
};

export default loadingReducer;
