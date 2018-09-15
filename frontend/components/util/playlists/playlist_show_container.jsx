import React from 'react';
import { connect } from 'react-redux';
import { requestPlaylist, deletePlaylist } from '../../../actions/playlist_actions';
import { Link } from 'react-router-dom';
import TrackIndex from '../tracks/track_container';

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.requestPlaylist(this.props.match.params.playlistId);
  }

  componentWillReceiveProps(nextProps) {
    if ( !this.props.playlist || this.props.playlist.id !== parseInt(nextProps.match.params.playlistId) ) {
      this.props.requestPlaylist(nextProps.match.params.playlistId);
    }
  }

  handleDelete() {
    this.props.deletePlaylist(this.props.playlist.id);
  }

  render () {
    if (!this.props.playlist) return (
      <p>Playlist not found :/</p>
    );

    const ids = this.props.playlist.track_ids.length ? this.props.playlist.track_ids : [-1];
    return (
      <div className="rela-block playlist-show">
        <div className="rela-block show-item-tracks">
          <TrackIndex trackIds={ids}/>
        </div>
        <div className="show-item-info">
          <div className="show-img-container playlist">
            <div className="rela-block playlist-img">
              <div className="abs-center playlist-title">{this.props.playlist.title}</div>
            </div>
          </div>
          <h2 className="rela-block content-primary-text">{this.props.playlist.title}</h2>
          <h5 className="rela-block content-secondary-text">{this.props.playlist.user.username}</h5>
          <h5 className="rela-block content-secondary-text">{this.props.playlist.track_ids.length} Songs</h5>

          <div className="rela-block show-button-container">
            <button className="rela-inline button slim resizing">Play</button>
            <Link to="/browse/playlists" className="rela-inline">
              <button className="rela-inline button outline slim resizing" onClick={this.handleDelete}>
                Delete
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state,ownProps) => ({
  playlist: state.entities.playlists[ownProps.match.params.playlistId],
});

const mapDispatchToProps = dispatch => ({
  requestPlaylist: id => dispatch(requestPlaylist(id)),
  deletePlaylist: id => dispatch(deletePlaylist(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShow);
