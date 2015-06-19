class SkillsController < ApplicationController
  def index
    @new_skill = Skill.new
  end

  def new
  end

  def create
  end

  def destroy
  end

  private

  def skills_params
    params.require(:skill).permit(:title, :current_streak, :longest_streak, :user_id)
  end
end