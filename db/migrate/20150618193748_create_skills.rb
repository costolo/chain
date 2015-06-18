class CreateSkills < ActiveRecord::Migration
  def change
    create_table :skills do |t|
      t.string :title
      t.integer :current_streak
      t.integer :longest_streak
    end
  end
end
