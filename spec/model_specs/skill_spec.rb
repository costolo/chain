require 'rails_helper'

describe Skill do
  it "is valid with a title" do
    skill = Skill.new(title: "juggling")
    expect(skill.valid?).to be true
  end

  it "is invalid without a title" do
    skill = Skill.new(title: nil)
    expect(skill.errors[:title]).not_to include("can't be blank")
  end

  it "sets refreshed_at to the current epoch time upon record creation" do
    skill = Skill.create(title: "hello there")
    expect(skill.refreshed_at).to eq Time.now.to_i
  end
end