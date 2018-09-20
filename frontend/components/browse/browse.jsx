import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import BrowseNav from './browse_nav';
import ArtistContainer from '../util/artists/artist_container';
import AlbumContainer from '../util/albums/album_container';
import TrackContainer from '../util/tracks/track_container';
import PlaylistContainer from '../util/playlists/playlist_container';

const Browse = (props) => {
  return (
    <div className="browse-container">
      <Route exact path="/browse" render={() => <Redirect to="/browse/artists" />} />
      <Route path="/browse/:section" component={BrowseNav} />

      <div className="browse-content">
        <Route path="/browse/artists" render={() => {
            document.title = 'Browse - Artists';
            return (<ArtistContainer />)
          }}/>
        <Route path="/browse/albums" render={() => {
            document.title = 'Browse - Albums';
            return (<AlbumContainer />)
          }}/>
        <Route path="/browse/tracks" render={() => {
            document.title = 'Browse - Tracks';
            return (<TrackContainer />)
          }}/>
        <Route path="/browse/playlists" render={() => {
            document.title = 'Browse - Playlists';
            return (<PlaylistContainer />)
          }}/>
      </div>
    </div>
  );
};

export default Browse;
