module Api::V1
  class ContactMessagesController < ApplicationController
    skip_before_action :authenticate_user! # <- Add this line if using Devise or similar

    def create
      contact = ContactMessage.new(contact_params)
      if contact.save
        render json: { message: 'Message received successfully' }, status: :created
      else
        render json: { errors: contact.errors.full_messages }, status: :unprocessable_entity
      end
    end

    private

    def contact_params
      params.require(:contact_message).permit(:full_name, :email, :subject, :message)
    end
  end
end
