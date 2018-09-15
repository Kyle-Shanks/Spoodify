import React from 'react';
import { Link } from 'react-router-dom';

const AlbumIndexItem = (props) => {
  if(!props.album) return null;
  return (
    <li>
      <div className="rela-block content-item">
        <div className="rela-block img-container">
          <Link className="abs-center app-link content-play" to={`/albums/${props.album.id}`}>
            <div className="rela-inline svg-container item">
              <svg viewBox="0 0 300 300" className="rela-block svg item">
                <circle cx="150" cy="150" r="100" strokeWidth="3"/>
                <path d="M 110 95 L 110 205 Q 110 210 116 209 L 208 153 Q 210 150 208 147 L 116 92 Q 110 90 110 95 Z"/>
              </svg>
            </div>
          </Link>
          <img className="rela-block content-img" src={props.album.photoUrl}/>
        </div>
        <p className="rela-block content-primary-text">{props.album.title}</p>
        <p className="rela-block content-secondary-text">{props.album.artistName}</p>
      </div>
    </li>
  );
};

export default AlbumIndexItem;
