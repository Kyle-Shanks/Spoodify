import React from 'react';
import PlaylistSelectContainer from '../../util/playlists/playlist_select_container';

const PlaylistAddModal = (props) => {
  return (
    <div className="playlist-add-modal">
      <h1 onClick={props.closeModal}>
        <div className="svg-container close-svg">
          <svg viewBox="0 0 200 200" className="rela-block svg">
            <path d="M 50 50 L 150 150" strokeWidth="8" />
            <path d="M 150 50 L 50 150" strokeWidth="8" />
          </svg>
        </div>
      </h1>
      <h1 className="rela-block modal-header">Add To Playlist</h1>
      <PlaylistSelectContainer />
    </div>
  );
};

export default PlaylistAddModal;
