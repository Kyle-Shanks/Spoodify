import React from 'react';
import { connect } from 'react-redux';
import { requestAlbums } from '../../../actions/album_actions';
import AlbumIndexItem from './album_index_item';

const arrayEq = (a1, a2) => {
  return ( a1.length === a2.length && a1.every((val, idx) => val === a2[idx]) );
};

class AlbumIndex extends React.Component {
  componentDidMount() {
    this.props.requestAlbums(this.props.albumIds);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.albumIds && !arrayEq(this.props.albumIds,nextProps.albumIds)) {
      this.props.requestAlbums(nextProps.albumIds);
    }
  }

  render () {
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
  requestAlbums: ids => dispatch(requestAlbums(ids)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumIndex);
