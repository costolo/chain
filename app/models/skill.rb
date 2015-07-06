class Skill < ActiveRecord::Base
  belongs_to :user
  validates :title, presence: true
  before_save :set_expiration_time

  def set_expiration_time
    if self.new_record?
      self.expiration_time = Time.now.to_i + 86400
    end
  end

  def end_current_streak
    self.current_streak = 0
    self.save
  end

  def refresh_expiration_time
    self.expiration_time = Time.now.to_i + 86400
    self.save
  end

  def time_remaining
    sec_remaining = self.expiration_time - Time.now.to_i
    if sec_remaining > 0
      "Time remaining: #{Time.at(sec_remaining).utc.strftime("%H:%M:%S")}"
    else
      "Chain broken"
    end
  end
end
