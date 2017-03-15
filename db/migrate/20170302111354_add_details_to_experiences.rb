class AddDetailsToExperiences < ActiveRecord::Migration[5.0]
  def change
    add_column :experiences, :job_title, :string
    add_column :experiences, :organization, :string
    add_column :experiences, :location, :string
  end
end
