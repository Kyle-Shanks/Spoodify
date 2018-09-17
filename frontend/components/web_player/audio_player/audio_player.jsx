import React from 'react';
import { connect } from 'react-redux';

class AudioPlayer extends React.Component {
  componentDidMount() {
    const audio = document.getElementById('audio');
    if (this.props.currentTrack) {
      audio.src = this.props.currentTrack.src
    }
    if (this.props.isPlaying) {
      console.log('banana bread');
      console.log(audio);
      console.log(audio.currentSrc);
      audio.play();
    }
  }

  componentWillReceiveProps(nextProps) {
    const audio = document.getElementById('audio');
    if ( nextProps.currentTrack &&
        ((!this.props.currentTrack) || nextProps.currentTrack.id !== this.props.currentTrack.id)) {
      audio.src = nextProps.currentTrack.src
    }
    nextProps.isPlaying ? audio.play() : audio.pause();
  }

  render () {
    console.log(this.props);
    console.log(document.getElementById('audio'));
    return (
      <div className="audio-player">
        <audio id="audio"></audio>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentTrack: state.entities.tracks[state.ui.audioPlayer.currentTrack],
  isPlaying: state.ui.audioPlayer.playing
});

export default connect(mapStateToProps)(AudioPlayer);
