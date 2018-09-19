json.extract! @track, :id, :title, :duration
json.album @track.album, :id, :title
json.artwork url_for(@track.album.photo)
json.artist @track.artist, :id, :name
json.src url_for(@track.src)
