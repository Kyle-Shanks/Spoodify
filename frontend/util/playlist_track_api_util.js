export const createPlaylistTrack = playlistTrack => {
  return $.ajax({
    method: 'POST',
    url: `api/playlist_tracks`,
    data: { playlist_track: playlistTrack }
  });
};

export const deletePlaylistTrack = playlistTrackId => {
  return $.ajax({
    method: 'DELETE',
    url: `api/playlist_tracks/${playlistTrackId}`
  });
};
