import * as LikeAPIUtil from '../util/like_api_util';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

// Regular actions
const receiveLike = like => {
  return {
    type: RECEIVE_LIKE,
    like
  };
};

const removeLike = like => {
  return {
    type: REMOVE_LIKE,
    like
  };
};

// Thunk actions
export const createLike = like => {
  return dispatch => LikeAPIUtil.createLike(like).then(
    res => dispatch(receiveLike(res))
  );
};

export const deleteLike = like => {
  return dispatch => LikeAPIUtil.deleteLike(like).then(
    res => dispatch(removeLike(res))
  );
};
