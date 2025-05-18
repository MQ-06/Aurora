class CreateDisabilities < ActiveRecord::Migration[8.0]
  def change
    create_table :disabilities do |t|
      t.text :name
      t.text :description

      t.timestamps
    end
  end
end
