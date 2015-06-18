class CreateSkills < ActiveRecord::Migration
  def change
    create_table :skills do |t|
      t.string :title
      t.integer :current_streak
      t.integer :longest_streak
      t.references :user

      t.timestamps
    end
  end
end
