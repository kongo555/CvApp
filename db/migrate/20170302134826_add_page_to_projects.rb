class AddPageToProjects < ActiveRecord::Migration[5.0]
  def change
    add_column :projects, :page, :string
  end
end
