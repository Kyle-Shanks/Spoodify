import React from 'react';
import { connect } from 'react-redux';
import { requestArtists } from '../../../actions/artist_actions';
import ArtistIndexItem from './artist_index_item';

class ArtistIndex extends React.Component {
  componentDidMount() {
    this.props.requestArtists();
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
