import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentTrack, setTrackQueue, getQueuePos, playAudio, pauseAudio } from '../../../actions/ui_actions';

const TrackIndexItem = (props) => {
  if(!props.track) return null;

  let svg;
  if (props.player.currentTrackId === props.track.id && props.player.isPlaying) {
    svg = (
      <svg viewBox="0 0 200 200" className="rela-block svg" onClick={() => {
          props.pauseAudio();
        }}>
        <rect x="50" y="40" width="40" height="120" rx="8" ry="8" />
        <rect x="120" y="40" width="40" height="120" rx="8" ry="8" />
      </svg>
    );
  } else {
    svg = (
      <svg viewBox="0 0 200 200" className="rela-block svg" onClick={() => {
          props.setCurrentTrack(props.track.id);
          if (props.queueIds) {
            props.setTrackQueue(props.queueIds);
            props.getQueuePos();
          }
          props.playAudio();
        }}>
        <path d="M 60 45 L 60 155 Q 60 160 66 159 L 158 103 Q 160 100 158 97 L 66 42 Q 60 40 60 45" />
      </svg>
    );
  }

  const dura_parts = props.track.duration.split(':');
  const duration = (
    <div>{dura_parts[0]}<span className="spacing-s">:</span>{dura_parts[1]}</div>
  );

  return (
    <li>
      <div className={ "rela-block flex-parent track-item" +
        (props.player.currentTrackId === props.track.id ? ' playing' : '')}>
        <div className="track-icon">
          {svg}
        </div>
        <div className="flex track-info">
          <p className="rela-block" onDoubleClick={() => {
              props.setCurrentTrack(props.track.id);
              if (props.queueIds) {
                props.setTrackQueue(props.queueIds);
                props.getQueuePos();
              }
              props.playAudio();
            }}>
            {props.track.title}
          </p>
          <div className="rela-block content-secondary-text">
            <Link className="app-link border" to={`/artists/${props.track.artist.id}`}>{props.track.artist.name}</Link>
            <span className="spacing-m">•</span>
            <Link className="app-link border" to={`/albums/${props.track.album.id}`}>{props.track.album.title}</Link>
          </div>
        </div>
        <div className="track-menu"
          onClick={(e) => {
            e.stopPropagation();
            props.openDropdown({ x: e.clientX - 100, y: e.clientY + 3});
            props.setDropdownProps({ trackId: props.track.id, playlistId: props.playlistId });
          }}>
          • • •
        </div>
        <div className="track-duration">{duration}</div>
      </div>
    </li>
  );
};

const mapStateToProps = state => ({
  player: state.ui.audioPlayer
});

const mapDispatchToProps = dispatch => ({
  setCurrentTrack: id => dispatch(setCurrentTrack(id)),
  setTrackQueue: arr => dispatch(setTrackQueue(arr)),
  playAudio: () => dispatch(playAudio()),
  pauseAudio: () => dispatch(pauseAudio()),
  getQueuePos: () => dispatch(getQueuePos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackIndexItem);
