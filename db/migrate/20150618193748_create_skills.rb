class CreateSkills < ActiveRecord::Migration
  def change
    create_table :skills do |t|
      t.string :title, null: false
      t.integer :current_streak, default: 1
      t.integer :longest_streak, default: 1
      t.integer :refreshed_at

      t.references :user

      t.timestamps
    end
  end
end
