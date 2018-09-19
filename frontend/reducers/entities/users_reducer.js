import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../../actions/follow_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../../actions/like_actions';
import { merge } from 'lodash';

const usersReducer = ( state = {}, action ) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const newState = merge({},state,{ [action.user.id]: action.user });
      return newState;
    case RECEIVE_FOLLOW:
      const followedState = merge({}, state);
      if (action.follow.followable_type === 'Artist') {
        followedState[action.follow.user_id].followed_artist_ids.push(action.follow.followable_id);
      } else if (action.follow.followable_type === 'Playlist') {
        followedState[action.follow.user_id].followed_playlist_ids.push(action.follow.followable_id);
      }
      return followedState;
    case REMOVE_FOLLOW:
      const removedFollowState = merge({}, state);
      const currentUser = removedFollowState[action.follow.user_id];
      if (action.follow.followable_type === 'Artist') {
        const artistIdx = currentUser.followed_artist_ids.indexOf(action.follow.followable_id);
        removedFollowState[action.follow.user_id].followed_artist_ids.splice(artistIdx,1);
      } else if (action.follow.followable_type === 'Playlist') {
        const playlistIdx = currentUser.followed_playlist_ids.indexOf(action.follow.followable_id);
        removedFollowState[action.follow.user_id].followed_playlist_ids.splice(playlistIdx,1);
      }
      return removedFollowState;
    case RECEIVE_LIKE:
      const likedState = merge({}, state);
      if (action.like.likeable_type === 'Track') {
        likedState[action.like.user_id].liked_track_ids.push(action.like.likeable_id);
      } else if (action.like.likeable_type === 'Album') {
        likedState[action.like.user_id].liked_album_ids.push(action.like.likeable_id);
      }
      return likedState;
    case REMOVE_LIKE:
      const removedLikeState = merge({}, state);
      const currUser = removedLikeState[action.like.user_id];
      if (action.like.likeable_type === 'Track') {
        const trackIdx = currUser.liked_track_ids.indexOf(action.like.likeable_id);
        removedLikeState[action.like.user_id].liked_track_ids.splice(trackIdx,1);
      } else if (action.like.likeable_type === 'Album') {
        const albumIdx = currUser.liked_album_ids.indexOf(action.like.likeable_id);
        removedLikeState[action.like.user_id].liked_album_ids.splice(albumIdx,1);
      }
      return removedLikeState;
    default:
      return state;
  }
};

export default usersReducer;
