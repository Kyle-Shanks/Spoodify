export const fetchArtists = props => {
  return $.ajax({
    method: 'GET',
    url: `api/artists`,
    data : props
  });
};

export const fetchArtist = id => {
  return $.ajax(`api/artists/${id}`);
};
