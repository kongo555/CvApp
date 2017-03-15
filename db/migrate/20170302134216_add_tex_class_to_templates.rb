class AddTexClassToTemplates < ActiveRecord::Migration[5.0]
  def change
    add_column :templates, :tex_class, :string
  end
end
