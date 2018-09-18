import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { playAudio, pauseAudio, nextTrack, prevTrack, clearPlayer } from '../../../actions/ui_actions';
import { requestTrack } from '../../../actions/track_actions';

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentTrack: null };
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const audio = document.getElementById('audio');
    if ( nextProps.currentTrack && ((!audio.src) || !audio.src.includes(nextProps.currentTrack.src))) {
      audio.src = nextProps.currentTrack.src;
      this.setState({ currentTrack: nextProps.currentTrack });
      if(nextProps.isPlaying) audio.play();
    }
    if (nextProps.isPlaying && !this.props.isPlaying) audio.play();
    if (!nextProps.isPlaying && this.props.isPlaying) audio.pause();
  }

  handleNext(e) {
    if (this.props.nextTrackId) {
      this.props.next(this.props.nextTrackId);
    } else {
      this.setState({ currentTrack: null });
      this.props.clearPlayer();
    }
  }
  handlePrev(e) {
    if (this.props.prevTrackId) {
      this.props.prev(this.props.prevTrackId);
    } else {
      this.setState({ currentTrack: null });
      this.props.clearPlayer();
    }
  }

  render () {
    const audio = document.getElementById('audio');
    let info = { imgSrc: '', title: '', albumId: '', artist: '', artistId: '' };
    if (this.state.currentTrack) {
      info = {
        imgSrc: this.state.currentTrack.artwork,
        title: this.state.currentTrack.title,
        albumId: this.state.currentTrack.album.id,
        artist: this.state.currentTrack.artist.name,
        artistId: this.state.currentTrack.artist.id,
      };
    }

    let svg;
    if (this.props.isPlaying) {
      svg = (
        <svg viewBox="0 0 300 300" className="rela-block svg play-pause" onClick={this.props.pause}>
          <circle cx="150" cy="150" r="100"/>
          <rect x="107" y="105" width="25" height="90" rx="8" ry="8" />
          <rect x="168" y="105" width="25" height="90" rx="8" ry="8" />
        </svg>
      );
    } else {
      svg = (
        <svg viewBox="0 0 300 300" className="rela-block svg play-pause" onClick={this.props.play}>
          <circle cx="150" cy="150" r="100"/>
          <path d="M 115 105 L 115 195 Q 115 200 121 199 L 203 153
                   Q 205 150 203 147 L 121 102 Q 115 100 115 105 Z"/>
        </svg>
      );
    }

    return (
      <div className="audio-player">
        <div className="flex-parent player-controls-container">
          <div className="player-info">
            <div className="rela-inline player-artwork">
              <Link to={`/albums/${info.albumId}`}>
                <img src={info.imgSrc}/>
              </Link>
            </div>
            <div className="rela-inline player-info-text">
              <p>
                <Link className="border" to={`/albums/${info.albumId}`}>
                  {info.title}
                </Link>
              </p>
              <p className="small-text">
                <Link className="border" to={`/artists/${info.artistId}`}>
                  {info.artist}
                </Link>
              </p>
            </div>
          </div>
          <div className="flex player-controls">
            <div className="rela-block control-svg-container">
              <div className="rela-inline svg-container">
                <svg viewBox="0 0 300 300" className="rela-block svg player" onClick={this.handlePrev}>
                  <path d="M 190 105 L 190 195 Q 190 200 184 199 L 97 153
                           Q 95 150 97 147 L 184 102 Q 190 100 190 105 Z" strokeWidth="0"/>
                  <rect x="65" y="105" width="25" height="90" rx="8" ry="8" strokeWidth="0"/>
                </svg>
              </div>
              <div className="rela-inline svg-container play-pause">{svg}</div>
              <div className="rela-inline svg-container">
                <svg viewBox="0 0 300 300" className="rela-block svg player" onClick={this.handleNext}>
                  <path d="M 115 105 L 115 195 Q 115 200 121 199 L 203 153
                           Q 205 150 203 147 L 121 102 Q 115 100 115 105 Z" strokeWidth="0"/>
                  <rect x="210" y="105" width="25" height="90" rx="8" ry="8" strokeWidth="0"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="player-alt-controls"></div>
        </div>
        <audio id="audio" onEnded={this.handleNext}></audio>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentTrack: state.entities.tracks[state.ui.audioPlayer.currentTrackId],
  nextTrackId: state.ui.audioPlayer.queue[state.ui.audioPlayer.queuePos + 1],
  prevTrackId: state.ui.audioPlayer.queue[state.ui.audioPlayer.queuePos - 1],
  isPlaying: state.ui.audioPlayer.isPlaying,
});

const mapDispatchToProps = dispatch => ({
  play: () => dispatch(playAudio()),
  pause: () => dispatch(pauseAudio()),
  clearPlayer: () => dispatch(clearPlayer()),
  next: id => {
    dispatch(nextTrack());
    if (id) dispatch(requestTrack(id));
  },
  prev: id => {
    dispatch(prevTrack());
    if (id) dispatch(requestTrack(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);
