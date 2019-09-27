
Rails.application.routes.draw do

  resources :widgets
  get 'persons/profile'
  devise_for :users
  # get 'persons/profile', as: 'user_root'
  root to: 'home#index'
  namespace :api do 
    namespace :v1 do 
     resources :articles, only: [:index, :create, :destroy, :update]
    end 
  end 
end