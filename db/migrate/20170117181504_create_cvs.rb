class CreateCvs < ActiveRecord::Migration[5.0]
  def change
    create_table :cvs do |t|
      t.string :name
      t.references :user, foreign_key: true

      t.timestamps
    end
    add_index :cvs, [:user_id, :created_at]
  end
end
