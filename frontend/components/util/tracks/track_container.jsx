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
    this.props.requestTracks({
      track_ids: this.props.trackIds,
      search_term: this.props.searchTerm
    });
  }

  componentWillReceiveProps(nextProps) {
    if (
      (nextProps.trackIds && !arrayEq(this.props.trackIds,nextProps.trackIds)) ||
      (nextProps.searchTerm && this.props.searchTerm !== nextProps.searchTerm)
    ) {
      this.props.requestTracks({
        track_ids: nextProps.trackIds,
        search_term: nextProps.searchTerm
      });
    }
  }

  render () {
    let filteredTracks;
    let ids;
    if (this.props.trackIds) {
      filteredTracks = this.props.tracks.filter(t => this.props.trackIds.includes(t.id));
      ids = this.props.trackIds;
    } else {
      filteredTracks = this.props.tracks;
      ids = this.props.tracks.map(t => t.id);
    }

    const tracks = filteredTracks.map(track => (
      <TrackIndexItem
        key={track.id} track={track} queueIds={ids}
        playlistId={this.props.playlistId}
        openDropdown={this.props.openDropdown}
        setDropdownProps={this.props.setDropdownProps} />
    ));
    return (
      <div className="track-index">
        <ul>
          {tracks.length ? tracks : <p className="flex centered">- No Tracks -</p>}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tracks: Object.values(state.entities.tracks),
});

const mapDispatchToProps = dispatch => ({
  requestTracks: props => dispatch(requestTracks(props)),
  openDropdown: pos => dispatch(openDropdown(pos)),
  setDropdownProps: props => dispatch(setDropdownProps(props)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackIndex);
