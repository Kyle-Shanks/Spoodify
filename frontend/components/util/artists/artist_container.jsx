import React from 'react';
import { connect } from 'react-redux';
import { requestArtists } from '../../../actions/artist_actions';
import ArtistIndexItem from './artist_index_item';

const arrayEq = (a1, a2) => {
  return ( a1.length === a2.length && a1.every((val, idx) => val === a2[idx]) );
};

class ArtistIndex extends React.Component {
  componentDidMount() {
    this.props.requestArtists({
      artist_ids: this.props.artistIds,
      search_term: this.props.searchTerm
    });
  }

  componentWillReceiveProps(nextProps) {
    if (
      (nextProps.artistIds && !arrayEq(this.props.artistIds,nextProps.artistIds)) ||
      (nextProps.searchTerm && this.props.searchTerm !== nextProps.searchTerm)
    ) {
      this.props.requestArtists({
        artist_ids: nextProps.artistIds,
        search_term: nextProps.searchTerm
      });
    }
  }

  render () {
    const artists = this.props.artists.map(artist => (
      <ArtistIndexItem key={artist.id} artist={artist} />
    ));
    return (
      <div className="artist-index">
        <ul className="flex-parent">
          {artists}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  artists: Object.values(state.entities.artists),
});

const mapDispatchToProps = dispatch => ({
  requestArtists: () => dispatch(requestArtists()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistIndex);
