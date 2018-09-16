import React from 'react';
import { connect } from 'react-redux';
import PlaylistCreateModalContainer from './modals/playlist_create_modal_container';
// import PlaylistAddModalContainer from './modals/playlist_add_modal_container';
import PlaylistDeleteModalContainer from './modals/playlist_delete_modal_container';

const Modal = (props) => {
  let component;
  switch (props.modal.component) {
    case 'create':
      component = <PlaylistCreateModalContainer />
      break;
    // case 'add':
    //   component = <PlaylistAddModalContainer />
    // break;
    case 'delete':
      component = <PlaylistDeleteModalContainer />
      break;
  }

  return (
    <div className={"playlist-modal" + (props.modal.isOpen ? "" : " hidden")}>
      <div className="modal-content-container">
        {component}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  modal: state.ui.modal
});

export default connect(mapStateToProps)(Modal);
