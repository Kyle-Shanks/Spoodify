import React from 'react'
import { Link } from 'react-router-dom';

const BrowseNav = (props) => {
  return (
    <div className="content-nav">
      <ul>
        <li className="rela-inline">
          <Link to="/browse/artists"
            className={"rela-block app-link" + ((props.match.params.section === 'artists') ? ' active' : '')}>
            Artists
          </Link>
        </li>
        <li className="rela-inline">
          <Link to="/browse/albums"
            className={"rela-block app-link" + ((props.match.params.section === 'albums') ? ' active' : '')}>
            Albums
          </Link>
        </li>
        <li className="rela-inline">
          <Link to="/browse/tracks"
            className={"rela-block app-link" + ((props.match.params.section === 'tracks') ? ' active' : '')}>
            Tracks
          </Link>
        </li>
        <li className="rela-inline">
          <Link to="/browse/playlists"
            className={"rela-block app-link" + ((props.match.params.section === 'playlists') ? ' active' : '')}>
            Playlists
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default BrowseNav
