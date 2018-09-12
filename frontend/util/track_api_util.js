export const fetchTracks = () => {
  return $.ajax(`api/tracks`);
};

export const fetchTrack = id => {
  return $.ajax(`api/tracks/${id}`);
};
