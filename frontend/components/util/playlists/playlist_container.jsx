import React from 'react';
import { connect } from 'react-redux';
import { requestPlaylists } from '../../../actions/playlist_actions';
import PlaylistIndexItem from './playlist_index_item';

class PlaylistIndex extends React.Component {
  componentDidMount() {
    this.props.requestPlaylists();
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
