import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Browse from '../browse/browse';
import Search from '../search/search';
import Collection from '../collection/collection';
import SidebarContainer from '../sidebar/sidebar_container';

const WebPlayer = (props) => {
  return (
    <div className="web-player-container">
      <div className="top-container">
        <Route path="/:section" component={SidebarContainer} />
        <div className="main-content-container">
          <Route path="/browse" component={ Browse } />
          <Route path="/search" component={ Search } />
          <Route path="/collection" component={ Collection } />
        </div>
      </div>
      <div className="audio-player-container">
        <p>Audio player goes here</p>
      </div>
    </div>
  )
}

export default withRouter(WebPlayer);
