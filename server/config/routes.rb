Rails.application.routes.draw do
  namespace :api do
    resources :contact_messages, only: [:create]

    namespace :v1 do
      resources :users, only: [:create]
      post 'register', to: 'users#create'
      post 'login', to: 'sessions#create'
    end
  end
end
