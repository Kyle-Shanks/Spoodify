import React from 'react';
import { connect } from 'react-redux';
import { deletePlaylistTrack } from '../../actions/playlist_track_actions';
import { closeDropdown, openModal, setModalComponent, setModalProps } from '../../actions/ui_actions';

class Dropdown extends React.Component {
  render () {
    const pos = {
      top: this.props.dropdown.pos.y,
      left: this.props.dropdown.pos.x,
    };

    const actions = [];
    if (this.props.dropdown.dropdownProps.trackId) {
      actions.push({
        title: 'Add to Playlist',
        func: () => {
          this.props.openModal();
          this.props.setModalComponent('add');
          this.props.setModalProps({ trackId: this.props.dropdown.dropdownProps.trackId });
          this.props.closeDropdown();
        },
      });
      if (this.props.dropdown.dropdownProps.playlistId) {
        actions.push({
          title: 'Remove from this Playlist',
          func: () => {
            this.props.deletePT({
              playlist_id: this.props.dropdown.dropdownProps.playlistId,
              track_id: this.props.dropdown.dropdownProps.trackId,
            });
            this.props.closeDropdown();
          },
        });
      }
    }

    const actionLinks = actions.map((action, idx) => (
      <li className="rela-block" key={idx} onClick={action.func}>{action.title}</li>
    ));

    return (
      <div className={"dropdown-menu" + (this.props.dropdown.isOpen ? "" : " hidden")} style={pos}>
        <ul className="rela-block dropdown-actions">
          {actionLinks}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dropdown: state.ui.dropdown
});

const mapDispatchToProps = dispatch => ({
  closeDropdown: () => dispatch(closeDropdown()),
  openModal: () => dispatch(openModal()),
  setModalProps: props => dispatch(setModalProps(props)),
  setModalComponent: comp => dispatch(setModalComponent(comp)),
  deletePT: pt => dispatch(deletePlaylistTrack(pt)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Dropdown);
