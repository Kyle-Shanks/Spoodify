import PlaylistAddModal from './playlist_add_modal';
import { connect } from 'react-redux';
import { closeModal } from '../../../actions/ui_actions';

const mapStateToProps = (state) => ({
  currentUserId: state.session.currentUserId
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistAddModal);
