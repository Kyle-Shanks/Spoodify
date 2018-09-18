import React from 'react';
import { connect } from 'react-redux';
import TrackIndex from '../../util/tracks/track_container';

const Queue = (props) => {
  return (
    <div className="queue-container">
      <h2>Play Queue</h2>
      <TrackIndex trackIds={props.queue} />
    </div>
  );
};

const mapStateToProps = state => ({
  queue: state.ui.audioPlayer.queue
});

export default connect(mapStateToProps)(Queue);
