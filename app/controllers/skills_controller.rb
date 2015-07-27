class SkillsController < ApplicationController
  def index
    @new_skill = Skill.new
    @first_link = true
    current_user ? (@skills = current_user.skills.order(:id)) : (redirect_to welcome_path)
  end

  def splash
  end

  def new
  end

  def create
    skill = current_user.skills.build(skills_params)
    if skill.save
      respond_to do |format|
        format.html {redirect_to skill_path(skill)}
        format.json {render json: skill.as_json({only: [:title, :current_streak, :longest_streak, :id]})}
      end
    end
  end

  def refresh
    skill = Skill.find(params[:format])
    skill.refresh_expiration_time
    redirect_to root_path
  end

  def destroy
  end

  private

  def skills_params
    params.require(:skill).permit(:title, :user_id)
  end
end