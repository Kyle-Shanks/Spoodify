import React from 'react';
import { Link } from 'react-router-dom';

const PlaylistIndexItem = (props) => {
  if(!props.playlist) return null;
  return (
    <li>
      <div className="rela-block content-item">
        <div className="rela-block img-container playlist-img">
          <Link className="abs-center app-link content-play" to="/browse/playlists">
            Play
          </Link>
          <div className="abs-center playlist-title">{props.playlist.title}</div>
        </div>
        <p className="rela-block content-primary-text">{props.playlist.title}</p>
        <p className="rela-block content-secondary-text">{props.playlist.user.username}</p>
      </div>
    </li>
  );
};

export default PlaylistIndexItem;
