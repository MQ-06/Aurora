class LessonsHearingSpeech < ApplicationRecord
    self.table_name = "lessons_hearing_speech"
  belongs_to :disability
end
