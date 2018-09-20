import React from 'react';
import { connect } from 'react-redux';
import { requestPlaylists } from '../../../actions/playlist_actions';
import { setModalComponent } from '../../../actions/ui_actions';
import PlaylistSelectItem from './playlist_select_item';

class PlayistSelect extends React.Component {
  componentDidMount() {
    this.props.requestPlaylists();
  }

  render () {
    const userPlaylists = this.props.playlists.filter(p => p.user.id === this.props.currentUserId);
    const playlists = userPlaylists.map(playlist => (
      <PlaylistSelectItem key={playlist.id} playlist={playlist} />
    ));
    return (
      <div className="playlist-select">
        <ul className="flex-parent">
          {playlists}
        </ul>
        <div className="rela-block create-modal-button">
          <button className="button small resizing"
            onClick={() => { this.props.setModalComponent('create') }}>
            New Playlist
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  playlists: Object.values(state.entities.playlists),
  currentUserId: state.session.currentUserId,
});

const mapDispatchToProps = dispatch => ({
  requestPlaylists: () => dispatch(requestPlaylists()),
  setModalComponent: comp => dispatch(setModalComponent(comp)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayistSelect);
