class Project < ApplicationRecord
  belongs_to :cv
  validates :cv_id, presence: true
end
