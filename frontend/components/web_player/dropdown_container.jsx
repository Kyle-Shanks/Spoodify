import React from 'react';
import { connect } from 'react-redux';
import { deletePlaylistTrack } from '../../actions/playlist_track_actions';
import { closeDropdown, openModal, setModalComponent, setModalProps, addTrackQueue } from '../../actions/ui_actions';
import { createLike, deleteLike } from '../../actions/like_actions';

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

      // Add to Queue
      actions.push({
        title: 'Add to Queue',
        func: () => {
          this.props.addToQueue(this.props.dropdown.dropdownProps.trackId);
        },
      });

      // Save / Remove
      const like = {
        user_id: this.props.currentUser.id,
        likeable_id: this.props.dropdown.dropdownProps.trackId,
        likeable_type: 'Track',
      };
      if (this.props.currentUser.liked_track_ids.includes(this.props.dropdown.dropdownProps.trackId)) {
        // Remove
        actions.push({
          title: 'Remove from Your Library',
          func: () => {
            this.props.deleteLike(like);
            this.props.closeDropdown();
          },
        });
      } else {
        // Save
        actions.push({
          title: 'Add to Your Library',
          func: () => {
            this.props.createLike(like);
            this.props.closeDropdown();
          },
        });
      }

      if (this.props.dropdown.dropdownProps.playlistId &&
          (this.props.currentUser.id === this.props.playlists[this.props.dropdown.dropdownProps.playlistId].user.id)) {
        actions.push({
          title: 'Remove from Playlist',
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
  dropdown: state.ui.dropdown,
  currentUser: state.entities.users[state.session.currentUserId],
  playlists: state.entities.playlists
});

const mapDispatchToProps = dispatch => ({
  closeDropdown: () => dispatch(closeDropdown()),
  openModal: () => dispatch(openModal()),
  setModalProps: props => dispatch(setModalProps(props)),
  setModalComponent: comp => dispatch(setModalComponent(comp)),
  deletePT: pt => dispatch(deletePlaylistTrack(pt)),
  createLike: like => dispatch(createLike(like)),
  deleteLike: like => dispatch(deleteLike(like)),
  addToQueue: id => dispatch(addTrackQueue(id)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Dropdown);
