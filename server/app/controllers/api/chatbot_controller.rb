require 'net/http'
require 'json'

module Api
  class ChatbotController < ApplicationController
    protect_from_forgery with: :null_session
    skip_before_action :authenticate_user  

    def hf_chat
      user_message = params[:message]
      reply = call_huggingface_api(user_message)
      render json: { reply: reply }
    end

    private

    def call_huggingface_api(message)
      uri = URI("https://api-inference.huggingface.co/models/HuggingFaceH4/zephyr-7b-beta")
      http = Net::HTTP.new(uri.host, uri.port)
      http.use_ssl = true

      headers = {
        "Authorization" => "Bearer #{ENV['HUGGINGFACE_API_KEY']}",
        "Content-Type" => "application/json"
      }

      prompt = "<|system|>You are a helpful assistant for students with disabilities. Keep your responses short and clear.<|user|> #{message} <|assistant|>"

      payload = {
        inputs: prompt
      }

      request = Net::HTTP::Post.new(uri.path, headers)
      request.body = payload.to_json

      response = http.request(request)

      begin
        body = JSON.parse(response.body)

        # Safely extract generated text
        if body.is_a?(Array) && body[0]["generated_text"]
          generated = body[0]["generated_text"]
          cleaned = generated.split("<|assistant|>").last || generated
          return cleaned.strip
        elsif body["generated_text"]
          return body["generated_text"].strip
        else
          Rails.logger.warn("Unexpected HF response: #{body.inspect}")
          return "Sorry, I couldn't generate a proper response."
        end
      rescue JSON::ParserError => e
        Rails.logger.error("Failed to parse Hugging Face response: #{response.body}")
        return "Hugging Face API error: #{response.code} #{response.message}"
      end
    end
  end
end
