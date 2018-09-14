import React from 'react';
import { Link } from 'react-router-dom';

const AlbumIndexItem = (props) => {
  if(!props.album) return null;
  return (
    <li>
      <div className="rela-block content-item">
        <div className="rela-block img-container">
          <Link className="abs-center app-link content-play" to="/browse/albums">
            Play
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
