Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :questions, only: [:index, :create, :show, :destroy]
    resources :users, only: [:create, :index, :show]
    resource :session, only: [:create, :destroy]
    resources :answers, only: [:create]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
