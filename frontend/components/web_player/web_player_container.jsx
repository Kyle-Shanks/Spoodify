import WebPlayer from './web_player';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/ui_actions';

const mapStateToProps = state => ({
  modalOpen: state.ui.modal.isOpen
});

const mapDispatchToProps = dispatch => ({
  openModal: () => dispatch(openModal()),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WebPlayer);
