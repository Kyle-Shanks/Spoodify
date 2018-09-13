import React from 'react';

const ArtistIndexItem = (props) => {
  if(!props.artist) return null;
  return (
    <li>
      <div className="rela-block content-item artist">
        <img className="rela-block content-img" src={props.artist.photoUrl}/>
        <p className="rela-block content-primary-text">{props.artist.name}</p>
        <p className="rela-block content-secondary-text"></p>
      </div>
    </li>
  );
};

export default ArtistIndexItem;
