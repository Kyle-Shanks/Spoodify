import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { closeModal } from '../../../actions/ui_actions';
import { createPlaylistTrack } from '../../../actions/playlist_track_actions';

const PlaylistSelectItem = (props) => {
  if(!props.playlist) return null;
  return (
    <li className="index-item">
      <div className="rela-block content-item">
        <div className="rela-block img-container playlist-img">
          <Link className="abs-center app-link content-play" to={`/playlists/${props.playlist.id}`}>
            <div className="rela-inline svg-container item"
              onClick={() => {
                props.closeModal();
                props.createPT({ playlist_id: props.playlist.id, track_id: props.trackId })
              }}>
              <svg viewBox="0 0 300 300" className="rela-block svg item">
                <path d="M 150 100 L 150 200" strokeWidth="5"/>
                <path d="M 100 150 L 200 150" strokeWidth="5"/>
              </svg>
            </div>
          </Link>
          <div className="abs-center playlist-title">{props.playlist.title}</div>
        </div>
        <p className="rela-block content-primary-text">{props.playlist.title}</p>
        <p className="rela-block content-secondary-text">{props.playlist.track_ids.length} Song(s)</p>
      </div>
    </li>
  );
};

const mapStateToProps = state => ({
  trackId: state.ui.modal.modalProps.trackId
});

const mapDispatchToProps = dispatch => ({
  createPT: pt => dispatch(createPlaylistTrack(pt)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistSelectItem);
