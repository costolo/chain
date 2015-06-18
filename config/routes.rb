Rails.application.routes.draw do
  resources :skills

  root 'skills#index'
end
