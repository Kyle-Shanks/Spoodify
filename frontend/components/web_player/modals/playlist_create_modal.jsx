import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistCreateModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlistName: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitInfo = this.submitInfo.bind(this);
    this.close = this.close.bind(this);
  }

  handleChange(e) {
    this.setState({playlistName: e.target.value});
  }

  submitInfo() {
    if (this.state.playlistName) {
      this.props.createPlaylist({ title: this.state.playlistName, user_id: this.props.currentUserId });
      this.close();
    }
  }

  close() {
    this.setState({ playlistName: '' }, this.props.closeModal);
  }

  render () {
    return (
      <div className="playlist-create-modal">
        <h1 onClick={this.close}>
          <div className="svg-container close-svg">
            <svg viewBox="0 0 200 200" className="rela-block svg">
              <path d="M 50 50 L 150 150" strokeWidth="8" />
              <path d="M 150 50 L 50 150" strokeWidth="8" />
            </svg>
          </div>
        </h1>
        <h1 className="rela-block modal-header">Create new Playlist</h1>
        <div className="rela-block modal-input-container">
          <p>Playlist Name</p>
          <input className="rela-block modal-input" type="text" value={this.state.playlistName}
            placeholder="Start typing..." onChange={this.handleChange}/>
        </div>
        <div className="rela-block modal-button-container">
          <button className="rela-inline button outline slim resizing" onClick={this.close}>
            Cancel
          </button>
          <Link className="rela-inline" to="/browse/playlists">
            <button className="rela-inline button slim resizing" onClick={this.submitInfo}>
              Create
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default PlaylistCreateModal
