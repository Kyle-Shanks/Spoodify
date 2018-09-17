import React from 'react';
import { connect } from 'react-redux';
import { requestPlaylists } from '../../../actions/playlist_actions';
import PlaylistIndexItem from './playlist_index_item';

const arrayEq = (a1, a2) => {
  return ( a1.length === a2.length && a1.every((val, idx) => val === a2[idx]) );
};

class PlaylistIndex extends React.Component {
  componentDidMount() {
    this.props.requestPlaylists({
      playlist_ids: this.props.playlistIds,
      search_term: this.props.searchTerm
    });
  }

  componentWillReceiveProps(nextProps) {
    if (
      (nextProps.playlistIds && !arrayEq(this.props.playlistIds,nextProps.playlistIds)) ||
      (nextProps.searchTerm && this.props.searchTerm !== nextProps.searchTerm)
    ) {
      this.props.requestPlaylists({
        playlist_ids: nextProps.playlistIds,
        search_term: nextProps.searchTerm
      });
    }
  }

  render () {
    const playlists = this.props.playlists.map(playlist => (
      <PlaylistIndexItem key={playlist.id} playlist={playlist} />
    ));
    return (
      <div className="playlist-index">
        <ul className="flex-parent">
          {playlists}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  playlists: Object.values(state.entities.playlists),
});

const mapDispatchToProps = dispatch => ({
  requestPlaylists: () => dispatch(requestPlaylists()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistIndex);