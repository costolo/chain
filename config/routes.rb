Rails.application.routes.draw do
  resources :skills

  root 'skills#index'
  get 'refresh' => 'skills#refresh', as: 'refresh'
end
