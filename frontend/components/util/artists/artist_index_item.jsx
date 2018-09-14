import React from 'react';
import { Link } from 'react-router-dom';

const ArtistIndexItem = (props) => {
  if(!props.artist) return null;
  return (
    <li>
      <div className="rela-block content-item artist">
        <div className="rela-block img-container">
          <Link className="abs-center app-link content-play" to="/browse/artists">
            Play
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
