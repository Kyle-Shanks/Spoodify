export const fetchArtists = () => {
  return $.ajax(`api/artists`);
};

export const fetchArtist = id => {
  return $.ajax(`api/artists/${id}`);
};
