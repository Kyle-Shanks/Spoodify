export const fetchPlaylists = props => {
  return $.ajax({
    method: 'GET',
    url: `api/playlists`,
    data : props
  });
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
