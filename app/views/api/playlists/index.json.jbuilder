@playlists.each do |playlist|
  json.set! playlist.id do
    json.extract! playlist, :id, :title, :track_ids
    json.user playlist.user, :id, :username
  end
end
