class CreateExperiences < ActiveRecord::Migration[5.0]
  def change
    create_table :experiences do |t|
      t.string :name
      t.date :date_from
      t.date :date_to
      t.string :description
      t.references :cv, foreign_key: true

      t.timestamps
    end
  end
end
