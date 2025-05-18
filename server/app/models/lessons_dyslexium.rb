class LessonsDyslexium < ApplicationRecord
    self.table_name = "lessons_dyslexia"
  belongs_to :disability
end
