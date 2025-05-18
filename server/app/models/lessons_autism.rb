class LessonsAutism < ApplicationRecord
    self.table_name = "lessons_autism"
  belongs_to :disability
end
