export const fetchTracks = props => {
  return $.ajax({
    method: 'GET',
    url: `api/tracks`,
    data : props
  });
};

export const fetchTrack = id => {
  return $.ajax(`api/tracks/${id}`);
};
