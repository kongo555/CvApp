class EducationsController < ApplicationController
  def index
      render json: Cv.find(params[:cv_id]).educations
  end

  def update
    elements = Cv.find(params[:cv_id]).educations

    array = JSON.parse(params[:educations])
    resultElements = []
    array.each do |element|
      result = nil
      if (element.key?("id"))
        result = Education.find(element["id"])
        result.update(degree: element["degree"], institution: element["institution"], location: element["location"], date_from: element["date_from"], date_to: element["date_to"], description: element["description"])
      else
        result = elements.build(element)
        result.save
      end
      resultElements.push(result)
    end

    toDelete = Education.where.not(id: resultElements)
    toDelete.each do |element|
      element.destroy
    end

    render json: resultElements
  end
end
