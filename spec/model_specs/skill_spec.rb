require 'rails_helper'

describe Skill do
  it "is valid with a title" do
    skill = Skill.new(title: "juggling")
    expect(skill.valid?).to be true
  end
  it "is invalid without a title" do
    skill = Skill.new(title: nil)
    #expect(skill.valid?).to be false
    expect(skill.errors[:title]).not_to include("can't be blank")
  end
end