import PlaylistModal from './playlist_modal';
import { connect } from 'react-redux';
import { createPlaylist } from '../../actions/playlist_actions';

const mapStateToProps = (state) => ({
  currentUserId: state.session.currentUserId
});

const mapDispatchToProps = (dispatch) => ({
  createPlaylist: playlist => dispatch(createPlaylist(playlist))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistModal);
