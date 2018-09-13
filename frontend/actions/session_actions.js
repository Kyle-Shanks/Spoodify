import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

// Regular Actions
const receiveCurrentUser = user => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};
const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};
const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};

// Thunk Actions
export const login = user => {
  return dispatch => SessionAPIUtil.login(user).then(
    res => dispatch(receiveCurrentUser(res)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};
export const logout = () => {
  return dispatch => SessionAPIUtil.logout().then(
    res => dispatch(logoutCurrentUser()),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};
export const signup = user => {
  return dispatch => SessionAPIUtil.signup(user).then(
    res => dispatch(receiveCurrentUser(res)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};
