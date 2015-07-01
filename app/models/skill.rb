class Skill < ActiveRecord::Base
  belongs_to :user
  validates :title, presence: true
  before_save :set_expiration_time

  def set_expiration_time
    if self.new_record?
      self.expiration_time = Time.now.to_i + 86400
    end
  end

  def update_expiration_time
    self.expiration_time = Time.now.to_i + 86400
  end

  def time_remaining
    sec_remaining = self.expiration_time - Time.now.to_i
    if sec_remaining > 0
      Time.at(sec_remaining).utc.strftime("%H:%M:%S")
    else
      "chain broken"
    end
  end
end
