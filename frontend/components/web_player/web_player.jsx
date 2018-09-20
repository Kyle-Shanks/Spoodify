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
import AudioPlayer from './audio_player/audio_player';
import Queue from './audio_player/queue';
import { closeDropdown } from '../../actions/ui_actions';

const WebPlayer = (props) => {
  let colorClass;
  switch (props.match.url) {
    case '/browse': colorClass = ' blue'; break;
    case '/artists': colorClass = ' black'; break;
    case '/albums': colorClass = ' green'; break;
    case '/playlists': colorClass = ' red'; break;
    case '/search': colorClass = ' darker'; break;
    case '/collection': colorClass = ' grey'; break;
    case '/queue': colorClass = ' purple'; break;
    default: colorClass = ' blue';
  }

  return (
    <div className="web-player-container"
      onClick={() => {if(props.dropdownOpen) props.closeDropdown();}}>
      <div className="top-container">
        <div className={"main-background" + colorClass}></div>
        <Route path="/:section" component={ SidebarContainer } />
        <div className="main-content-container">
          <Route path="/browse" component={ Browse } />
          <Route path="/search" component={ Search } />
          <Route path="/collection" component={ Collection } />

          <Route path="/playlists/:playlistId" component={ PlaylistShow } />
          <Route path="/albums/:albumId" component={ AlbumShow } />
          <Route path="/artists/:artistId" component={ ArtistShow } />
          <Route path="/queue" component={Queue} />
        </div>
      </div>
      <div className="audio-player-container">
        <AudioPlayer />
      </div>

      <DropdownContainer />
      <ModalContainer />
    </div>
  )
}

const mapStateToProps = state => ({
  dropdownOpen: state.ui.dropdown.isOpen,
});
const mapDispatchToProps = dispatch => ({
  closeDropdown: () => dispatch(closeDropdown()),
});

export default connect(mapStateToProps,mapDispatchToProps)(WebPlayer);
