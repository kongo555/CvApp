class CvsController < ApplicationController
  before_action :logged_in_user, only: [:index, :show, :create, :update, :destroy]
  before_action :correct_user,   only: [:show, :update, :destroy]

  def index
      # puts(current_user.cvs)
      render json: current_user.cvs
  end

  def show
      render json: [@cv]
  end

  def create
    cv = current_user.cvs.build(cv_params)
    cv.template_id = 1
      if cv.save
        personal_information = cv.build_personal_information
        personal_information.save
        render json: cv
      else
        render nothing: true, status: :bad_request
    end
  end

  def update
    if @cv.update(cv_params)
      render json: @cv
    else
      render nothing: true, status: :unprocessable_entity
    end
  end

  def destroy
    @cv.destroy
    head :no_content
  end

  def generate
    cv = current_user.cvs.find_by(id: params[:id])
    @texClass = Template.find(cv.template_id).tex_class
    @personal_information = cv.personal_information
    @languages = cv.languages
    @skills = cv.skills
    @educations = cv.educations
    @experiences = cv.experiences
    @projects = cv.projects

    render :layout => 'generate', formats: [:pdf]
  end

  private

    def cv_params
      params.require(:cv).permit(:name, :template_id)
    end

    def correct_user
      @cv = current_user.cvs.find_by(id: params[:id])
      redirect_to root_url if @cv.nil?
    end

    def remember_cv(cv)
      session[:cv_id] = cv.id
    end
end
