import React from 'react';
import { Link } from 'react-router-dom';

const Search = (props) => {
  return (
    <div className="search-container">
      <div className="rela-block modal-input-container">
        <p>Search for an Artist, Song, Album, Playlist, Podcast, or Episode</p>
        <input className="rela-block modal-input" type="text" placeholder="Start typing..."/>
      </div>
    </div>
  );
};

export default Search;
