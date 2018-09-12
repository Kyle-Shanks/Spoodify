Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root';

  namespace :api, defaults: { format: :json } do
    resources :users, only: [ :index, :show, :create ]
    resource :session, only: [ :create, :destroy ]

    resources :artists, only: [ :index, :show ]
    resources :albums, only: [ :index, :show ]
    resources :tracks, only: [ :index, :show ]
    resources :playlists, only: [ :index, :show, :create, :delete ]
    resources :playlist_tracks, only: [ :create, :destroy ]
  end
end
