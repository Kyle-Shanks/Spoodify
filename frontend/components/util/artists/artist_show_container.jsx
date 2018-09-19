import React from 'react';
import { connect } from 'react-redux';
import { requestArtist } from '../../../actions/artist_actions';
import { Redirect, Route, Link } from 'react-router-dom';
import ArtistShowContent from './artist_show_content';
import { playAudio, setTrackQueue, setCurrentTrack, getQueuePos } from '../../../actions/ui_actions';
import { createFollow, deleteFollow } from '../../../actions/follow_actions';

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
  }

  componentDidMount() {
    this.props.requestArtist(this.props.match.params.artistId);
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

  handleFollow(e) {
    const following = this.props.currentUser.followed_artist_ids.includes(this.props.artist.id);
    const follow = {
      user_id: this.props.currentUser.id,
      followable_id: this.props.artist.id,
      followable_type: 'Artist'
    };

    following ? this.props.deleteFollow(follow) : this.props.createFollow(follow);
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
            <button className="rela-inline button slim outline resizing"
              onClick={this.handleFollow}>
              {this.props.currentUser.followed_artist_ids.includes(this.props.artist.id) ? 'Unfollow' : 'Follow'}
            </button>
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
  currentUser: state.entities.users[state.session.currentUserId],
});

const mapDispatchToProps = dispatch => ({
  requestArtist: id => dispatch(requestArtist(id)),
  playAudio: () => dispatch(playAudio()),
  setTrackQueue: arr => dispatch(setTrackQueue(arr)),
  setCurrentTrack: id => dispatch(setCurrentTrack(id)),
  getQueuePos: () => dispatch(getQueuePos()),
  createFollow: follow => dispatch(createFollow(follow)),
  deleteFollow: follow => dispatch(deleteFollow(follow)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistShow);
