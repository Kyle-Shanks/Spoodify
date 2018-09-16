import React from 'react';
import { connect } from 'react-redux';
import { requestPlaylists } from '../../../actions/playlist_actions';
import PlaylistSelectItem from './playlist_select_item';

class PlayistSelect extends React.Component {
  componentDidMount() {
    this.props.requestPlaylists();
  }

  render () {
    const playlists = this.props.playlists.map(playlist => (
      <PlaylistSelectItem key={playlist.id} playlist={playlist} />
    ));
    return (
      <div className="playlist-select">
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

export default connect(mapStateToProps, mapDispatchToProps)(PlayistSelect);
