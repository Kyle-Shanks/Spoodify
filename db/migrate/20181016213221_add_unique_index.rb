class AddUniqueIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :users, :username
    remove_index :users, :email
    add_index :users, :username, unique: true
    add_index :users, :email, unique: true

    remove_index :playlist_tracks, :playlist_id
    remove_index :playlist_tracks, :track_id
    add_index :playlist_tracks, [:playlist_id, :track_id], unique: true
  end
end
