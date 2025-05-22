class LessonsAutism < ApplicationRecord
  self.table_name = "lessons_autisms"
  belongs_to :disability
end
