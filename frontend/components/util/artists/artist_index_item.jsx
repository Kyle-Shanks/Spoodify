import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { playAudio, setTrackQueue, setCurrentTrack, getQueuePos } from '../../../actions/ui_actions';
import { requestTrack } from '../../../actions/track_actions';

class ArtistIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay(e) {
    if (this.props.artist.track_ids) {
      this.props.requestTrack(this.props.artist.track_ids[0]);
      this.props.setTrackQueue(this.props.artist.track_ids);
      this.props.setCurrentTrack(this.props.artist.track_ids[0]);
      this.props.playAudio();
      this.props.getQueuePos();
    }
    e.stopPropagation();
    e.preventDefault();
  }

  render () {
    if(!this.props.artist) return null;
    return (
      <li>
        <div className="rela-block content-item artist">
          <Link className="rela-block app-link img-container" to={`/artists/${this.props.artist.id}`}>
            <div className="abs-center app-link content-play">
              <div className="rela-inline svg-container item" onClick={this.handlePlay}>
                <svg viewBox="0 0 300 300" className="rela-block svg item">
                  <circle cx="150" cy="150" r="100" strokeWidth="3"/>
                  <path d="M 110 95 L 110 205 Q 110 210 116 209 L 208 153 Q 210 150 208 147 L 116 92 Q 110 90 110 95 Z" strokeWidth="0"/>
                </svg>
              </div>
            </div>
            <img className="rela-block content-img" src={this.props.artist.photoUrl}/>
          </Link>
          <Link className="rela-inline app-link" to={`/artists/${this.props.artist.id}`}>
            <p className="rela-inline content-primary-text">{this.props.artist.name}</p>
          </Link>
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

export default connect(null,mapDispatchToProps)(ArtistIndexItem);
