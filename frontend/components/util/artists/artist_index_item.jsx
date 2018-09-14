import React from 'react';
import { Link } from 'react-router-dom';

const ArtistIndexItem = (props) => {
  if(!props.artist) return null;
  return (
    <li>
      <div className="rela-block content-item artist">
        <div className="rela-block img-container">
          <Link className="abs-center app-link content-play" to="/browse/artists">
            <div className="rela-inline svg-container item">
              <svg viewBox="0 0 300 300" className="rela-block svg item">
                <circle cx="150" cy="150" r="100" strokeWidth="3"/>
                <path d="M 110 95 L 110 205 Q 110 210 116 209 L 208 153 Q 210 150 208 147 L 116 92 Q 110 90 110 95 Z"/>
              </svg>
            </div>
          </Link>
          <img className="rela-block content-img" src={props.artist.photoUrl}/>
        </div>
        <p className="rela-block content-primary-text">{props.artist.name}</p>
        <p className="rela-block content-secondary-text"></p>
      </div>
    </li>
  );
};

export default ArtistIndexItem;
