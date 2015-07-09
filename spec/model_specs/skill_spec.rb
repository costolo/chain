require 'rails_helper'

describe Skill do
  let(:valid_skill) { Skill.create(title: "valid skill") }
  let(:invalid_skill) { Skill.create(title: "invalid skill") }
  let(:streak_test) { Skill.create(title: "testing", longest_streak: 7)}

  it "is valid with a title" do
    expect(valid_skill.valid?).to be true
  end

  it "is invalid without a title" do
    expect(invalid_skill.errors[:title]).not_to include("can't be blank")
  end

  #24 hours in seconds is 86400
  it "sets expiration_time to 24 hours from the current epoch time" do
    expect(valid_skill.expiration_time).to eq Time.now.to_i + 86400
  end

  it "is initialized with a current_streak of 1" do
    expect(valid_skill.current_streak).to eq 1
  end

  it "can reset the current streak to 0" do
    valid_skill.end_current_streak
    expect(valid_skill.current_streak).to eq 0
  end

  it "updates the longest streak if the current streak becomes higher" do
    7.times { streak_test.increment_current_streak }
    expect(streak_test.longest_streak).to eq 8
  end

  xit "can give the number of seconds remaining after creation" do
    wait 5
    expect(valid_skill.time_remaining).to eq false 
  end
end