import React from 'react';
import { connect } from 'react-redux';
import { requestArtist } from '../../../actions/artist_actions';
import { Redirect, Route, Link } from 'react-router-dom';
import ArtistShowContent from './artist_show_content';
import { playAudio, setTrackQueue, setCurrentTrack, getQueuePos } from '../../../actions/ui_actions';

class ArtistShow extends React.Component {
  componentDidMount() {
    this.props.requestArtist(this.props.match.params.artistId);
    this.handlePlay = this.handlePlay.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if ( !this.props.artist || this.props.artist.id !== parseInt(nextProps.match.params.artistId) ) {
      this.props.requestArtist(nextProps.match.params.artistId);
    }
  }

  handlePlay(e) {
    if (this.props.artist.track_ids) {
      this.props.setTrackQueue(this.props.artist.track_ids);
      this.props.setCurrentTrack(this.props.artist.track_ids[0]);
      this.props.playAudio();
      this.props.getQueuePos();
    }
  }

  render () {
    if (!this.props.artist) return (
      <p>Artist not found :/</p>
    );

    return (
      <div className="rela-block artist-show">
        <div className="artist-background">
          <img className="abs-center" src={this.props.artist.photoUrl} />
        </div>
        <div className="rela-block artist-header">
          <h1 className="artist-name">{this.props.artist.name}</h1>
          <div className="rela-block artist-button-container">
            <button className="rela-inline button slim resizing"
              onClick={this.handlePlay}>
              Play
            </button>
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
  playAudio: () => dispatch(playAudio()),
  setTrackQueue: arr => dispatch(setTrackQueue(arr)),
  setCurrentTrack: id => dispatch(setCurrentTrack(id)),
  getQueuePos: () => dispatch(getQueuePos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistShow);
