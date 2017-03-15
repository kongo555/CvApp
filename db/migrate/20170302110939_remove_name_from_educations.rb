class RemoveNameFromEducations < ActiveRecord::Migration[5.0]
  def change
    remove_column :educations, :name, :string
  end
end
