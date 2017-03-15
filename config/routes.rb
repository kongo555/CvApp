Rails.application.routes.draw do
  root 'home#index'
  post '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy'

  resources :users,                     only: [:index, :create, :update, :destroy]
  resources :templates,                 only: [:index]
  resources :cvs,                       only: [:index, :show, :create, :update, :destroy] do
    resources :personal_informations,   only: [:index, :update]
    resources :languages,               only: [:index, :update]
    resources :skills,                  only: [:index, :update]
    resources :educations,              only: [:index, :update]
    resources :experiences,             only: [:index, :update]
    resources :projects,                only: [:index, :update]
  end

  get '/cv/:id/generate', to: 'cvs#generate'
  get '*path', to: 'home#index'
end
