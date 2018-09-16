import PlaylistDeleteModal from './playlist_delete_modal';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deletePlaylist } from '../../../actions/playlist_actions';
import { closeModal } from '../../../actions/ui_actions';

const mapStateToProps = (state) => ({
  currentUserId: state.session.currentUserId
});

const mapDispatchToProps = (dispatch) => ({
  deletePlaylist: playlistId => dispatch(deletePlaylist(playlistId)),
  closeModal: () => dispatch(closeModal()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlaylistDeleteModal));
