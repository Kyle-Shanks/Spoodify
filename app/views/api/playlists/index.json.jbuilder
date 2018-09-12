@playlists.each do |playlist|
  json.set! playlist.id do
    json.extract! playlist, :id, :title, :user_id, :track_ids
  end
end
