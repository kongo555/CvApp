class CreatePersonalInformations < ActiveRecord::Migration[5.0]
  def change
    create_table :personal_informations do |t|
      t.string :name
      t.string :surname
      t.string :phone
      t.string :email
      t.date :birthday
      t.string :street
      t.string :zipCode
      t.string :town
      t.references :cv, foreign_key: true

      t.timestamps
    end
  end
end
