import React from 'react';
import { connect } from 'react-redux';
import TrackIndex from '../../util/tracks/track_container';

const Queue = (props) => {

  let queue;
  if (props.queue.length) {
    const currentId = props.queue[props.queuePos];
    const upcomingIds = props.queue.slice(props.queuePos+1);

    queue = (
      <div className="queue-content">
        <h4>Now Playing</h4>
        <TrackIndex trackIds={[currentId]} />
        <h4>Next Up</h4>
        <TrackIndex trackIds={upcomingIds} />
      </div>
    );
  } else {
    queue = (<p className="centered">No tracks in the queue</p>);
  }

  return (
    <div className="queue-container">
      <h2>Play Queue</h2>
      {queue}
    </div>
  );
};

const mapStateToProps = state => ({
  queue: state.ui.audioPlayer.queue,
  queuePos: state.ui.audioPlayer.queuePos,
});

export default connect(mapStateToProps)(Queue);
