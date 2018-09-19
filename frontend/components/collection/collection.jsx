import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import CollectionNav from './collection_nav';
import ArtistIndex from '../util/artists/artist_container';
import AlbumIndex from '../util/albums/album_container';
import TrackIndex from '../util/tracks/track_container';
import PlaylistIndex from '../util/playlists/playlist_container';

const Collection = (props) => {
  return (
    <div className="collection-container">
      <Route exact path="/collection" render={() => <Redirect to="/collection/artists" />} />
      <Route path="/collection/:section" component={CollectionNav} />

      <div className="collection-content">
        <Route path="/collection/artists" render={
          () => <ArtistIndex artistIds={props.currentUser.followed_artist_ids} />
        }/>
        <Route path="/collection/tracks" render={
          () => <TrackIndex trackIds={props.currentUser.liked_track_ids} />
        }/>
        <Route path="/collection/albums" render={
          () => <AlbumIndex albumIds={props.currentUser.liked_album_ids} />
        }/>
        <Route path="/collection/playlists" render={
          () => <PlaylistIndex playlistIds={props.currentUser.followed_playlist_ids} />
        }/>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.currentUserId],
});

export default connect(mapStateToProps)(Collection);
