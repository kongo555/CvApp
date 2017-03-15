class StringDateToEducations < ActiveRecord::Migration[5.0]
  def change
    change_column :educations, :date_from, :date
    change_column :educations, :date_to, :date
  end
end
