json.extract! @playlist, :id, :title, :track_ids
json.user @playlist.user, :id, :username
