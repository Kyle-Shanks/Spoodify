import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { playAudio, setTrackQueue, setCurrentTrack, getQueuePos } from '../../../actions/ui_actions';
import { requestTrack } from '../../../actions/track_actions';

class PlaylistIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay(e) {
    if (this.props.playlist.track_ids) {
      this.props.requestTrack(this.props.playlist.track_ids[0]);
      this.props.setTrackQueue(this.props.playlist.track_ids);
      this.props.setCurrentTrack(this.props.playlist.track_ids[0]);
      this.props.playAudio();
      this.props.getQueuePos();
    }
    e.stopPropagation();
    e.preventDefault();
  }

  render () {
    if(!this.props.playlist) return null;
    return (
      <li className="index-item">
        <div className="rela-block content-item">
          <Link className="rela-block app-link img-container playlist-img" to={`/playlists/${this.props.playlist.id}`}>
            <div className="abs-center content-play">
              <div className="rela-inline svg-container item" onClick={this.handlePlay}>
                <svg viewBox="0 0 300 300" className="rela-block svg item">
                  <circle cx="150" cy="150" r="100" strokeWidth="3"/>
                  <path d="M 110 95 L 110 205 Q 110 210 116 209 L 208 153 Q 210 150 208 147 L 116 92 Q 110 90 110 95 Z" strokeWidth="0"/>
                </svg>
              </div>
            </div>
            <div className="abs-center playlist-title">{this.props.playlist.title}</div>
          </Link>
          <Link className="rela-inline app-link" to={`/playlists/${this.props.playlist.id}`}>
            <p className="rela-inline content-primary-text">{this.props.playlist.title}</p>
          </Link>
          <p className="rela-block content-secondary-text">{this.props.playlist.user.username}</p>
        </div>
      </li>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  playAudio: () => dispatch(playAudio()),
  setTrackQueue: arr => dispatch(setTrackQueue(arr)),
  setCurrentTrack: id => dispatch(setCurrentTrack(id)),
  getQueuePos: () => dispatch(getQueuePos()),
  requestTrack: id => dispatch(requestTrack(id)),
});

export default connect(null,mapDispatchToProps)(PlaylistIndexItem);
