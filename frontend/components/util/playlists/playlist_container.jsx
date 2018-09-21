import React from 'react';
import { connect } from 'react-redux';
import { requestPlaylists } from '../../../actions/playlist_actions';
import PlaylistIndexItem from './playlist_index_item';
import Loader from '../loader';
import { startPlaylistsLoading, stopPlaylistsLoading } from '../../../actions/ui_actions';

const arrayEq = (a1, a2) => {
  return ( a1.length === a2.length && a1.every((val, idx) => val === a2[idx]) );
};

class PlaylistIndex extends React.Component {
  componentDidMount() {
    this.props.startLoading();
    this.props.requestPlaylists({
      playlist_ids: this.props.playlistIds,
      search_term: this.props.searchTerm
    });
  }

  componentWillReceiveProps(nextProps) {
    if (
      (nextProps.playlistIds && !arrayEq(this.props.playlistIds,nextProps.playlistIds)) ||
      (nextProps.searchTerm && this.props.searchTerm !== nextProps.searchTerm) ||
      (nextProps.playlists.length !== this.props.playlists.length)
    ) {
      this.props.requestPlaylists({
        playlist_ids: nextProps.playlistIds,
        search_term: nextProps.searchTerm
      });
    }
  }

  render () {
    if (this.props.loading) return <Loader />;

    let filteredPlaylists;
    if (this.props.searchTerm) {
      filteredPlaylists = this.props.playlists.filter(p => p.title.toLowerCase().includes(this.props.searchTerm.toLowerCase()));
    } else {
      filteredPlaylists = this.props.playlists;
    }

    const playlists = filteredPlaylists.map(playlist => (
      <PlaylistIndexItem key={playlist.id} playlist={playlist} />
    ));
    return (
      <div className="playlist-index">
        <ul className="flex-parent">
          {playlists.length ? playlists : <p className="flex centered">- No Playlists -</p>}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.ui.loading.playlists,
  playlists: Object.values(state.entities.playlists),
});

const mapDispatchToProps = dispatch => ({
  startLoading: () => dispatch(startPlaylistsLoading()),
  requestPlaylists: props => dispatch(requestPlaylists(props)).then(() => {dispatch(stopPlaylistsLoading())}),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistIndex);
