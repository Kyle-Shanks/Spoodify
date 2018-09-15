json.extract! @album, :id, :title, :release_date, :track_ids
json.artist @album.artist, :id, :name
json.photoUrl url_for(@album.photo)
