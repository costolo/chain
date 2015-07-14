Rails.application.routes.draw do
  devise_for :users, :controllers => { registrations: 'registrations' }
  resources :skills

  root 'skills#index'
  get 'refresh' => 'skills#refresh', as: 'refresh'
end
