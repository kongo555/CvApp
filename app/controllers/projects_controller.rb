class ProjectsController < ApplicationController
  def index
      render json: Cv.find(params[:cv_id]).projects
  end

  def update
    elements = Cv.find(params[:cv_id]).projects

    array = JSON.parse(params[:projects])
    resultElements = []
    array.each do |element|
      result = nil
      if (element.key?("id"))
        result = Project.find(element["id"])
        result.update(name: element["name"], page: element["page"], date_from: element["date_from"], date_to: element["date_to"], description: element["description"])
      else
        result = elements.build(element)
        result.save
      end
      resultElements.push(result)
    end

    toDelete = Project.where.not(id: resultElements)
    toDelete.each do |element|
      element.destroy
    end

    render json: resultElements
  end
end
