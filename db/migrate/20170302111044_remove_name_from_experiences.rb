class RemoveNameFromExperiences < ActiveRecord::Migration[5.0]
  def change
    remove_column :experiences, :name, :string
  end
end
