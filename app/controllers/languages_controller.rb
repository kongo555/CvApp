class LanguagesController < ApplicationController
  def index
      render json: Cv.find(params[:cv_id]).languages
  end

  def update
    elements = Cv.find(params[:cv_id]).languages

    array = JSON.parse(params[:languages])
    resultElements = []
    array.each do |element|
      result = nil
      if (element.key?("id"))
        result = Language.find(element["id"])
        result.update(name: element["name"])
      else
        result = elements.build(element)
        result.save
      end
      resultElements.push(result)
    end

    toDelete = Language.where.not(id: resultElements)
    # logger.info("\n||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\n")
    # logger.info(toDelete.inspect)
    # logger.info("\n||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\n")

    toDelete.each do |element|
      element.destroy
    end

    render json: resultElements
  end
end
