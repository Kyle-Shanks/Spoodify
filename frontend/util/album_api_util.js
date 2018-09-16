export const fetchAlbums = ids => {
  return $.ajax({
    method: 'GET',
    url: `api/albums`,
    data : { album_ids: ids }
  });
};

export const fetchAlbum = id => {
  return $.ajax(`api/albums/${id}`);
};
