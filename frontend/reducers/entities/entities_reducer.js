import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import artistsReducer from './artists_reducer';
import albumsReducer from './albums_reducer';
import tracksReducer from './tracks_reducer';
import playlistsReducer from './playlists_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  artists: artistsReducer,
  albums: albumsReducer,
  tracks: tracksReducer,
  playlists: playlistsReducer
});

export default entitiesReducer;
