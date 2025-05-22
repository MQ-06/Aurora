module Api
  module V1
    class LessonsController < ApplicationController
      skip_before_action :authenticate_user

      def index
        disability = Disability.find_by(id: params[:disability_id])
        return render json: { error: "Disability not found" }, status: :not_found unless disability

        lessons = case disability.id
                  when 1 then LessonsDyslexia.where(disability_id: disability.id)
                  when 2 then LessonsHearingSpeech.where(disability_id: disability.id)
                  when 3 then LessonsAutism.where(disability_id: disability.id)
                  when 4 then LessonsVisual.where(disability_id: disability.id)
                  else []
                  end

        render json: lessons
      end
    end
  end
end
