json.extract! @track, :id, :title
json.album @track.album, :id, :title
json.artist @track.artist, :id, :name
json.src url_for(@track.src)
