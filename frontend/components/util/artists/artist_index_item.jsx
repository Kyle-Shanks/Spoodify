import React from 'react';

const ArtistIndexItem = (props) => {
  if(!props.artist) return null;
  return (
    <li>
      <div className="rela-block content-item">
        <img className="rela-block content-img" src={props.artist.photoUrl}/>
        <p className="rela-block content-main-text">{props.artist.name}</p>
        <p className="rela-block content-secondary-text"></p>
      </div>
    </li>
  );
};

export default ArtistIndexItem;
