import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import BrowseNav from './browse_nav';
import ArtistContainer from '../util/artists/artist_container';
import AlbumContainer from '../util/albums/album_container';
// import TrackIndex from '../util/track_index';
// import PlaylistIndex from '../util/playlist_index';

// <Route path="/browse/tracks" component={TrackIndex} />
// <Route path="/browse/playlists" component={PlaylistIndex} />

const Browse = (props) => {
  return (
    <div className="browse-container">
      <Route exact path="/browse" render={() => <Redirect to="/browse/artists" />} />

      <Route path="/browse/:section" component={BrowseNav} />
      <div className="browse-content">
        <Route path="/browse/artists" component={ArtistContainer} />
        <Route path="/browse/albums" component={AlbumContainer} />

      </div>
    </div>
  );
};

export default Browse;
