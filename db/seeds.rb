# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Artist.destroy_all
Album.destroy_all
Track.destroy_all
Playlist.destroy_all
PlaylistTrack.destroy_all

ApplicationRecord.connection.reset_pk_sequence!('users')
ApplicationRecord.connection.reset_pk_sequence!('artists')
ApplicationRecord.connection.reset_pk_sequence!('albums')
ApplicationRecord.connection.reset_pk_sequence!('tracks')
ApplicationRecord.connection.reset_pk_sequence!('playlists')
ApplicationRecord.connection.reset_pk_sequence!('playlist_tracks')

User.create([
  { username: 'Guest User', email: 'guest@user.com', password: 'guestuser', img_url: '' },
  { username: 'Banana Bread', email: 'banana@bread.com', password: 'bananabread', img_url: '' },
  { username: 'kyle', email: 'kyle@apps.io', password: 'kylekylekyle', img_url: '' },
  { username: 'dan', email: 'dan@apps.io', password: 'dandandan', img_url: '' },
  { username: 'n00bkid', email: 'n00bkid@wow.com', password: 'hunter2', img_url: '' },
])

# Artist.create([
#   { name: 'Slacker', description: 'lofi', img_url: '' },
#   { name: 'Anamanaguchi', description: 'chiptunes', img_url: '' },
# ])

art = Artist.new({ name: 'Slacker', description: 'lofi', img_url: '' })
file = EzDownload.open('https://s3.amazonaws.com/spoodify-dev/slacker_avatar.jpg')
art.photo.attach(io: file, filename: 'slacker_avatar.jpg')
art.save!

art2 = Artist.new({ name: 'Anamanaguchi', description: 'chiptunes', img_url: '' })
file = EzDownload.open('https://s3.amazonaws.com/spoodify-dev/anamanaguchi_avatar.png')
art2.photo.attach(io: file, filename: 'anamanaguchi_avatar.png')
art2.save!

# Album.create([
#   { title: 'OP-1', artist_id: 1, release_date: '2017', img_url: '' },
#   { title: 'Endless Fantasy', artist_id: 2, release_date: '2013', img_url: '' },
#   { title: 'Power Supply', artist_id: 2, release_date: '2006', img_url: '' },
# ])

album = Album.new({ title: 'OP-1', artist_id: 1, release_date: '2017', img_url: '' })
file = EzDownload.open('https://s3.amazonaws.com/spoodify-dev/slacker_op-1_avatar.jpg')
album.photo.attach(io: file, filename: 'slacker_op-1_avatar.jpg')
album.save!

album2 = Album.new({ title: 'Endless Fantasy', artist_id: 2, release_date: '2013', img_url: '' })
file = EzDownload.open('https://s3.amazonaws.com/spoodify-dev/anamanaguchi_endless_fantasy_avatar.jpg')
album2.photo.attach(io: file, filename: 'anamanaguchi_endless_fantasy_avatar.jpg')
album2.save!

album3 = Album.new({ title: 'Power Supply', artist_id: 2, release_date: '2006', img_url: '' })
file = EzDownload.open('https://s3.amazonaws.com/spoodify-dev/anamanaguchi_power_supply_avatar.jpg')
album3.photo.attach(io: file, filename: 'anamanaguchi_power_supply_avatar.jpg')
album3.save!


Track.create([
  { title: 'Plswaveback', album_id: 1 },
  { title: 'Daydream', album_id: 1 },
  { title: 'Planet', album_id: 2 },
  { title: 'Prom Night', album_id: 2 },
  { title: 'Meow', album_id: 2 },
  { title: 'Endless Fantasy', album_id: 2 },
  { title: 'Helix Nebula', album_id: 3 },
  { title: 'Fast Turtle', album_id: 3 },
  { title: 'Flora/Fauna', album_id: 3 },
])

Playlist.create([
  { title: 'Chill', user_id: 2 },
  { title: 'Hype', user_id: 4 },
])

PlaylistTrack.create([
  { playlist_id: 1, track_id: 1 },
  { playlist_id: 1, track_id: 2 },
  { playlist_id: 1, track_id: 9 },
  { playlist_id: 2, track_id: 3 },
  { playlist_id: 2, track_id: 4 },
  { playlist_id: 2, track_id: 8 },
])
