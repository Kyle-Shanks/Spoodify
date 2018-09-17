import React from 'react';
import { connect } from 'react-redux';
import { requestTracks } from '../../../actions/track_actions';
import { openDropdown, setDropdownProps } from '../../../actions/ui_actions';
import TrackIndexItem from './track_index_item';

const arrayEq = (a1, a2) => {
  return ( a1.length === a2.length && a1.every((val, idx) => val === a2[idx]) );
};

class TrackIndex extends React.Component {
  componentDidMount() {
    this.props.requestTracks(this.props.trackIds);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.trackIds && !arrayEq(this.props.trackIds,nextProps.trackIds)) {
      this.props.requestTracks(nextProps.trackIds);
    }
  }

  render () {
    const tracks = this.props.tracks.map(track => (
      <TrackIndexItem
        key={track.id} track={track}
        playlistId={this.props.playlistId}
        openDropdown={this.props.openDropdown}
        setDropdownProps={this.props.setDropdownProps} />
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
  requestTracks: (ids) => dispatch(requestTracks(ids)),
  openDropdown: pos => dispatch(openDropdown(pos)),
  setDropdownProps: props => dispatch(setDropdownProps(props)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackIndex);
