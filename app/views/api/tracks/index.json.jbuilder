@tracks.each do |track|
  json.set! track.id do
    json.extract! track, :id, :title, :album_id
    json.artist track.artist, :id, :name
  end
end