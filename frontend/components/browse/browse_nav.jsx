import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { openModal, setModalComponent } from '../../actions/ui_actions';

const BrowseNav = (props) => {
  const section = props.match.params.section;
  return (
    <div className="rela-block content-nav">
      <ul className="content-nav-list">
        <li className="rela-inline">
          <Link to="/browse/artists"
            className={"rela-block app-link" + ((section === 'artists') ? ' active' : '')}>
            Artists
          </Link>
        </li>
        <li className="rela-inline">
          <Link to="/browse/albums"
            className={"rela-block app-link" + ((section === 'albums') ? ' active' : '')}>
            Albums
          </Link>
        </li>
        <li className="rela-inline">
          <Link to="/browse/tracks"
            className={"rela-block app-link" + ((section === 'tracks') ? ' active' : '')}>
            Tracks
          </Link>
        </li>
        <li className="rela-inline">
          <Link to="/browse/playlists"
            className={"rela-block app-link" + ((section === 'playlists') ? ' active' : '')}>
            Playlists
          </Link>
        </li>
      </ul>
      <div className="rela-block create-modal-button">
        <button className="button small resizing"
          onClick={() => { props.openModal(); props.setModalComponent('create') }}>
          New Playlist
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  openModal: () => dispatch(openModal()),
  setModalComponent: comp => dispatch(setModalComponent(comp)),
})

export default connect(null,mapDispatchToProps)(BrowseNav);
