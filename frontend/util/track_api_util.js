export const fetchTracks = ids => {
  return $.ajax({
    method: 'GET',
    url: `api/tracks`,
    data : { track_ids: ids }
  });
};

export const fetchTrack = id => {
  return $.ajax(`api/tracks/${id}`);
};
