class SkillsController < ApplicationController
  def index
      render json: Cv.find(params[:cv_id]).skills
  end

  def update
    elements = Cv.find(params[:cv_id]).skills

    array = JSON.parse(params[:skills])
    resultElements = []
    array.each do |element|
      result = nil
      if (element.key?("id"))
        result = Skill.find(element["id"])
        result.update(name: element["name"])
      else
        result = elements.build(element)
        result.save
      end
      resultElements.push(result)
    end

    toDelete = Skill.where.not(id: resultElements)
    toDelete.each do |element|
      element.destroy
    end

    render json: resultElements
  end
end
