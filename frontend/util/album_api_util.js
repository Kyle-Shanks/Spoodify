export const fetchAlbums = () => {
  return $.ajax(`api/albums`);
};

export const fetchAlbum = id => {
  return $.ajax(`api/albums/${id}`);
};
