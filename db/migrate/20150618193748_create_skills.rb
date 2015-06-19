class CreateSkills < ActiveRecord::Migration
  def change
    create_table :skills do |t|
      t.string :title
      t.integer :current_streak, default: 1
      t.integer :longest_streak, default: 1
      t.references :user

      t.timestamps
    end
  end
end
