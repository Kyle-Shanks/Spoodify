import React from 'react';

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
        <h1 onClick={this.close}>X</h1>
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
          <button className="rela-inline button slim resizing" onClick={this.submitInfo}>
            Create
          </button>
        </div>
      </div>
    );
  }
}

export default PlaylistCreateModal
