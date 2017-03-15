class AddTemplateToCvs < ActiveRecord::Migration[5.0]
  def change
    add_reference :cvs, :template, foreign_key: true
  end
end
