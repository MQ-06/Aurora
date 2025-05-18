class LessonsVisual < ApplicationRecord
    self.table_name = "lessons_visual"
  belongs_to :disability
end
