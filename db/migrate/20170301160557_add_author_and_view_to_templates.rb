class AddAuthorAndViewToTemplates < ActiveRecord::Migration[5.0]
  def change
    add_column :templates, :author, :string
    add_column :templates, :view, :string
  end
end
