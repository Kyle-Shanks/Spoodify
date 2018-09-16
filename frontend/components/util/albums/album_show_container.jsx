import React from 'react';
import { connect } from 'react-redux';
import { requestAlbum } from '../../../actions/album_actions';
import { Link } from 'react-router-dom';
import TrackIndex from '../tracks/track_container';

class AlbumShow extends React.Component {
  componentDidMount() {
    this.props.requestAlbum(this.props.match.params.albumId);
  }

  componentWillReceiveProps(nextProps) {
    if ( !this.props.album || this.props.album.id !== parseInt(nextProps.match.params.albumId) ) {
      this.props.requestAlbum(nextProps.match.params.albumId);
    }
  }

  render () {
    if (!this.props.album || !this.props.album.artist) return (
      <p>Album not found :/</p>
    );

    const ids = this.props.album.track_ids.length ? this.props.album.track_ids : [-1];
    return (
      <div className="rela-block album-show">
        <div className="rela-block show-item-tracks">
          <TrackIndex trackIds={ids}/>
        </div>
        <div className="show-item-info">
          <div className="show-img-container album">
            <img className="rela-block show-img" src={this.props.album.photoUrl}/>
          </div>
          <h2 className="rela-block content-primary-text">{this.props.album.title}</h2>
          <h5 className="rela-block">
            <Link to={`/artists/${this.props.album.artist.id}`} className="rela-inline app-link border">
              {this.props.album.artist.name}
            </Link>
          </h5>
          <h5 className="rela-block content-secondary-text">{this.props.album.track_ids.length} Songs</h5>

          <div className="rela-block show-button-container">
            <button className="rela-inline button slim resizing">Play</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state,ownProps) => ({
  album: state.entities.albums[ownProps.match.params.albumId],
});

const mapDispatchToProps = dispatch => ({
  requestAlbum: id => dispatch(requestAlbum(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow);
