import React from 'react';
import { connect } from 'react-redux';
import { requestAlbums } from '../../../actions/album_actions';
import AlbumIndexItem from './album_index_item';
import Loader from '../loader';
import { startAlbumsLoading, stopAlbumsLoading } from '../../../actions/ui_actions';

const arrayEq = (a1, a2) => {
  return ( a1.length === a2.length && a1.every((val, idx) => val === a2[idx]) );
};

class AlbumIndex extends React.Component {
  componentDidMount() {
    this.props.startLoading();
    this.props.requestAlbums({
      album_ids: this.props.albumIds,
      search_term: this.props.searchTerm
    });
  }

  componentWillReceiveProps(nextProps) {
    if (
      (nextProps.albumIds && !arrayEq(this.props.albumIds,nextProps.albumIds)) ||
      (nextProps.searchTerm && this.props.searchTerm !== nextProps.searchTerm)
    ) {
      this.props.requestAlbums({
        album_ids: nextProps.albumIds,
        search_term: nextProps.searchTerm
      });
    }
  }

  render () {
    if (this.props.loading) return <Loader />;

    let filteredAlbums;
    if (this.props.searchTerm) {
      filteredAlbums = this.props.albums.filter(a => a.title.toLowerCase().includes(this.props.searchTerm.toLowerCase()));
    } else {
      filteredAlbums = this.props.albums;
    }

    const albums = filteredAlbums.map(album => (
      <AlbumIndexItem key={album.id} album={album} />
    ));
    return (
      <div className="album-index">
        <ul className="flex-parent">
          {albums.length ? albums : <p className="flex centered">- No Albums -</p>}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.ui.loading.albums,
  albums: Object.values(state.entities.albums),
});

const mapDispatchToProps = dispatch => ({
  startLoading: () => dispatch(startAlbumsLoading()),
  requestAlbums: props => dispatch(requestAlbums(props)).then(() => {dispatch(stopAlbumsLoading())}),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumIndex);
