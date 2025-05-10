class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session  # To avoid CSRF errors for API
  before_action :authenticate_user

  private

  def authenticate_user
    token = request.headers['Authorization']&.split(' ')&.last
    begin
      decoded_token = JWT.decode(token, Rails.application.secret_key_base).first
      @current_user = User.find(decoded_token["user_id"])
    rescue JWT::DecodeError, ActiveRecord::RecordNotFound
      render json: { error: 'Not authorized' }, status: :unauthorized
    end
  end
end
