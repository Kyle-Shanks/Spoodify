import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { login, logout } from './actions/session_actions';
import { requestPlaylists } from './actions/playlist_actions';
import { createPlaylistTrack } from './actions/playlist_track_actions';

window.login = login; // for testing
window.logout = logout; // for testing

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { currentUserId: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.getState = store.getState; // for testing
  window.dispatch = store.dispatch; // for testing
  window.createPlaylistTrack = createPlaylistTrack; // for testing
  window.requestPlaylists = requestPlaylists; // for testing
  ReactDOM.render(<Root store={store}/>, root);
});
