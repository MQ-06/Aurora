Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create]
      
      # Route /api/v1/register to users#create
      post 'register', to: 'users#create'

      post 'login', to: 'sessions#create'
    end
  end
end
