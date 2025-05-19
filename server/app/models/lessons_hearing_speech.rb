class LessonsHearingSpeech < ApplicationRecord
    self.table_name = "lessons_hearing_speeches"
  belongs_to :disability
end
