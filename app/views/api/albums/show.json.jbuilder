json.extract! @album, :id, :title, :release_date, :artist_id, :track_ids
json.photoUrl url_for(@album.photo)
