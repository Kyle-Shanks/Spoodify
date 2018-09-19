class AddDurationColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :tracks, :duration, :string
  end
end
