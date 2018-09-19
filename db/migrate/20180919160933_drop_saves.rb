class DropSaves < ActiveRecord::Migration[5.2]
  def change
    drop_table :saves
  end
end
