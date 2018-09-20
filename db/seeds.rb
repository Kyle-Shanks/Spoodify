# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

def save_artist(info)
  artist = Artist.new(info[:props])
  file = EzDownload.open("https://s3.amazonaws.com/spoodify-dev/#{info[:url]}")
  artist.photo.attach(io: file, filename: info[:url])
  artist.save!
end

def save_album(info)
  album = Album.new(info[:props])
  file = EzDownload.open("https://s3.amazonaws.com/spoodify-dev/#{info[:url]}")
  album.photo.attach(io: file, filename: info[:url])
  album.save!
end

def save_track(info)
  track = Track.new(info[:props])
  file = EzDownload.open("https://s3.amazonaws.com/spoodify-dev/#{info[:url]}")
  track.src.attach(io: file, filename: info[:url])
  track.save!
end

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

# Artists

save_artist({
  props: { name: 'Slacker', img_url: '', description: 'Lofi beats with a smooth sound' },
  url: 'slacker.jpg'
})
save_artist({
  props: { name: 'Trey Frey', img_url: '', description: 'A master at making dance music with gameboys' },
  url: 'trey_frey.jpg'
})
save_artist({
  props: { name: 'MF Doom', img_url: '',
    description: 'Daniel Dumile, best known by his stage name MF Doom (sometimes stylized as MF DOOM), is a British-born, US-based hip hop recording artist and record producer from Long Island, New York. Best known for his "super villain" stage persona and unique lyrics, Dumile has taken on several stage names in his career. He has appeared in several collaborative projects such as Madvillain (with Madlib), Danger Doom (with Danger Mouse), Doomstarks (with Ghostface Killah), JJ Doom (with Jneiro Jarel), NehruvianDoom (with Bishop Nehru), and Czarface Meets Metal Face (with Czarface).'
  },
  url: 'mf_doom.jpg'
})
save_artist({
  props: { name: 'Darren Korb', img_url: '',
    description: 'Darren Korb (born November 5, 1983) is an American songwriter and composer. Korb is best known for writing the music featured in Bastion, Transistor and Pyre, all of which were developed by indie developer Supergiant Games.'
  },
  url: 'darren_korb.jpg'
})
save_artist({
  props: { name: 'Anderson .Paak', img_url: '',
    description: 'Brandon Paak Anderson (born February 8, 1986), better known by his stage name Anderson Paak (stylized as Anderson .Paak), is an American rapper, singer, songwriter, drummer and record producer from Oxnard, California. He released his debut album, O.B.E. Vol. 1 in 2012, under the pseudonym Breezy Lovejoy. He went on to release Venice in 2014, under his current moniker. Paak followed with Malibu, in 2016, which received a nomination for Best Urban Contemporary Album at the Grammy Awards. Apart from his solo career, Paak is also one-half of NxWorries, alongside record producer Knxwledge. He is accompanied by the band The Free Nationals, who play a variety of instruments such as electric guitar, bass, piano, keyboards and drums and also serve as backing vocalists.'
  },
  url: 'anderson_paak.jpg'
})
save_artist({
  props: { name: 'Rad Cat', img_url: '', description: 'EDM made by a pretty rad cat' },
  url: 'rad_cat.jpg'
})
save_artist({
  props: { name: 'HOME', img_url: '', description: 'Nostalgic space vibes' },
  url: 'home.jpg'
})

# Albums

save_album({
  props: { title: 'OP-1', artist_id: 1, release_date: '2017', img_url: '' },
  url: 'slacker_op-1.jpg'
})
save_album({
  props: { title: 'Refresh', artist_id: 2, release_date: '2014', img_url: '' },
  url: 'trey_frey_refresh.jpg'
})
save_album({
  props: { title: 'Madvilliany', artist_id: 3, release_date: '2004', img_url: '' },
  url: 'mf_doom_madvilliany.jpg'
})
save_album({
  props: { title: 'Transistor OST', artist_id: 4, release_date: '2014', img_url: '' },
  url: 'darren_korb_transistor_ost.jpg'
})
save_album({
  props: { title: 'Malibu', artist_id: 5, release_date: '2016', img_url: '' },
  url: 'anderson_paak_malibu.jpg'
})
save_album({
  props: { title: 'untitled', artist_id: 6, release_date: '2017', img_url: '' },
  url: 'rad_cat_untitled.jpg'
})
save_album({
  props: { title: 'Odyssey', artist_id: 7, release_date: '2014', img_url: '' },
  url: 'home_odyssey.jpg'
})
save_album({
  props: { title: 'Tres Frais', artist_id: 2, release_date: '2015', img_url: '' },
  url: 'trey_frey_tres_frais.jpg'
})
save_album({
  props: { title: 'Bubblin', artist_id: 5, release_date: '2018', img_url: '' },
  url: 'anderson_paak_bubblin.jpg'
})

# Tracks

save_track({
  props: { title: 'Daydream', album_id: 1, duration: '3:37' },
  url: 'slacker_daydream.mp3'
})
save_track({
  props: { title: 'Plswaveback', album_id: 1, duration: '2:42' },
  url: 'slacker_plswaveback.mp3'
})
save_track({
  props: { title: 'Orange juice', album_id: 1, duration: '1:51' },
  url: 'slacker_orange_juice.mp3'
})
save_track({
  props: { title: 'Outerside', album_id: 1, duration: '2:10' },
  url: 'slacker_outerside.mp3'
})
save_track({
  props: { title: '¿Whosaround?', album_id: 1, duration: '2:02' },
  url: 'slacker_whosaround.mp3'
})
save_track({
  props: { title: 'A Little Darker', album_id: 1, duration: '2:36' },
  url: 'slacker_a_little_darker.mp3'
})

save_track({
  props: { title: 'Airglow', album_id: 2, duration: '4:36' },
  url: 'trey_frey_airglow.mp3'
})
save_track({
  props: { title: 'Black Lvng', album_id: 2, duration: '3:48' },
  url: 'trey_frey_black_lvng.mp3'
})
save_track({
  props: { title: 'Further', album_id: 2, duration: '3:59' },
  url: 'trey_frey_further.mp3'
})
save_track({
  props: { title: 'Phantasmagoria', album_id: 2, duration: '3:40' },
  url: 'trey_frey_phantasmagoria.mp3'
})

save_track({
  props: { title: 'All Caps', album_id: 3, duration: '2:14' },
  url: 'mf_doom_all_caps.mp3'
})
save_track({
  props: { title: 'Accordion', album_id: 3, duration: '1:59' },
  url: 'mf_doom_accordion.mp3'
})
save_track({
  props: { title: 'Meat Grinder', album_id: 3, duration: '2:12' },
  url: 'mf_doom_meat_grinder.mp3'
})
save_track({
  props: { title: 'Curls', album_id: 3, duration: '1:35' },
  url: 'mf_doom_curls.mp3'
})
save_track({
  props: { title: 'Figaro', album_id: 3, duration: '2:25' },
  url: 'mf_doom_figaro.mp3'
})


save_track({
  props: { title: 'Sandbox', album_id: 4, duration: '3:29' },
  url: 'darren_korb_sandbox.mp3'
})
save_track({
  props: { title: 'Apex Beat', album_id: 4, duration: '3:11' },
  url: 'darren_korb_apex_beat.mp3'
})
save_track({
  props: { title: 'In Circles', album_id: 4, duration: '3:26' },
  url: 'darren_korb_in_circles.mp3'
})
save_track({
  props: { title: 'Coasting', album_id: 4, duration: '3:29' },
  url: 'darren_korb_coasting.mp3'
})
save_track({
  props: { title: 'Gold Leaf', album_id: 4, duration: '2:43' },
  url: 'darren_korb_gold_leaf.mp3'
})
save_track({
  props: { title: 'Stained Glass', album_id: 4, duration: '2:11' },
  url: 'darren_korb_stained_glass.mp3'
})
save_track({
  props: { title: 'Water Wall', album_id: 4, duration: '3:56' },
  url: 'darren_korb_water_wall.mp3'
})
save_track({
  props: { title: 'Paper Boats', album_id: 4, duration: '4:01' },
  url: 'darren_korb_paper_boats.mp3'
})

save_track({
  props: { title: 'Am I Wrong (feat. ScHoolboy Q)', album_id: 5, duration: '4:13' },
  url: 'anderson_paak_am_i_wrong.mp3'
})
save_track({
  props: { title: 'Heart Don\'t Stand A Chance', album_id: 5, duration: '5:12' },
  url: 'anderson_paak_heart.mp3'
})
save_track({
  props: { title: 'Come Down', album_id: 5, duration: '2:56' },
  url: 'anderson_paak_come_down.mp3'
})
save_track({
  props: { title: 'Parking Lot', album_id: 5, duration: '3:54' },
  url: 'anderson_paak_parking_lot.mp3'
})
save_track({
  props: { title: 'Lite Weight', album_id: 5, duration: '3:26' },
  url: 'anderson_paak_lite_weight.mp3'
})

save_track({
  props: { title: 'I Love You', album_id: 6, duration: '3:25' },
  url: 'rad_cat_i_love_you.mp3'
})
save_track({
  props: { title: 'Bae', album_id: 6, duration: '2:17' },
  url: 'rad_cat_bae.mp3'
})

save_track({
  props: { title: 'Resonance', album_id: 7, duration: '3:33' },
  url: 'home_resonance.mp3'
})
save_track({
  props: { title: 'Oort Cloud', album_id: 7, duration: '3:26' },
  url: 'home_oort_cloud.mp3'
})
save_track({
  props: { title: 'Tides', album_id: 7, duration: '3:57' },
  url: 'home_tides.mp3'
})
save_track({
  props: { title: 'New Machines', album_id: 7, duration: '2:57' },
  url: 'home_new_machines.mp3'
})
save_track({
  props: { title: 'Come Back Down', album_id: 7, duration: '4:53' },
  url: 'home_come_back_down.mp3'
})

save_track({
  props: { title: 'Tres Frais', album_id: 8, duration: '3:42' },
  url: 'trey_frey_tres_frais.mp3'
})
save_track({
  props: { title: 'Show Me', album_id: 8, duration: '4:52' },
  url: 'trey_frey_show_me.mp3'
})
save_track({
  props: { title: 'Cruise Control', album_id: 8, duration: '4:23' },
  url: 'trey_frey_cruise_control.mp3'
})

save_track({
  props: { title: 'Bubblin\'', album_id: 9, duration: '3:30' },
  url: 'anderson_paak_bubblin.mp3'
})

# Playlists

Playlist.create([
  { title: 'Chill', user_id: 2 },
  { title: 'Hype', user_id: 4 },
  { title: 'Trap', user_id: 3 },
])

# Playlist-Track associations

PlaylistTrack.create([
  { playlist_id: 1, track_id: 1 },
  { playlist_id: 1, track_id: 6 },
  { playlist_id: 2, track_id: 3 },
  { playlist_id: 2, track_id: 8 },
  { playlist_id: 2, track_id: 11 },
  { playlist_id: 3, track_id: 13 },
  { playlist_id: 3, track_id: 21 },
  { playlist_id: 3, track_id: 18 },
  { playlist_id: 3, track_id: 7 },
])
