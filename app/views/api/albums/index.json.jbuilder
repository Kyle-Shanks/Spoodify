@albums.each do |album|
  json.set! album.id do
    json.extract! album, :id, :title, :release_date, :img_url, :artist_id, :track_ids
  end
end
