class Skill < ActiveRecord::Base
  belongs_to :user
  validates :title, presence: true
  before_save :set_refreshed_at

  def set_refreshed_at
    if self.new_record?
      self.refreshed_at = Time.now.to_i
    end
  end

  def update_refreshed_at
    self.refreshed_at = Time.now.to_i
  end
end