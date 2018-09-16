import PlaylistCreateModal from './playlist_create_modal';
import { connect } from 'react-redux';
import { createPlaylist } from '../../../actions/playlist_actions';
import { closeModal } from '../../../actions/ui_actions';

const mapStateToProps = (state) => ({
  currentUserId: state.session.currentUserId
});

const mapDispatchToProps = (dispatch) => ({
  createPlaylist: playlist => dispatch(createPlaylist(playlist)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistCreateModal);
