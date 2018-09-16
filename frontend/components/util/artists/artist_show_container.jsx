import React from 'react';
import { connect } from 'react-redux';
import { requestArtist } from '../../../actions/artist_actions';
import { Redirect, Route, Link } from 'react-router-dom';
import ArtistShowContent from './artist_show_content';

class ArtistShow extends React.Component {
  componentDidMount() {
    this.props.requestArtist(this.props.match.params.artistId);
  }

  componentWillReceiveProps(nextProps) {
    if ( !this.props.artist || this.props.artist.id !== parseInt(nextProps.match.params.artistId) ) {
      this.props.requestArtist(nextProps.match.params.artistId);
    }
  }

  render () {
    if (!this.props.artist) return (
      <p>Artist not found :/</p>
    );

    return (
      <div className="rela-block artist-show">
        <div className="rela-block artist-header">
          <h1 className="artist-name">{this.props.artist.name}</h1>
          <div className="rela-block artist-button-container">
            <button className="rela-inline button slim resizing">Play</button>
            <button className="rela-inline button slim outline resizing">Follow</button>
          </div>
        </div>

        <Route exact path={`/artists/${this.props.artist.id}`}
          render={() => <Redirect to={`/artists/${this.props.artist.id}/overview`} />} />
        <Route path={`/artists/${this.props.artist.id}/:section`}
          render={() => <ArtistShowContent artist={this.props.artist} />} />
      </div>
    );
  }
}

const mapStateToProps = (state,ownProps) => ({
  artist: state.entities.artists[ownProps.match.params.artistId],
});

const mapDispatchToProps = dispatch => ({
  requestArtist: id => dispatch(requestArtist(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistShow);
