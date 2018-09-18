import React from 'react';
import { connect } from 'react-redux';

class AudioPlayer extends React.Component {
  componentDidMount() {
    const audio = document.getElementById('audio');
    if (this.props.currentTrack) {
      audio.src = this.props.currentTrack.src
    }
    if (this.props.isPlaying) audio.play();
  }

  componentWillReceiveProps(nextProps) {
    const audio = document.getElementById('audio');
    if ( nextProps.currentTrack && ((!audio.src) || !audio.src.includes(nextProps.currentTrack.src))) {
      audio.src = nextProps.currentTrack.src;
      if(nextProps.isPlaying) audio.play();
    }
    if (nextProps.isPlaying && !this.props.isPlaying) audio.play();
    if (!nextProps.isPlaying && this.props.isPlaying) audio.pause();
  }

  render () {
    return (
      <div className="audio-player">
        <audio id="audio"></audio>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentTrack: state.entities.tracks[state.ui.audioPlayer.currentTrackId],
  isPlaying: state.ui.audioPlayer.isPlaying
});

export default connect(mapStateToProps)(AudioPlayer);
