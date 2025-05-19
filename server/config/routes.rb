Rails.application.routes.draw do
  namespace :api do
    post '/hf_chat', to: 'chatbot#hf_chat'
    namespace :v1 do
      resources :users, only: [:create]
      post 'login', to: 'sessions#create'
       get 'lessons', to: 'lessons#index'
      resources :contact_messages, only: [:create]

    end
  end
end
