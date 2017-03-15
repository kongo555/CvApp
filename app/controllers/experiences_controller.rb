class ExperiencesController < ApplicationController
  def index
      render json: Cv.find(params[:cv_id]).experiences
  end

  def update
    elements = Cv.find(params[:cv_id]).experiences

    array = JSON.parse(params[:experiences])
    resultElements = []
    array.each do |element|
      result = nil
      if (element.key?("id"))
        result = Experience.find(element["id"])
        result.update(job_title: element["job_title"], organization: element["organization"], location: element["location"], date_from: element["date_from"], date_to: element["date_to"], description: element["description"])
      else
        result = elements.build(element)
        result.save
      end
      resultElements.push(result)
    end

    toDelete = Experience.where.not(id: resultElements)
    toDelete.each do |element|
      element.destroy
    end

    render json: resultElements
  end
end
