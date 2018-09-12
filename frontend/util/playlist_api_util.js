export const fetchPlaylists = () => {
  return $.ajax(`api/playlists`);
};

export const fetchPlaylist = id => {
  return $.ajax(`api/playlists/${id}`);
};

export const createPlaylist = playlist => {
  return $.ajax({
    method: 'POST',
    url: `api/playlists`,
    data: { playlist: playlist }
  });
};

export const deletePlaylist = playlistId => {
  return $.ajax({
    method: 'DELETE',
    url: `api/playlists/${playlistId}`
  });
};
