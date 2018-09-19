import React from 'react';
import { connect } from 'react-redux';
import { requestPlaylist } from '../../../actions/playlist_actions';
import { openModal, setModalComponent, setModalProps } from '../../../actions/ui_actions';
import { Link } from 'react-router-dom';
import TrackIndex from '../tracks/track_container';
import { playAudio, setTrackQueue, setCurrentTrack, getQueuePos } from '../../../actions/ui_actions';
import { createFollow, deleteFollow } from '../../../actions/follow_actions';

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
  }

  componentDidMount() {
    this.props.requestPlaylist(this.props.match.params.playlistId);
  }

  componentWillReceiveProps(nextProps) {
    if ( !this.props.playlist || this.props.playlist.id !== parseInt(nextProps.match.params.playlistId) ) {
      this.props.requestPlaylist(nextProps.match.params.playlistId);
    }
  }

  handlePlay(e) {
    if (this.props.playlist.track_ids) {
      this.props.setTrackQueue(this.props.playlist.track_ids);
      this.props.setCurrentTrack(this.props.playlist.track_ids[0]);
      this.props.playAudio();
      this.props.getQueuePos();
    }
  }

  handleFollow(e) {
    const following = this.props.currentUser.followed_playlist_ids.includes(this.props.playlist.id);
    const follow = {
      user_id: this.props.currentUser.id,
      followable_id: this.props.playlist.id,
      followable_type: 'Playlist'
    };

    following ? this.props.deleteFollow(follow) : this.props.createFollow(follow);
  }

  render () {
    if (!this.props.playlist) return (
      <p>Playlist not found :/</p>
    );

    let deleteButton;
    if (this.props.currentUser.id === this.props.playlist.user.id) {
      deleteButton = (
        <button className="rela-inline button outline slim resizing"
          onClick={() => {
            this.props.openModal();
            this.props.setModalComponent('delete');
            this.props.setModalProps({ playlistId: this.props.playlist.id })
          }}>
          Delete
        </button>
      );
    } else {
      deleteButton = '';
    }

    const ids = this.props.playlist.track_ids.length ? this.props.playlist.track_ids : [-1];
    return (
      <div className="rela-block playlist-show">
        <div className="rela-block show-item-tracks">
          <TrackIndex trackIds={ids} playlistId={this.props.playlist.id}/>
        </div>
        <div className="show-item-info">
          <div className="show-img-container playlist">
            <div className="rela-block playlist-img">
              <div className="abs-center playlist-title">{this.props.playlist.title}</div>
            </div>
          </div>
          <h2 className="rela-block content-primary-text">{this.props.playlist.title}</h2>
          <h5 className="rela-block content-secondary-text">{this.props.playlist.user.username}</h5>
          <h5 className="rela-block content-secondary-text">{this.props.playlist.track_ids.length} Song(s)</h5>

          <div className="rela-block show-button-container">
            <button className="rela-inline button slim resizing"
              onClick={this.handlePlay}>
              Play
            </button>
            <button className="rela-inline button slim outline resizing"
              onClick={this.handleFollow}>
              {this.props.currentUser.followed_playlist_ids.includes(this.props.playlist.id) ? 'Unfollow' : 'Follow'}
            </button>
            {deleteButton}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state,ownProps) => ({
  playlist: state.entities.playlists[ownProps.match.params.playlistId],
  currentUser: state.entities.users[state.session.currentUserId],
});

const mapDispatchToProps = dispatch => ({
  requestPlaylist: id => dispatch(requestPlaylist(id)),
  openModal: () => dispatch(openModal()),
  setModalComponent: comp => dispatch(setModalComponent(comp)),
  setModalProps: props => dispatch(setModalProps(props)),
  playAudio: () => dispatch(playAudio()),
  setTrackQueue: arr => dispatch(setTrackQueue(arr)),
  setCurrentTrack: id => dispatch(setCurrentTrack(id)),
  getQueuePos: () => dispatch(getQueuePos()),
  createFollow: follow => dispatch(createFollow(follow)),
  deleteFollow: follow => dispatch(deleteFollow(follow)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShow);
