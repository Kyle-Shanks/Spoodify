import React from 'react';
import { connect } from 'react-redux';
import { requestTracks } from '../../../actions/track_actions';
import TrackIndexItem from './track_index_item';

class TrackIndex extends React.Component {
  componentDidMount() {
    this.props.requestTracks();
  }

  render () {
    const tracks = this.props.tracks.map(track => (
      <TrackIndexItem key={track.id} track={track} />
    ));
    return (
      <div className="track-index">
        <ul>
          {tracks}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tracks: Object.values(state.entities.tracks),
});

const mapDispatchToProps = dispatch => ({
  requestTracks: () => dispatch(requestTracks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackIndex);
