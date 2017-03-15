class CreateEducations < ActiveRecord::Migration[5.0]
  def change
    create_table :educations do |t|
      t.string :name
      t.string :date_from
      t.string :date_to
      t.string :description
      t.references :cv, foreign_key: true

      t.timestamps
    end
  end
end
