export const createPlaylistTrack = playlistTrack => {
  return $.ajax({
    method: 'POST',
    url: `api/playlist_tracks`,
    data: { playlist_track: playlistTrack }
  });
};

export const deletePlaylistTrack = playlistTrack => {
  return $.ajax({
    method: 'DELETE',
    url: `api/playlist_tracks/${0}`,
    data: { playlist_track: playlistTrack }
  });
};
