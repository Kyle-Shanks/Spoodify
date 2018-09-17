import React from 'react'
import PropTypes from 'prop-types'
import ArtistIndex from '../util/artists/artist_container';
import AlbumIndex from '../util/albums/album_container';
import TrackIndex from '../util/tracks/track_container';
import PlaylistIndex from '../util/playlists/playlist_container';
import { withRouter, Route, Link } from 'react-router-dom';

class SearchResults extends React.Component {
  render () {
    const section = this.props.match.params.section;
    return (
      <div className="search-results">
        <div className="rela-block content-nav">
          <ul className="content-nav-list">
            <li className="rela-inline">
              <Link to={`/search/artists`}
                className={"rela-block app-link" + ((section === 'artists') ? ' active' : '')}>
                Artists
              </Link>
            </li>
            <li className="rela-inline">
              <Link to={`/search/tracks`}
                className={"rela-block app-link" + ((section === 'tracks') ? ' active' : '')}>
                Tracks
              </Link>
            </li>
            <li className="rela-inline">
              <Link to={`/search/albums`}
                className={"rela-block app-link" + ((section === 'albums') ? ' active' : '')}>
                Albums
              </Link>
            </li>
            <li className="rela-inline">
              <Link to={`/search/playlists`}
                className={"rela-block app-link" + ((section === 'playlists') ? ' active' : '')}>
                Playlists
              </Link>
            </li>
          </ul>
        </div>

        <div className="rela-block search-section">
          <Route path="/search/artists" render={
              () => <ArtistIndex searchTerm={this.props.searchTerm} />
          }/>
        <Route path="/search/tracks" render={
              () => <TrackIndex searchTerm={this.props.searchTerm} />
          }/>
        <Route path="/search/albums" render={
              () => <AlbumIndex searchTerm={this.props.searchTerm} />
          }/>
        <Route path="/search/playlists" render={
              () => <PlaylistIndex searchTerm={this.props.searchTerm} />
          }/>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchResults);
