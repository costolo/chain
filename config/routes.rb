Rails.application.routes.draw do
  devise_for :users, :controllers => { registrations: 'registrations', sessions: 'sessions' }
  resources :skills do
    get 'refresh' => 'skills#refresh'
  end

  root 'skills#index'
  get 'welcome' => 'skills#splash', as: 'welcome'
end
