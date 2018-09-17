export const fetchAlbums = props => {
  return $.ajax({
    method: 'GET',
    url: `api/albums`,
    data : props
  });
};

export const fetchAlbum = id => {
  return $.ajax(`api/albums/${id}`);
};
