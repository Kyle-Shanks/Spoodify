class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.string :title, null: false
      t.integer :artist_id, null: false
      t.string :release_date
      t.string :img_url
      t.timestamps
    end
    
    add_index :albums, :artist_id
  end
end
