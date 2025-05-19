class Disability < ApplicationRecord
  has_many :lessons_autisms, class_name: 'LessonsAutism', foreign_key: 'disability_id'
  has_many :lessons_dyslexia, class_name: 'LessonsDyslexia', foreign_key: 'disability_id'
  has_many :lessons_hearing_speeches, class_name: 'LessonsHearingSpeech', foreign_key: 'disability_id'
  has_many :lessons_visuals, class_name: 'LessonsVisual', foreign_key: 'disability_id'
end
