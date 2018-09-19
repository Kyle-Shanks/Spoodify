import * as FollowAPIUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

// Regular actions
const receiveFollow = follow => {
  return {
    type: RECEIVE_FOLLOW,
    follow
  };
};

const removeFollow = follow => {
  return {
    type: REMOVE_FOLLOW,
    follow
  };
};

// Thunk actions
export const createFollow = follow => {
  return dispatch => FollowAPIUtil.createFollow(follow).then(
    res => dispatch(receiveFollow(res))
  );
};

export const deleteFollow = follow => {
  return dispatch => FollowAPIUtil.deleteFollow(follow).then(
    res => dispatch(removeFollow(res))
  );
};
