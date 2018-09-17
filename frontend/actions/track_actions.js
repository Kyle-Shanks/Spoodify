import * as TrackAPIUtil from '../util/track_api_util';

export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';

// Regular actions
const receiveTracks = tracks => {
  return {
    type: RECEIVE_TRACKS,
    tracks
  };
};

const receiveTrack = track => {
  return {
    type: RECEIVE_TRACK,
    track
  };
};

// Thunk actions
export const requestTracks = props => {
  return dispatch => TrackAPIUtil.fetchTracks(props).then(
    res => dispatch(receiveTracks(res))
  );
};

export const requestTrack = id => {
  return dispatch => TrackAPIUtil.fetchTrack(id).then(
    res => dispatch(receiveTrack(res))
  );
};
