class SkillsController < ApplicationController
  def index
    session[:user_id] = User.first.id
    @new_skill = Skill.new
  end

  def new
  end

  def create
    skill = current_user.skills.build(skills_params)
    if skill.save
      respond_to do |format|
        format.html {redirect_to skill_path(skill)}
        format.json {render json: skill.as_json({only: :title})}
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