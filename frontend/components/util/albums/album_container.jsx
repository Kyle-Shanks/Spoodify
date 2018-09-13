import React from 'react';
import { connect } from 'react-redux';
import { requestAlbums } from '../../../actions/album_actions';
import AlbumIndexItem from './album_index_item';

class AlbumIndex extends React.Component {
  componentDidMount() {
    this.props.requestAlbums();
  }

  render () {
    console.log(this.props)
    const albums = this.props.albums.map(album => (
      <AlbumIndexItem key={album.id} album={album} />
    ));
    return (
      <div className="album-index">
        <ul className="flex-parent">
          {albums}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  albums: Object.values(state.entities.albums),
});

const mapDispatchToProps = dispatch => ({
  requestAlbums: () => dispatch(requestAlbums()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumIndex);
