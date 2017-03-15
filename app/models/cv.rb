class Cv < ApplicationRecord
  belongs_to :user
  has_one :template
  has_one :personal_information, dependent: :destroy
  has_many :languages, dependent: :destroy
  has_many :skills, dependent: :destroy
  has_many :educations, dependent: :destroy
  has_many :experiences, dependent: :destroy
  has_many :projects, dependent: :destroy
  # default_scope -> { order(created_at: :desc) }
  validates :user_id, presence: true
  validates :name, presence: true, length: { maximum: 140 }
end
