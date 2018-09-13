import React from 'react';

const AlbumIndexItem = (props) => {
  if(!props.album) return null;
  return (
    <li>
      <div className="rela-block content-item">
        <img className="rela-block content-img" src={props.album.photoUrl}/>
        <p className="rela-block content-primary-text">{props.album.title}</p>
        <p className="rela-block content-secondary-text">{props.album.artistName}</p>
      </div>
    </li>
  );
};

export default AlbumIndexItem;
