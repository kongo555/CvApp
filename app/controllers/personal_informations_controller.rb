class PersonalInformationsController < ApplicationController
  def index
      render json: Cv.find(params[:cv_id]).personal_information
  end

  def update
    # personal_information = Cv.find(params[:cv_id]).personal_information
    personal_information = PersonalInformation.find(params[:id])
    if personal_information.update(personal_information_params)
      render json: personal_information
    else
      render nothing: true, status: :unprocessable_entity
    end
  end

  private
      def personal_information_params
        params.require(:personal_information).permit(:name, :surname, :phone, :email, :birthday, :street, :zipCode, :town, :statement, :profession, :homepage, :linkedin, :github)
      end
end
