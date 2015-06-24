class Skill < ActiveRecord::Base
  belongs_to :user
  validates :title, presence: true
  before_save :set_refreshed_at

  def set_refreshed_at
    self.new_record? ? self.refreshed_at = self.created_at.to_i : self
  end
end