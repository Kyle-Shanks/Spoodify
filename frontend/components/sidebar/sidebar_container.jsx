import Sidebar from './sidebar';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { clearPlayer } from '../../actions/ui_actions';

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.currentUserId]
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  clearPlayer: () => dispatch(clearPlayer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
