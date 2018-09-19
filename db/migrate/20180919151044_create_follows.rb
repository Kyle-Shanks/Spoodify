class CreateFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
      t.integer :user_id, null: false
      t.integer :followable_id, null: false
      t.string :followable_type, null: false
      t.timestamps
    end

    add_index :follows, :user_id
    add_index :follows, :followable_id
  end
end
