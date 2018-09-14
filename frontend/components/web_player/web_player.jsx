import React from 'react';
import { Route } from 'react-router-dom';
import Browse from '../browse/browse';
import Search from '../search/search';
import Collection from '../collection/collection';
import SidebarContainer from '../sidebar/sidebar_container';
import PlaylistModalContainer from './playlist_modal_container';

const WebPlayer = (props) => {
  return (
    <div className="web-player-container">
      <div className="top-container">
        <Route path="/:section" component={ SidebarContainer } />
        <div className="main-content-container">
          <div onClick={props.openModal}>Open Modal</div>
          <Route path="/browse" component={ Browse } />
          <Route path="/search" component={ Search } />
          <Route path="/collection" component={ Collection } />
        </div>
      </div>
      <div className="audio-player-container">
        <p>Audio player goes here</p>
      </div>

      <PlaylistModalContainer closeModal={props.closeModal} isOpen={props.modalOpen}/>
    </div>
  )
}

export default WebPlayer;
