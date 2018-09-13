@artists.each do |artist|
  json.set! artist.id do
    json.extract! artist, :id, :name, :description, :album_ids, :track_ids
    json.photoUrl url_for(artist.photo)
  end
end
