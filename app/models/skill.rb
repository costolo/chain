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
    "Chain broken"
  end

  def refresh_expiration_time
    self.expiration_time = Time.now.to_i + 86400
    self.save
    increment_current_streak
  end

  def increment_current_streak
    self.current_streak += 1
    self.save
  end

  def time_remaining
    sec_remaining = self.expiration_time - Time.now.to_i
    if sec_remaining > 0
      time_remaining_to_s(sec_remaining)
    else
      self.end_current_streak
    end
  end

  def time_remaining_to_s(sec_remaining)
    "Time remaining: #{Time.at(sec_remaining).utc.strftime("%H:%M:%S")}"
  end
end
