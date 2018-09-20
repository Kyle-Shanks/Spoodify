import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import CollectionNav from './collection_nav';
import ArtistIndex from '../util/artists/artist_container';
import AlbumIndex from '../util/albums/album_container';
import TrackIndex from '../util/tracks/track_container';
import PlaylistIndex from '../util/playlists/playlist_container';

const Collection = (props) => {
  const artistIds = props.currentUser.followed_artist_ids.length ? props.currentUser.followed_artist_ids : [-1];
  const playlistIds = props.currentUser.followed_playlist_ids.length ? props.currentUser.followed_playlist_ids : [-1];
  const albumIds = props.currentUser.liked_album_ids.length ? props.currentUser.liked_album_ids : [-1];
  const trackIds = props.currentUser.liked_track_ids.length ? props.currentUser.liked_track_ids : [-1];
  return (
    <div className="collection-container">
      <Route exact path="/collection" render={() => <Redirect to="/collection/artists" />} />
      <Route path="/collection/:section" component={CollectionNav} />

      <div className="collection-content">
        <Route path="/collection/artists"
          render={() => {
            document.title = 'Your Library - Artists';
            return (<ArtistIndex artistIds={artistIds} />);
          }}/>
        <Route path="/collection/tracks"
          render={() => {
            document.title = 'Your Library - Tracks';
            return (<TrackIndex trackIds={trackIds} />);
          }}/>
        <Route path="/collection/albums"
          render={() => {
            document.title = 'Your Library - Albums';
            return (<AlbumIndex albumIds={albumIds} />);
          }}/>
        <Route path="/collection/playlists"
          render={() => {
            document.title = 'Your Library - Playlists';
            return (<PlaylistIndex playlistIds={playlistIds} />);
          }}/>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.currentUserId],
});

export default connect(mapStateToProps)(Collection);
