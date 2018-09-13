import React from 'react';
import { Route } from 'react-router-dom';
import BrowseNav from './browse_nav';
import ArtistIndex from '../util/artists/artist_container';
// import AlbumIndex from '../util/album_index';
// import TrackIndex from '../util/track_index';
// import PlaylistIndex from '../util/playlist_index';

// <Route path="/browse/albums" component={AlbumIndex} />
// <Route path="/browse/tracks" component={TrackIndex} />
// <Route path="/browse/playlists" component={PlaylistIndex} />

const Browse = (props) => {
  return (
    <div className="browse-container">
      <Route path="/browse/:section" component={BrowseNav} />
      <div className="browse-content">
        <Route path="/browse/artists" component={ArtistIndex} />

      </div>
    </div>
  );
};

export default Browse;
