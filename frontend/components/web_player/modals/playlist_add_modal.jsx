import React from 'react';
import PlaylistSelectContainer from '../../util/playlists/playlist_select_container';

const PlaylistAddModal = (props) => {
  return (
    <div className="playlist-add-modal">
      <h1 onClick={props.closeModal}>X</h1>
      <h1 className="rela-block modal-header">Add To Playlist</h1>
      <PlaylistSelectContainer />
    </div>
  );
};

export default PlaylistAddModal;
