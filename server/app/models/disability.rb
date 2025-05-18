
      class Disability < ApplicationRecord
  has_many :lessons_dyslexia
  has_many :lessons_hearing_speech
  has_many :lessons_autism
  has_many :lessons_visual
end


