json.extract! @track, :id, :title, :album_id
json.artist @track.artist, :id, :name
json.src url_for(@track.src)
