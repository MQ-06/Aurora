module Api
  module V1
    class SessionsController < ApplicationController
      skip_before_action :verify_authenticity_token
      skip_before_action :authenticate_user  # <- THIS FIX IS CRUCIAL

      def create
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
          token = JWT.encode({ user_id: user.id }, Rails.application.secret_key_base, 'HS256')
          render json: { message: "Login successful", user: user, token: token }, status: :ok
        else
          render json: { error: "Invalid email or password" }, status: :unauthorized
        end
      end
    end
  end
end
