class AddDetailsToPersonalInformations < ActiveRecord::Migration[5.0]
  def change
    add_column :personal_informations, :statement, :string
    add_column :personal_informations, :profession, :string
    add_column :personal_informations, :homepage, :string
    add_column :personal_informations, :linkedin, :string
    add_column :personal_informations, :github, :string
  end
end
