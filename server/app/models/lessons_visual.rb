class LessonsVisual < ApplicationRecord
    self.table_name = "lessons_visuals"
  belongs_to :disability
end
