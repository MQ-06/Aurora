class CreateLessonsAutisms < ActiveRecord::Migration[8.0]
  def change
    create_table :lessons_autisms do |t|
      t.text :title
      t.text :image_url
      t.references :disability, null: false, foreign_key: true

      t.timestamps
    end
  end
end
