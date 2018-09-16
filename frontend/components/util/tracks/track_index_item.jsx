import React from 'react';
import { Link } from 'react-router-dom';

const TrackIndexItem = (props) => {
  if(!props.track) return null;
  return (
    <li>
      <div className="rela-block flex-parent track-item">
        <div className="track-icon"></div>
        <div className="flex track-info">
          <p className="rela-block">{props.track.title}</p>
          <p className="rela-block content-secondary-text">
            <Link className="app-link border" to={`/artists/${props.track.artist.id}`}>{props.track.artist.name}</Link>
            <span className="spacing-m">•</span>
            <Link className="app-link border" to={`/albums/${props.track.album.id}`}>{props.track.album.title}</Link>
          </p>
        </div>
        <div className="track-duration">0<span className="spacing-s">:</span>00</div>
      </div>
    </li>
  );
};

export default TrackIndexItem;
