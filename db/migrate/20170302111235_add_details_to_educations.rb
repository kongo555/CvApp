class AddDetailsToEducations < ActiveRecord::Migration[5.0]
  def change
    add_column :educations, :degree, :string
    add_column :educations, :institution, :string
    add_column :educations, :location, :string
  end
end
