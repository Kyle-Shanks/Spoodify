import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Browse from '../browse/browse';
import Search from '../search/search';
import Collection from '../collection/collection';
import SidebarContainer from '../sidebar/sidebar_container';
import ModalContainer from './modal_container';
import DropdownContainer from './dropdown_container';
import PlaylistShow from '../util/playlists/playlist_show_container';
import AlbumShow from '../util/albums/album_show_container';
import ArtistShow from '../util/artists/artist_show_container';
import { closeDropdown } from '../../actions/ui_actions';

const WebPlayer = (props) => {
  console.log(props);
  return (
    <div className="web-player-container" onClick={props.closeDropdown}>
      <div className="top-container">
        <div className="main-background"></div>
        <Route path="/:section" component={ SidebarContainer } />
        <div className="main-content-container">
          <Route path="/browse" component={ Browse } />
          <Route path="/search" component={ Search } />
          <Route path="/collection" component={ Collection } />

          <Route path="/playlists/:playlistId" component={ PlaylistShow } />
          <Route path="/albums/:albumId" component={ AlbumShow } />
          <Route path="/artists/:artistId" component={ ArtistShow } />
        </div>
      </div>
      <div className="audio-player-container">
        <p>Audio player goes here</p>
      </div>

      <DropdownContainer />
      <ModalContainer />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  closeDropdown: () => dispatch(closeDropdown()),
});

export default connect(null,mapDispatchToProps)(WebPlayer);
