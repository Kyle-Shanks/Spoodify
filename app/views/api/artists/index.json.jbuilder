@artists.each do |artist|
  json.set! artist.id do
    json.extract! artist, :id, :name, :description, :img_url, :album_ids, :track_ids
  end
end
