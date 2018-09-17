import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/ui_actions';
import PlaylistCreateModalContainer from './modals/playlist_create_modal_container';
import PlaylistAddModalContainer from './modals/playlist_add_modal_container';
import PlaylistDeleteModalContainer from './modals/playlist_delete_modal_container';

const Modal = (props) => {
  let component;
  switch (props.modal.component) {
    case 'create':
      component = <PlaylistCreateModalContainer />
      break;
    case 'add':
      component = <PlaylistAddModalContainer modalProps={props.modal.modalProps} />
    break;
    case 'delete':
      component = <PlaylistDeleteModalContainer modalProps={props.modal.modalProps} />
      break;
  }

  return (
    <div className={"modal" + (props.modal.isOpen ? "" : " hidden")} onClick={props.close}>
      <div className="modal-content-container" onClick={(e) => { e.stopPropagation(); }}>
        {component}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  modal: state.ui.modal,
});

const mapDispatchToProps = dispatch => ({
  close: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
