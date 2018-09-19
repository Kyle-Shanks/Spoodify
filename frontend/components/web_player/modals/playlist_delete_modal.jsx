import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistDeleteModal extends React.Component {
  constructor(props) {
    super(props);
    this.confirmDelete = this.confirmDelete.bind(this);
  }

  confirmDelete() {
    const playlistId = this.props.modalProps.playlistId;
    this.props.deletePlaylist(playlistId);
    this.props.closeModal();
  }

  render () {
    return (
      <div className="playlist-delete-modal">
        <h1 onClick={this.props.closeModal}>
          <div className="svg-container close-svg">
            <svg viewBox="0 0 200 200" className="rela-block svg">
              <path d="M 50 50 L 150 150" strokeWidth="8" />
              <path d="M 150 50 L 50 150" strokeWidth="8" />
            </svg>
          </div>
        </h1>
        <h1 className="rela-block modal-header">Do you really want to delete this playlist?</h1>
        <div className="rela-block modal-button-container">
          <button className="rela-inline button outline slim resizing" onClick={this.props.closeModal}>
            Cancel
          </button>
          <Link to="/browse/playlists" className="rela-inline">
            <button className="rela-inline button slim resizing" onClick={this.confirmDelete}>
              Delete
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default PlaylistDeleteModal;
