// Loader Constants
export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';
// Modal Constants
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const SET_MODAL_COMPONENT = 'SET_MODAL_COMPONENT';
export const SET_MODAL_PROPS = 'SET_MODAL_PROPS';
// Dropdown Constants
export const OPEN_DROPDOWN = 'OPEN_DROPDOWN';
export const CLOSE_DROPDOWN = 'CLOSE_DROPDOWN';
export const SET_DROPDOWN_PROPS = 'SET_DROPDOWN_PROPS';
// Audio Player Constants
export const SET_CURRENT_TRACK = 'SET_CURRENT_TRACK';
export const PLAY_AUDIO = 'PLAY_AUDIO';
export const PAUSE_AUDIO = 'PAUSE_AUDIO';
export const SET_TRACK_QUEUE = 'SET_TRACK_QUEUE';
export const ADD_TRACK_QUEUE = 'ADD_TRACK_QUEUE';
export const GET_QUEUE_POS = 'GET_QUEUE_POS';
export const NEXT_TRACK = 'NEXT_TRACK';
export const PREV_TRACK = 'PREV_TRACK';

// Loading Actions
export const startLoading = () => {
  return { type: START_LOADING };
};
export const stopLoading = () => {
  return { type: STOP_LOADING };
};

// Modal Actions
export const openModal = () => {
  return { type: OPEN_MODAL };
};
export const closeModal = () => {
  return { type: CLOSE_MODAL };
};
export const setModalComponent = component => {
  return {
    type: SET_MODAL_COMPONENT,
    component
  }
};
export const setModalProps = props => {
  return {
    type: SET_MODAL_PROPS,
    props
  }
};

// Dropdown Actions
export const openDropdown = pos => {
  return {
    type: OPEN_DROPDOWN,
    pos
  };
};
export const closeDropdown = () => {
  return { type: CLOSE_DROPDOWN };
};
export const setDropdownProps = props => {
  return {
    type: SET_DROPDOWN_PROPS,
    props
  };
};

// Audio Player Actions
export const setCurrentTrack = trackId => {
  return {
    type: SET_CURRENT_TRACK,
    trackId
  };
};
export const playAudio = () => {
  return { type: PLAY_AUDIO };
};
export const pauseAudio = () => {
  return { type: PAUSE_AUDIO };
};
export const setTrackQueue = queue => {
  return {
    type: SET_TRACK_QUEUE,
    queue
  };
};
export const addTrackQueue = trackId => {
  return {
    type: ADD_TRACK_QUEUE,
    trackId
  };
};
export const getQueuePos = () => {
  return { type: GET_QUEUE_POS };
};
export const nextTrack = () => {
  return { type: NEXT_TRACK };
};
export const prevTrack = () => {
  return { type: PREV_TRACK };
};
